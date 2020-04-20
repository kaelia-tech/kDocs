
import _ from 'lodash'

export default {
  methods: {
    async onProbeClicked (options, event) {
      const feature = _.get(event, 'target.feature')
      if (!feature) return
      const windDirection = (this.selectedLevel ? `windDirection-${this.selectedLevel}` : 'windDirection')
      const windSpeed = (this.selectedLevel ? `windSpeed-${this.selectedLevel}` : 'windSpeed')
      const isWeatherProbe = (_.has(feature, `properties.${windDirection}`) &&
                              _.has(feature, `properties.${windSpeed}`) &&
                              (options.name === this.$t('mixins.timeseries.PROBED_LOCATION')))
      // Update timeseries data if required
      const { start, end } = this.getProbeTimeRange()
      if (options.probe) { // Static weacast probe
        const probe = await this.getForecastProbe(options.probe)
        if (probe) {
          await this.getForecastForFeature(_.get(feature, this.probe.featureId), start, end)
        }
      } else if (options.variables && options.service) { // Static measure probe
        await this.getMeasureForFeature(options, feature, start, end)
      } else if (isWeatherProbe) { // Dynamic weacast probe
        this.getForecastForLocation(event.latlng.lng, event.latlng.lat, start, end)
      } else {
        return
      }
      // Open the widget
      this.openWidget('time-series')
    },
    async onTimeSeriesSelectionChanged () {
      if (this.selection.feature && this.selection.feature.geometry.type === 'Point') {
        const coordinates = this.selection.feature.geometry.coordinates
        const { start, end } = this.getProbeTimeRange()
        this.getForecastForLocation(coordinates[0], coordinates[1], start, end)
        this.openWidget('time-series')
      }
    }
  },
  mounted () {
    this.$on('click', this.onProbeClicked)
    this.$on('selection-changed', this.onTimeSeriesSelectionChanged)
  },
  beforeDestroy () {
    this.$off('click', this.onProbeClicked)
    this.$off('selection-changed', this.onTimeSeriesSelectionChanged)
  }
}
