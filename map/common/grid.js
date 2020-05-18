import _ from 'lodash'

export const SortOrder = {
  ASCENDING: 0,
  DESCENDING: 1
}

export const gridSourceFactories = { }
export const unitConverters = { }

// Base 2d grid class
// TODO: add interpolate/bilinearInterpolate and other missing stuff from weacast grid
export class BaseGrid {
  constructor (sourceKey, bbox, dimensions, nodata) {
    this.sourceKey = sourceKey
    this.bbox = bbox
    this.dimensions = dimensions
    this.resolution = [(bbox[2] - bbox[0]) / (dimensions[0] - 1), (bbox[3] - bbox[1]) / (dimensions[1] - 1)]
    this.nodata = nodata

    if (this.bbox[0] >= this.bbox[2] || this.bbox[1] >= this.bbox[3]) {
      throw new Error('Grid bbox seems weird')
    }
    if (this.dimensions[0] <= 0 || this.dimensions[1] <= 0) {
      throw new Error("Grid dimension is < 0, something's wrong")
    }
    if (this.resolution[0] <= 0.0 || this.resolution[1] <= 0.0) {
      throw new Error("Grid resolution is < 0, something's wrong")
    }
  }

  getDimensions () {
    return this.dimensions
  }

  getResolution () {
    return this.resolution
  }

  getBBox () {
    return this.bbox
  }

  hasData () {
    for (let ilat = 0; ilat < this.dimensions[0]; ++ilat) {
      for (let ilon = 0; ilon < this.dimensions[1]; ++ilon) {
        const value = this.getValue(ilat, ilon)
        if (value !== this.nodata) { return true }
      }
    }

    return false
  }

  getDataBounds () {
    // if already computed, return
    if (this.dataBounds) { return this.dataBounds }

    // find initial value (!= nodata)
    let ilat = 0
    let ilon = 0
    let minVal; let maxVal
    for (; ilat < this.dimensions[0] && maxVal === undefined; ++ilat) {
      for (; ilon < this.dimensions[1] && maxVal === undefined; ++ilon) {
        const value = this.getValue(ilat, ilon)
        if (value === this.nodata) { continue }
        minVal = maxVal = value
      }
    }

    // scan through data set
    for (; ilat < this.dimensions[0]; ++ilat) {
      for (; ilon < this.dimensions[1]; ++ilon) {
        const value = this.getValue(ilat, ilon)
        if (value === this.nodata) { continue }

        minVal = Math.min(minVal, value)
        maxVal = Math.max(maxVal, value)
      }
    }

    this.dataBounds = [minVal, maxVal]
    return this.dataBounds
  }

  getLat (ilat) {
    return this.bbox[0] + (ilat * this.resolution[0])
  }

  getLon (ilon) {
    return this.bbox[1] + (ilon * this.resolution[1])
  }

  getValue (ilat, ilon) {
    throw new Error('Not implemented')
  }

  getIndices (lat, lon) {
    if (lat < this.bbox[0] || lat > this.bbox[2] || lon < this.bbox[1] || lon > this.bbox[2]) { return null }

    const ilat = (lat - this.bbox[0]) / this.resolution[0]
    const ilon = (lon - this.bbox[1]) / this.resolution[1]

    return [ilat, Math.floor(ilat), ilon, Math.floor(ilon)]
  }

  bilinearInterpolate (x, y, g00, g10, g01, g11) {
    const rx = (1 - x)
    const ry = (1 - y)
    const a = rx * ry
    const b = x * ry
    const c = rx * y
    const d = x * y
    return g00 * a + g10 * b + g01 * c + g11 * d
  }

  interpolate (lon, lat) {
    const indices = this.getIndices(lon, lat)
    // Check for points outside bbox
    if (!indices) return undefined
    const [i, fi, j, fj] = indices

    const ci = fi + 1
    const cj = fj + 1
    /*
    // In this case virtually duplicate first column as last column to simplify interpolation logic
    if (this.isContinuous && ci >= this.size[0]) {
      ci = 0
    }
    ci = clamp(ci, 0, this.size[0] - 1)
    const cj = clamp(fj + 1, 0, this.size[1] - 1)
    */

    const g00 = this.getValue(fi, fj)
    const g10 = this.getValue(ci, fj)
    const g01 = this.getValue(fi, cj)
    const g11 = this.getValue(ci, cj)

    // All four points found, so interpolate the value
    /*
    if (isValue(g00) && isValue(g10) && isValue(g01) && isValue(g11)) {
      return this.bilinearInterpolate(i - fi, j - fj, g00, g10, g01, g11)
    } else {
      return undefined
    }
    */
    return this.bilinearInterpolate(i - fi, j - fj, g00, g10, g01, g11)
  }

  getBestFit (fitBbox) {
    let iminlat = -1
    for (let ilat = 0; ilat < this.dimensions[0] - 1 && iminlat === -1; ++ilat) {
      const lat = this.getLat(ilat + 1)
      if (lat > fitBbox[0]) iminlat = ilat
    }

    let imaxlat = -1
    for (let ilat = this.dimensions[0] - 1; ilat > 0 && imaxlat === -1; --ilat) {
      const lat = this.getLat(ilat - 1)
      if (lat < fitBbox[2]) imaxlat = ilat
    }

    let iminlon = -1
    for (let ilon = 0; ilon < this.dimensions[1] - 1 && iminlon === -1; ++ilon) {
      const lon = this.getLon(ilon + 1)
      if (lon > fitBbox[1]) iminlon = ilon
    }

    let imaxlon = -1
    for (let ilon = this.dimensions[1] - 1; ilon > 0 && imaxlon === -1; --ilon) {
      const lon = this.getLon(ilon - 1)
      if (lon < fitBbox[3]) imaxlon = ilon
    }

    return [iminlat, iminlon, imaxlat, imaxlon]
  }
}

export class GridSource {
  constructor (options) {
    this.events = {}
    this.sourceKey = 0
  }

  getBBox () {
    return null
  }

  getDataBounds () {
    throw new Error('Not implemented')
  }

  supportsNoData () {
    return this.nodata !== undefined
  }

  /**
     * @returns {Number} Returns a new longitude with the value wrapped so it's always in the same range than the given bounding box (e.g. between -180 and +180 degrees).
     */
  wrapLongitude (lon, bounds) {
    // We have longitudes in range [-180, 180] so take care if longitude is given in range [0, 360]
    if (bounds[0] < 0) {
      return lon > 180 ? lon - 360 : lon
    } else if (bounds[2] > 180) {
      // We have longitudes in range [0, 360] so take care if longitude is given in range [-180, 180]
      return lon < 0 ? lon + 360 : lon
    } else {
      return lon
    }
  }

  async setup (config) {
    throw new Error('Not implemented')
  }

  async fetch (abort, bbox, resolution) {
    throw new Error('Not implemented')
  }

  on (event, callback) {
    const callbacks = _.get(this.events, event, [])
    callbacks.push(callback)
    if (callbacks.length === 1) { this.events[event] = callbacks }
  }

  off (event, callback) {
    const callbacks = _.get(this.events, event, [])
    callbacks.splice(0, 0, callback)
  }

  emit (event) {
    const callbacks = _.get(this.events, event, [])
    const ctx = { source: this, event: event }
    for (const cb of callbacks) {
      cb(ctx)
    }
  }

  dataChanged () {
    this.emit('data-changed')
  }
}

export function makeGridSource (key, options = null) {
  const factory = _.get(gridSourceFactories, key, null)
  if (factory) { return factory(options) }
  return null
}

export function extractGridSourceConfig (options) {
  for (const key of Object.keys(options)) {
    const factory = _.get(gridSourceFactories, key, null)
    if (factory) { return [key, options[key]] }
  }
  return [null, null]
}

// these allow to query grid with ascending lat/lon
const grid1DAccessFunctions = [
  // lonFirst, latOrder=SortOrder.ASCENDING, lonOrder=SortOrder.ASCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[ilon * latCount + ilat] },
  // lonFirst, latOrder=SortOrder.ASCENDING, lonOrder=SortOrder.DESCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[(lonCount - (ilon + 1)) * latCount + ilat] },
  // lonFirst, latOrder=SortOrder.DESCENDING, lonOrder=SortOrder.ASCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[ilon * latCount + (latCount - (ilat + 1))] },
  // lonFirst, latOrder=SortOrder.DESCENDING, lonOrder=SortOrder.DESCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[(lonCount - (ilon + 1)) * latCount + (latCount - (ilat + 1))] },

  // latFirst, latOrder=SortOrder.ASCENDING, lonOrder=SortOrder.ASCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[ilat * lonCount + ilon] },
  // latFirst, latOrder=SortOrder.ASCENDING, lonOrder=SortOrder.DESCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[ilat * lonCount + (lonCount - (ilon + 1))] },
  // latFirst, latOrder=SortOrder.DESCENDING, lonOrder=SortOrder.ASCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[(latCount - (ilat + 1)) * lonCount + ilon] },
  // latFirst, latOrder=SortOrder.DESCENDING, lonOrder=SortOrder.DESCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[(latCount - (ilat + 1)) * lonCount + (lonCount - (ilon + 1))] }
]

export class Grid1D extends BaseGrid {
  constructor (sourceKey, bbox, dimensions, data, latFirst, latSortOrder, lonSortOrder, nodata = undefined, converter = null) {
    super(sourceKey, bbox, dimensions, nodata)

    this.data = data

    const index = lonSortOrder + (latSortOrder * 2) + ((latFirst ? 1 : 0) * 4)
    this.getByIndex = grid1DAccessFunctions[index]

    if (converter) {
      for (let i = 0; i < data.length; ++i) {
        data[i] = converter(data[i])
      }
    }
  }

  getValue (ilat, ilon) {
    return this.getByIndex(this.data, ilat, ilon, this.dimensions[0], this.dimensions[1])
  }
}

// these allow to query grid with ascending lat/lon
const grid2DAccessFunctions = [
  // lonFirst, latOrder=SortOrder.ASCENDING, lonOrder=SortOrder.ASCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[ilon][ilat] },
  // lonFirst, latOrder=SortOrder.ASCENDING, lonOrder=SortOrder.DESCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[lonCount - (ilon + 1)][ilat] },
  // lonFirst, latOrder=SortOrder.DESCENDING, lonOrder=SortOrder.ASCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[ilon][latCount - (ilat + 1)] },
  // lonFirst, latOrder=SortOrder.DESCENDING, lonOrder=SortOrder.DESCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[lonCount - (ilon + 1)][latCount - (ilat + 1)] },

  // latFirst, latOrder=SortOrder.ASCENDING, lonOrder=SortOrder.ASCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[ilat][ilon] },
  // latFirst, latOrder=SortOrder.ASCENDING, lonOrder=SortOrder.DESCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[ilat][lonCount - (ilon + 1)] },
  // latFirst, latOrder=SortOrder.DESCENDING, lonOrder=SortOrder.ASCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[latCount - (ilat + 1)][ilon] },
  // latFirst, latOrder=SortOrder.DESCENDING, lonOrder=SortOrder.DESCENDING
  function (data, ilat, ilon, latCount, lonCount) { return data[latCount - (ilat + 1)][lonCount - (ilon + 1)] }
]

export class Grid2D extends BaseGrid {
  constructor (sourceKey, bbox, dimensions, data, latFirst, latSortOrder, lonSortOrder, nodata = undefined, converter = null) {
    super(sourceKey, bbox, dimensions, nodata)
    this.data = data

    const index = lonSortOrder + (latSortOrder * 2) + ((latFirst ? 1 : 0) * 4)
    this.getByIndex = grid2DAccessFunctions[index]

    if (converter) {
      for (let l = 0; l < data.length; ++l) {
        const line = data[l]
        for (let r = 0; r < line.length; ++r) {
          line[r] = converter(line[r])
        }
      }
    }
  }

  getValue (ilat, ilon) {
    return this.getByIndex(this.data, ilat, ilon, this.dimensions[0], this.dimensions[1])
  }
}

// Class to aggregate multiple grids in a single one
// All grids in the aggregate MUST have the same resolution
export class TiledGrid extends BaseGrid {
  constructor (sourceKey, tiles, nodata = undefined) {
    const bbox0 = tiles[0].getBBox()
    const dim0 = tiles[0].getDimensions()
    const res0 = tiles[0].getResolution()
    super(sourceKey, bbox0, dim0, nodata)

    this.dimensions = [0, 0]
    this.bbox = [bbox0[0], bbox0[1], bbox0[2], bbox0[3]]
    this.resolution = [res0[0], res0[1]]

    for (const tile of tiles) {
      // make sure resolution match between tiles
      const res = tile.getResolution()
      if (res[0] !== res0[0] || res[1] !== res0[1]) {
        throw new Error('Resolution does not match between tiles')
      }

      // update grid bbox and make sure it is contiguous
      const bbox = tile.getBBox()
      this.bbox[0] = Math.min(this.bbox[0], bbox[0])
      this.bbox[1] = Math.min(this.bbox[1], bbox[1])
      this.bbox[2] = Math.max(this.bbox[2], bbox[2])
      this.bbox[3] = Math.max(this.bbox[3], bbox[3])
    }

    this.dimensions[0] = 1 + Math.trunc((this.bbox[2] - this.bbox[0]) / this.resolution[0])
    this.dimensions[1] = 1 + Math.trunc((this.bbox[3] - this.bbox[1]) / this.resolution[1])

    this.tiles = []

    for (const tile of tiles) {
      const bbox = tile.getBBox()
      const meta = {
        tile: tile,
        iLatMin: Math.floor((bbox[0] - this.bbox[0]) / this.resolution[0]),
        iLatMax: Math.floor((bbox[2] - this.bbox[0]) / this.resolution[0]),
        iLonMin: Math.floor((bbox[1] - this.bbox[1]) / this.resolution[1]),
        iLonMax: Math.floor((bbox[3] - this.bbox[1]) / this.resolution[1])
      }

      this.tiles.push(meta)
    }
  }

  getValue (ilat, ilon) {
    // find which tile holds our data
    let tile = null
    for (const t of this.tiles) {
      if (ilat < t.iLatMin || ilat > t.iLatMax || ilon < t.iLonMin || ilon > t.iLonMax) { continue }
      tile = t
      break
    }

    if (!tile) {
      return 0
    }

    return tile.tile.getValue(ilat - tile.iLatMin, ilon - tile.iLonMin)
  }
}

export class SubGrid extends BaseGrid {
  constructor (sourceKey, grid, subBbox) {
    const [iminlat, iminlon, imaxlat, imaxlon] = grid.getBestFit(subBbox)

    const adjustedDims = [1 + imaxlat - iminlat, 1 + imaxlon - iminlon]
    const adjustedBbox = [grid.getLat(iminlat), grid.getLon(iminlon), grid.getLat(imaxlat), grid.getLon(imaxlon)]

    super(sourceKey, adjustedBbox, adjustedDims, grid.nodata)
    // this.resolution = grid.resolution.slice()
    this.latOffset = iminlat
    this.lonOffset = iminlon
    this.implGrid = grid
  }

  getValue (ilat, ilon) {
    return this.implGrid.getValue(ilat + this.latOffset, ilon + this.lonOffset)
  }
}
