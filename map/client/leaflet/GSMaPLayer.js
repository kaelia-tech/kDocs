import L from 'leaflet'
import moment from 'moment'

const GSMaPLayer = L.TileLayer.extend({
  initialize (options) {
    // default product when none is specified: rain
    this.product = options.product || 'rain'

    const url = this.makeUrl(options.time)

    const updatedOptions = Object.assign({ tms: true }, options)
    L.TileLayer.prototype.initialize.call(this, url, updatedOptions)
  },

  makeUrl (time) {
    const t = time || moment()

    const baseUrl = 'https://sharaku.eorc.jaxa.jp/cgi-bin/trmm/GSMaP/tilemap/tile_'
    const timeQuery = `year=${t.year()}&month=${t.month() + 1}&day=${t.date()}&hour=${t.hour()}&min=${t.minute()}&z={z}&x={x}&y={y}`

    if (this.product === 'rain12' || this.product === 'rain24' || this.product === 'rain72') {
      return baseUrl + `total.py?prod=${this.product}&` + timeQuery
    }
    if (this.product === 'ir') {
      return baseUrl + `ir.py?prod=${this.product}&` + timeQuery
    }

    // default product is rain
    return baseUrl + 'rain.py?prod=rain&' + timeQuery
  },

  setCurrentTime (time) {
    const url = this.makeUrl(time)
    this.setUrl(url, false)
  }
})

export { GSMaPLayer }
