import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const router = new Vuex.Store({
  state: {
    cartGoods: []
  },
  mutations: {
    cartGoodsInfo(state,payload){
      state.cartGoods.push(payload)
    }
  }
})

export default router