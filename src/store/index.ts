import { createStore } from 'vuex'
import auth from './auth'
import common from './common'

export const store = createStore({
  modules: {
    auth,
    common
  }
})