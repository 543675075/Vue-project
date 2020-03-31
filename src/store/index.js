import Vue from "vue"
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  cartGoods: []
}
const router = new Vuex.Store({
  state,
  mutations,
  actions
})

export default router