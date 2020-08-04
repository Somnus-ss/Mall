import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instane =axios.create({
    baseURL:'http://152.136.185.210:8000/api/',
    timeout:5000
  })

  // 2.axios的拦截器
  // 2.1 请求拦截的作用
  instane.interceptors.request.use(config => {
    return config
  },err => {
    // console.log(err);
  })

  // 2.2 响应拦截
  instane.interceptors.response.use(res => {
    return res.data
  },err => {
    // console.log(err);
  })

  // 3. 发送真正的网络请求
  return instane(config)
}
