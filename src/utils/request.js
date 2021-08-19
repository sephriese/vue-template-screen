import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'
import router from '@/router'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL:'http://172.16.1.155:8189',
  timeout: 5 * 1000, // 请求超时时间
  // withCredentials: true, // axios 写入 cookies
  // 默认等待请求头格式
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  // },
  // transformResponse: data => {
  //   try {
  //     return JSONBIGINT.parse(data)
  //   } catch (err) {
  //     return data
  //   }
  // },
  responseType: 'json',
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  (error) => {
    // Do something with request error
    Promise.reject(error)
  }
)

//请求响应后置拦截
service.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      return response.data.data
    } else {
      // token 失效 或者 过期, 清除token
      if (response.data.code === 401) {
        if (store.getters.channel.weChat) {
          // weChatOAuthLogin()
        } else {
          store.dispatch('user/Loginout')
          router.push({ path: '/login' })
        }
      }
      Toast.fail(response.data.msg)
      return Promise.reject(response.data.msg)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
