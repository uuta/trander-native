const RECOMMEND_FREQUENCY = Object.freeze({
  NONE: 0,
  MIDDLE: 1,
  HIGH: 2
})

const CURRENT_LOCATION_SUGGEST = Object.freeze({
  BROWSER: 0,
  PERMISSION: 1,
  UNAVAILABLE: 2,
  TIMEOUT: 3,
  SUGGEST: 4
})

const DIRECTION_TYPES = Object.freeze({
  NONE: {
    NUM: 0,
    TEXT: 'All around'
  },
  NORTH: {
    NUM: 1,
    TEXT: 'To North'
  },
  EAST: {
    NUM: 2,
    TEXT: 'To East'
  },
  SOUTH: {
    NUM: 3,
    TEXT: 'To South'
  },
  WEST: {
    NUM: 4,
    TEXT: 'To West'
  }
})

export default {
  RECOMMEND_FREQUENCY,
  CURRENT_LOCATION_SUGGEST,
}

export {
  DIRECTION_TYPES
}