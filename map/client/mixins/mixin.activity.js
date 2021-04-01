import _ from 'lodash'
import i18next from 'i18next'
import sift from 'sift'
import moment from 'moment'
import logger from 'loglevel'
import centroid from '@turf/centroid'
import explode from '@turf/explode'
import { Loading, Dialog } from 'quasar'
import { Layout } from '../../../core/client/layout'
import { setGatewayJwt } from '../utils'
import { utils as kCoreUtils } from '../../../core/client'
import { readAsTimeOrDuration, makeTime } from '../../common/moment-utils'

export default {
  data () {
    return {
      forecastModelHandlers: {},
      layerCategories: [],
      variables: [],
      engine: 'leaflet',
      engineReady: false,
      engineContainerWidth: null,
      engineContainerHeight: null
    }
  },
  computed: {
    viewStyle () {
      return 'width: 100%; height: 100%; fontWeight: normal; zIndex: 0; position: absolute;'
    },
    variablesForCurrentLevel () {
      return this.variables.map(variable => Object.assign({ name: `${variable.name}-${this.selectedLevel}` }, _.omit(variable, ['name'])))
    },
    currentVariables () {
      return this.hasSelectableLevels ? this.variablesForCurrentLevel : this.variables
    }
  },
  methods: {
    is2D () {
      return (this.engine === 'leaflet')
    },
    is3D () {
      return (this.engine === 'cesium')
    },
    // This method should be overriden in activities
    getFeatureActions (feature, layer) {
      return []
    },
    async getCatalogLayers () {
      let layers = []
      // We get layers coming from global catalog first if any
      const globalCatalogService = this.$api.getService('catalog', '')
      if (globalCatalogService) {
        const response = await globalCatalogService.find()
        layers = layers.concat(response.data)
      }
      // Then we get layers coming from contextual catalog if any
      const catalogService = this.$api.getService('catalog')
      if (catalogService && (catalogService !== globalCatalogService)) {
        const response = await catalogService.find()
        layers = layers.concat(response.data)
      }
      const gatewayToken = this.$api.get('storage').getItem(this.$config('gatewayJwt'))
      return (gatewayToken ? setGatewayJwt(layers, gatewayToken) : layers)
    },
    async addCatalogLayer (layer) {
      // Check if available for current engine
      if (layer[this.engine]) {
        // Process i18n
        if (layer.i18n) {
          const locale = kCoreUtils.getAppLocale()
          const i18n = _.get(layer.i18n, locale)
          if (i18n) i18next.addResourceBundle(locale, 'kdk', i18n, true, true)
        }
        if (this.$t(layer.name)) layer.label = this.$t(layer.name)
        if (this.$t(layer.description)) layer.description = this.$t(layer.description)
        // Check for Weacast API availability
        const isWeacastLayer = _.get(layer, `${this.engine}.type`, '').startsWith('weacast.')
        if (isWeacastLayer && (!this.weacastApi || !this.forecastModel)) return
        await this.addLayer(layer)
      }
      // Filter layers with variables, not just visible ones because we might want to
      // probe weather even if there is no visual representation (e.g. in globe)
      if (layer.variables) this.variables = _.uniqBy(this.variables.concat(layer.variables), (variable) => variable.name)
    },
    async removeCatalogLayer (layer) {
      // Check if available for current engine
      if (layer[this.engine]) {
        await this.removeLayer(layer.name)
      }
    },
    async getCatalogCategories () {
      let categories = []
      // We get categories coming from global catalog first if any
      const globalCatalogService = this.$api.getService('catalog', '')
      if (globalCatalogService) {
        const response = await globalCatalogService.find({ query: { type: 'Category' } })
        categories = categories.concat(response.data)
      }
      // Then we get categories coming from contextual catalog if any
      const catalogService = this.$api.getService('catalog')
      if (catalogService && (catalogService !== globalCatalogService)) {
        const response = await catalogService.find({ query: { type: 'Category' } })
        categories = categories.concat(response.data)
      }
      return categories
    },
    async refreshLayerCategories () {
      // Merge built-in categories with user-defiend ones
      this.layerCategories = await this.getCatalogCategories()
      this.layerCategories = this.layerCategories.concat(_.get(this, 'activityOptions.catalog.categories', []))
    },
    async refreshLayers () {
      // Clear layers and variables
      this.layers = {}
      this.variables = []
      let catalogLayers = await this.getCatalogLayers()
      // Apply global layer filter
      catalogLayers = catalogLayers.filter(sift(_.get(this, 'activityOptions.catalog.filter', {})))
      // Iterate and await layers as creation is async and we need to have all layers ready
      // before checking if there is some background layer
      for (let i = 0; i < catalogLayers.length; i++) {
        await this.addCatalogLayer(catalogLayers[i])
      }
      // We need at least an active background
      const hasVisibleBaseLayer = catalogLayers.find((layer) => (layer.type === 'BaseLayer') && layer.isVisible)
      if (!hasVisibleBaseLayer) {
        const baseLayer = catalogLayers.find((layer) => (layer.type === 'BaseLayer'))
        if (baseLayer) await this.showLayer(baseLayer.name)
      }
    },
    isUserLayer (layer) {
      return ((_.get(layer, `${this.engine}.type`) === 'geoJson') &&
              (!layer._id || (layer.service === 'features')))
    },
    isLayerSelectable (layer) {
      if (_.has(layer, 'isSelectable')) return _.get(layer, 'isSelectable')
      // Possible only when not edited by default
      else return (typeof this.isLayerEdited === 'function' ? !this.isLayerEdited(layer) : true)
    },
    isLayerStorable (layer) {
      if (_.has(layer, 'isStorable')) return _.get(layer, 'isStorable')
      // Only possible when user-defined layer and not yet saved
      else return (this.isUserLayer(layer) && !layer._id)
    },
    isLayerEditable (layer) {
      if (_.has(layer, 'isEditable')) return _.get(layer, 'isEditable')
      // Only possible on user-defined layers by default
      else return this.isUserLayer(layer)
    },
    isLayerRemovable (layer) {
      if (_.has(layer, 'isRemovable')) return _.get(layer, 'isRemovable')
      // Only possible on user-defined layers by default
      else return this.isUserLayer(layer)
    },
    isLayerStyleEditable (layer) {
      if (_.has(layer, 'isStyleEditable')) return _.get(layer, 'isStyleEditable')
      // Only possible on user-defined layers by default
      return this.isUserLayer(layer)
    },
    async resetLayer (layer) {
      // Reset layer with new setup but keep track of current visibility state
      // as adding the layer back will restore default visibility state
      const isVisible = this.isLayerVisible(layer.name)
      await this.removeLayer(layer.name)
      await this.addLayer(layer)
      if (isVisible) await this.showLayer(layer.name)
    },
    configureLayerActions (layer) {
      let actions = _.get(this.activityOptions, 'layers.actions')
      if (actions) {
        // Apply filtering
        actions = Layout.filterContent(actions, _.get(this.activityOptions, 'layers.filter', {}))
      }
      // As context is different for each item we need to clone the global action configuration
      // otheriwse context will always reference the last processed item
      actions = Layout.bindContent(_.cloneDeep(actions), this)
      // Add 'virtual' action used to trigger the layer
      actions.push({ id: 'toggle', handler: () => this.onTriggerLayer(layer) })
      // Store the actions and make it reactive
      this.$set(layer, 'actions', actions)
      return actions
    },
    getLayerTimeRange (layer) {
      const now = moment.utc()
      let start, end, step, sources
      // Check for Weacast layers first
      if (_.get(layer, 'leaflet.type', '').startsWith('weacast')) {
        sources = [{
          from: `P${this.forecastModel.lowerLimit - this.forecastModel.interval}S`,
          to: `P${this.forecastModel.upperLimit + this.forecastModel.interval}S`
        }]
      } else {
        // Then for data sources, depending on the layer type configuration is not at the same place
        sources = _.get(layer, 'meteo_model', _.get(layer, 'time_based', [layer]))
      }
      sources.forEach(source => {
        // only consider meteo sources for which associated forecast model is the current one
        if (source.model && (source.model !== this.forecastModel.name)) return
        if (source.from) {
          const from = makeTime(readAsTimeOrDuration(source.from), now)
          start = (start ? moment.min(start, from) : from)
        }
        if (source.to) {
          const to = makeTime(readAsTimeOrDuration(source.to), now)
          end = (end ? moment.max(end, to) : to)
        }
        if (source.every) {
          const every = moment.duration(source.every)
          step = (step ? (step.asSeconds() > every.asSeconds() ? every : step) : every)
        }
      })
      // No a valid source ?
      if (!start && !end) return null
      // When there is not step provided this means it's a meteorological source
      if (!step) step = moment.duration(this.forecastModel.interval, 's')
      return { start, end, step }
    },
    onLayerAdded (layer) {
      this.configureLayerActions(layer)
    },
    async onTriggerLayer (layer) {
      if (!this.isLayerVisible(layer.name)) {
        await this.showLayer(layer.name)
      } else {
        await this.hideLayer(layer.name)
      }
      // Check if the activity is using context restoration
      const hasContext = (typeof this.storeContext === 'function')
      if (hasContext) this.storeContext('layers')
    },
    onZoomIn () {
      const center = this.getCenter()
      this.center(center.longitude, center.latitude, center.zoomLevel ? center.zoomLevel + 1 : center.altitude * 0.5)
    },
    onZoomOut () {
      const center = this.getCenter()
      this.center(center.longitude, center.latitude, center.zoomLevel ? center.zoomLevel - 1 : center.altitude * 2)
    },
    onZoomToLayer (layer) {
      this.zoomToLayer(layer.name)
    },
    async onSaveLayer (layer) {
      const geoJson = this.toGeoJson(layer.name)
      // Check for invalid features first
      const check = this.checkFeatures(geoJson)
      if (check.kinks.length > 0) {
        const result = await kCoreUtils.dialog({
          title: this.$t('mixins.activity.INVALID_FEATURES_DIALOG_TITLE', { features: check.kinks }),
          message: this.$t('mixins.activity.INVALID_FEATURES_DIALOG_MESSAGE', { features: check.kinks }),
          html: true,
          ok: {
            label: this.$t('OK'),
            flat: true
          },
          cancel: {
            label: this.$t('CANCEL'),
            flat: true
          }
        })
        if (!result.ok) return
      }
      // Change data source from in-memory to features service
      _.merge(layer, {
        service: 'features',
        [this.engine]: { source: '/api/features' }
      })
      // When saving from one engine copy options to the other one so that it will be available in both of them
      _.set(layer, (this.is2D() ? 'cesium' : 'leaflet'), Object.assign({}, _.get(layer, this.engine)))
      const features = (geoJson.type === 'FeatureCollection' ? geoJson.features : [geoJson])
      // If too much data use tiling
      // The threshold is based on the number of points and not features.
      // Indeed otherwise the complexity will be different depending on the geometry type
      // (eg a bucket of 1000 polygons can actually contains a lot of points).
      let nbPoints = 0
      features.forEach(feature => {
        nbPoints += explode(feature).features.length
      })
      if (this.is2D() && (nbPoints > 5000)) {
        _.set(layer, 'leaflet.tiled', true)
        _.set(layer, 'leaflet.minZoom', 15)
      }
      Loading.show({ message: this.$t('mixins.activity.SAVING_LABEL', { processed: 0, total: features.length }) })
      try {
        let createdLayer = await this.$api.getService('catalog')
          .create(_.omit(layer, ['actions', 'label', 'isVisible', 'isDisabled']))
        const chunkSize = _.get(this, 'activityOptions.featuresChunkSize', 5000)
        let nbFeatures = 0
        // We use the generated DB ID as layer ID on features
        await this.createFeatures(geoJson, createdLayer._id, chunkSize, (i, chunk) => {
          // Update saving message according to new chunk data
          nbFeatures += chunk.length
          Loading.show({
            message: this.$t('mixins.activity.SAVING_LABEL', { processed: nbFeatures, total: features.length })
          })
        })
        // Because we save all features in a single service use filtering to separate layers
        createdLayer = await this.$api.getService('catalog').patch(createdLayer._id, { baseQuery: { layer: createdLayer._id } })
        // Reset layer with new setup
        await this.resetLayer(createdLayer)
        if (_.get(layer, 'leaflet.tiled')) {
          this.$toast({ type: 'positive', message: this.$t('mixins.activity.SAVE_DIALOG_MESSAGE'), timeout: 10000, html: true })
        }
      } catch (error) {
        // User error message on operation should be raised by error hook, otherwise this is more a coding error
        logger.error(error)
      }
      Loading.hide()
    },
    async onFilterLayerData (layer) {
      this.filterModal = await this.$createComponent('KFeaturesFilter', {
        propsData: {
          contextId: this.contextId,
          layer
        }
      })
      this.filterModal.$mount()
      this.filterModal.open()
      this.filterModal.$on('applied', async () => {
        // Reset layer with new setup
        await this.resetLayer(layer)
        this.filterModal.closeModal()
      })
      this.filterModal.$on('closed', () => {
        this.filterModal = null
      })
    },
    async onViewLayerData (layer) {
      this.viewModal = await this.$createComponent('KFeaturesTable', {
        propsData: {
          contextId: this.contextId,
          layer,
          featureActions: [{
            name: 'zoom-to',
            label: this.$t('mixins.activity.ZOOM_TO_LABEL'),
            icon: 'zoom_out_map',
            handler: (feature) => {
              this.center(..._.get(centroid(feature), 'geometry.coordinates'))
              this.viewModal.closeModal()
            }
          }]
        }
      })
      this.viewModal.$mount()
      this.viewModal.open()
      this.viewModal.$on('closed', () => {
        this.viewModal = null
      })
    },
    async onChartLayerData (layer) {
      this.chartModal = await this.$createComponent('KFeaturesChart', {
        propsData: {
          contextId: this.contextId,
          layer
        }
      })
      this.chartModal.$mount()
      this.chartModal.open()
      this.chartModal.$on('closed', () => {
        this.chartModal = null
      })
    },
    async onEditLayer (layer) {
      this.editModal = await this.$createComponent('editor/KModalEditor', {
        propsData: {
          service: 'catalog',
          contextId: this.contextId,
          objectId: layer._id
        }
      })
      this.editModal.$mount()
      this.editModal.openModal()
      this.editModal.$on('applied', updatedLayer => {
        // If renamed need to update the layer map accordingly
        if (layer.name !== updatedLayer.name) {
          this.renameLayer(layer.name, updatedLayer.name)
        }
        Object.assign(layer, updatedLayer)
        this.editModal.closeModal()
      })
      this.editModal.$on('closed', () => {
        this.editModal = null
      })
    },
    async onEditLayerStyle (layer) {
      this.editStyleModal = await this.$createComponent('KLayerStyleEditor', {
        propsData: {
          contextId: this.contextId,
          layer,
          options: this.activityOptions.engine
        }
      })
      this.editStyleModal.$mount()
      this.editStyleModal.open()
      this.editStyleModal.$on('applied', async () => {
        // Keep track of data as we will reset the layer
        const geoJson = this.toGeoJson(layer.name)
        // Reset layer with new setup
        await this.resetLayer(layer)
        // Update data only when in memory as reset has lost it
        if (!layer._id) {
          this.updateLayer(layer.name, geoJson)
        }
        this.editStyleModal.closeModal()
      })
      this.editStyleModal.$on('closed', () => {
        this.editStyleModal = null
      })
    },
    async onEditLayerData (layer) {
      const stop = () => {
        // Start/Stop edition
        this.editLayer(layer)
        // Refresh actions due to state change
        this.configureLayerActions(layer)
      }
      // Close previous edition toast if any
      // (will call dismiss handler)
      if (this.editedLayerToast) {
        this.editedLayerToast()
        this.editedLayerToast = null
      } else {
        stop()
      }
      // Create new one
      if (this.isLayerEdited(layer)) {
        this.editedLayerToast = this.$toast({
          type: 'warning',
          timeout: 0, // persistent
          position: 'top-left',
          message: this.$t('mixins.activity.EDITING_DATA_MESSAGE'),
          caption: this.$t(layer.name),
          onDismiss: stop
        })
      }
    },
    async onRemoveLayer (layer) {
      Dialog.create({
        title: this.$t('mixins.activity.REMOVE_DIALOG_TITLE', { layer: layer.name }),
        message: this.$t('mixins.activity.REMOVE_DIALOG_MESSAGE', { layer: layer.name }),
        html: true,
        ok: {
          label: this.$t('OK'),
          flat: true
        },
        cancel: {
          label: this.$t('CANCEL'),
          flat: true
        }
      }).onOk(async () => {
        Loading.show({ message: this.$t('mixins.activity.REMOVING_LABEL') })
        try {
          // Stop any running edition
          if (this.isLayerEdited(layer)) await this.editLayer(layer)
          if (layer._id) {
            // If persistent feature layer remove features as well
            if (layer.service === 'features') {
              await this.removeFeatures(layer._id)
            }
            await this.$api.getService('catalog').remove(layer._id)
          }
          this.removeLayer(layer.name)
        } catch (error) {
          // User error message on operation should be raised by error hook, otherwise this is more a coding error
          logger.error(error)
        }
        Loading.hide()
      })
    },
    onMapReady () {
      this.engineReady = true
      this.engine = 'leaflet'
    },
    onGlobeReady () {
      this.engineReady = true
      this.engine = 'cesium'
    },
    getProbeTimeRange () {
      const start = this.currentTime.clone()
      const end = start.clone()
      const span = this.$store.get('timeseries.span')
      // We center on current time with the same span on past/future
      start.subtract(span, 'm')
      end.add(span, 'm')
      return { start, end }
    },
    onProbeLocation () {
      this.setCursor('probe-cursor')
      this.$once('click', () => {
        this.unsetCursor('probe-cursor')
      })
    },
    onToggleFullscreen () {
      if (!this.$q.fullscreen.isActive) this.$q.fullscreen.request()
      else this.$q.fullscreen.exit()
    },
    async initialize () {
      // Check if the activity is using context restoration
      const hasContext = (typeof this.restoreContext === 'function')
      // Geolocate by default if view has not been restored
      const viewRestored = (hasContext ? await this.restoreContext('view') : false)
      if (!viewRestored) {
        // Provided by geolocation if enabled
        if (!this.$geolocation.get().position) await this.$geolocation.update()
        const position = this.$geolocation.get().position
        if (position) this.center(position.longitude, position.latitude)
      }
      // Retrieve the forecast models
      if (this.setupWeacast) {
        try {
          await this.setupWeacast()
        } catch (error) {
          logger.error(error)
        }
        this.forecastModelHandlers = { toggle: (model) => this.setForecastModel(model) }
      } else {
        this.forecastModelHandlers = {}
      }
      // Retrieve the layers
      try {
        await this.refreshLayerCategories()
        await this.refreshLayers()
        if (hasContext) await this.restoreContext('layers')
      } catch (error) {
        logger.error(error)
      }
      // Listen about changes in global/contextual catalog services
      const globalCatalogService = this.$api.getService('catalog', '')
      const catalogService = this.$api.getService('catalog')
      // Keep track of binded listeners as we use the same function with different contexts
      this.catalogListeners = {}
      globalCatalogService._serviceEvents.forEach(event => {
        this.catalogListeners[event] = (object) => this.onCatalogUpdated(event, object)
        globalCatalogService.on(event, this.catalogListeners[event])
        if (catalogService && (catalogService !== globalCatalogService)) {
          catalogService.on(event, this.catalogListeners[event])
        }
      })
    },
    finalize () {
      // Stop listening about changes in global/contextual catalog services
      const globalCatalogService = this.$api.getService('catalog', '')
      const catalogService = this.$api.getService('catalog')
      globalCatalogService._serviceEvents.forEach(event => {
        globalCatalogService.removeListener(event, this.catalogListeners[event])
        if (catalogService && (catalogService !== globalCatalogService)) {
          catalogService.removeListener(event, this.catalogListeners[event])
        }
      })
      this.catalogListeners = {}
    },
    async onCatalogUpdated (event, object) {
      switch (object.type) {
        case 'Category':
          // In any case we rebuild categories
          this.refreshLayerCategories()
          break
        case 'Context':
        case 'Service':
          // Nothing to do
          break
        default:
          // Updating a layer requires to remove/add it again
          if (this.hasLayer(object.name)) await this.removeCatalogLayer(object)
          if (event !== 'removed') await this.addCatalogLayer(object)
          break
      }
    }
  },
  mounted () {
    this.$on('map-ready', this.onMapReady)
    this.$on('globe-ready', this.onGlobeReady)
    this.$on('layer-added', this.onLayerAdded)
  },
  beforeDestroy () {
    this.$off('map-ready', this.onMapReady)
    this.$off('globe-ready', this.onGlobeReady)
    this.$off('layer-added', this.onLayerAdded)
    this.finalize()
  }
}
