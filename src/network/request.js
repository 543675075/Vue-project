import axios from 'axios'

export function request(config){

  // 创建一个axios实例
  const example = axios.create({
    // baseURL: 'http://123.207.32.32:8000/api/h3',
    baseURL: 'http://106.54.54.237:8000/api/h3',
    timeout: 5000
  })




  // 发送网络请求
  return example(config)
}