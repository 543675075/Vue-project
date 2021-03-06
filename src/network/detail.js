import { request } from './request'

export function detailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function recommend() {
  return request({
    url: 'recommend'
  })
}

// 商品信息
export function Info(columns, itemInfo, services) {
  this.title = itemInfo.title
  this.desc = itemInfo.desc
  this.lowPrice = itemInfo.lowNowPrice
  this.price = itemInfo.price
  this.oldPrice = itemInfo.oldPrice
  this.discount = itemInfo.discountDesc
  this.columns = columns
  this.services = services
}

// 店铺信息
export function ShopInfo(shopInfo) {
  this.name = shopInfo.name
  this.logo = shopInfo.shopLogo
  this.totalSales = shopInfo.cSells
  this.totalGoods = shopInfo.cGoods
  this.score = shopInfo.score
}
