import { createStore } from 'vuex'
import "@/token";
import auth from './auth'
import error from './error'
import external from './external'
import common from './common'
import kw from './kw'

export const store = createStore({
  modules: {
    auth,
    error,
    external,
    common,
    kw,
  }
})