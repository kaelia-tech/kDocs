import _ from 'lodash'
import { getTextTable } from '../../utils'

export default {
  methods: {
    getDefaultPopup (entity, options) {
      let popup
      if (entity.properties) {
        let properties = entity.properties.getValue(0)
        const cesiumOptions = options.cesium || options
        const popupStyle = _.merge({}, this.activityOptions.engine.popup,
          cesiumOptions.popup, properties.popup)
        // Default content
        let text = popupStyle.text
        // Custom list given ?
        if (!text) {
          if (popupStyle.template) {
            const compiler = popupStyle.compiler
            // FIXME: the whole feature is lost by Cesium so that top-level properties have disappeared
            text = compiler({ feature: { properties }, properties, $t: this.$t })
          } else if (popupStyle.pick) {
            properties = _.pick(properties, popupStyle.pick)
          } else if (popupStyle.omit) {
            properties = _.omit(properties, popupStyle.omit)
          }
        }
        // Cesium does not support HTML
        // if (!html) html = getHtmlTable(properties)
        if (!text) text = getTextTable(properties)
        if (!text) return null // Nothing to be displayed
        popup = Object.assign({
          text: text,
          show: true
        }, popupStyle.options)
      }
      return popup
    },
    onPopup (options, event) {
      const entity = event.target
      // Close previous if any (but not when clicking on the popup itself)
      if (this.popupEntity) {
        this.viewer.entities.remove(this.popupEntity)
        this.popupEntity = null
      }
      // Do not reopen on same entity clicked
      if (this.clickedEntity === entity) {
        this.clickedEntity = null
      } else {
        this.clickedEntity = entity
      }
      // Only for entities from a layer
      if (!this.clickedEntity || !options) return
      const popup = this.generateStyle('popup', this.clickedEntity, options)
      if (popup) {
        const position = (event.pickedPosition ? event.pickedPosition : this.getPositionForEntity(this.clickedEntity))
        this.popupEntity = this.viewer.entities.add({ position, label: popup })
      }
    }
  },
  created () {
    this.registerStyle('popup', this.getDefaultPopup)
    // Perform required conversion from JSON to Cesium objects
    if (this.activityOptions.engine.popup) this.activityOptions.engine.popup = this.convertToCesiumObjects(this.activityOptions.engine.popup)
  },
  mounted () {
    this.$on('click', this.onPopup)
  },
  beforeDestroy () {
    this.$off('click', this.onPopup)
  }
}
