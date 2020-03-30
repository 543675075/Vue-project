import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const router = new Vuex.Store({
  state: {
    cartGoods: [],
  },
  mutations: {
    addCount(state,payload){
      payload.count++
    },
    addGoods(state,payload){
      state.cartGoods.push(payload)
    }
  },
  actions: {
    cartGoodsInfo(context,payload){
      //查找原有数组中是否有新增的商品
      let oldGoods = context.state.cartGoods.find(item => item.iid === payload.iid)
      if(oldGoods){
        context.commit("addCount",oldGoods)
      }else{
        payload.count = 1
        context.commit("addGoods",payload)
      }
    }
  }
})

export default router