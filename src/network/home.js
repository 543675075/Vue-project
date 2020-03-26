import {request} from './request'

export function homeData(){
  return request({
    url: '/home/multidata'
  })
}
export function goodsData(type,page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}