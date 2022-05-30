import Vue from 'vue'
import Vuex from 'vuex'

import item from './modules/item'
import ui from './modules/ui'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    item,
    ui
  }
})
