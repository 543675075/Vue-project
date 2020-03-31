import {
  ADD_COUNT,
  ADD_GOODS
} from './moutation.types'

export default {
  cartGoodsInfo(context,payload){
    //查找原有数组中是否有新增的商品
    let oldGoods = context.state.cartGoods.find(item => item.iid === payload.iid)
    if(oldGoods){
      context.commit(ADD_COUNT,oldGoods)
    }else{
      payload.count = 1
      context.commit(ADD_GOODS,payload)
    }
  }
}