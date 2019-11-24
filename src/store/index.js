import Vue from 'vue'
import Vuex from 'vuex'

import main from './main'

Vue.use(Vuex)
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      main
    },
    strict: process.env.DEV
  })
  return Store
}
