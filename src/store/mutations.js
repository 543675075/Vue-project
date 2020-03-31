import {
  ADD_COUNT,
  ADD_GOODS
} from './moutation.types'

export default {
  [ADD_COUNT](state,payload){
    payload.count++
  },
  [ADD_GOODS](state,payload){
    payload.checked = true //用来判断购物车商品是否选中
    state.cartGoods.push(payload)
  }
}