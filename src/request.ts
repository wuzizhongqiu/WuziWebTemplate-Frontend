import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:8998",
  timeout: 10000,
  withCredentials: true
});

// 全局请求拦截器
myAxios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  if (localStorage.token) { // 如果有token，则将其添加到请求头中
    config.headers.Authorization = localStorage.token;
  }
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 全局响应拦截器
myAxios.interceptors.response.use(function(response) {
  console.log(response)
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  const {data} = response;
  if (data.code === 40100) {
    // 不是获取用户信息的请求
    if (!response.request.responseURL.includes("user/get/login") && !window.location.pathname.includes("user/login")) {
      window.location.href = `user/login?redirect=${window.location.href};`
    }
  }
  return response;
}, function(error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default myAxios;