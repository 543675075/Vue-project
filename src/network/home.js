import {request} from './request'

export function homeData(){
  return request({
    url: '/home/multidata'
  })
}