import axios from "axios";
import { message } from "ant-design-vue";

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
  // 对请求错误做些什么 TODO 我这里设置的是，暂时让 Axios 不再抛出错误
  // return Promise.reject(error).catch(error);
});

// 全局响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const { data } = response;

    // 未登录 TODO 实际上这里是没有用的，因为我的错误码形式和 Axios 的错误处理冲突
    if (data.message === "invalid token") {
      // 不是获取用户信息的请求，并且用户目前不是已经在用户登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes("user/get/login") &&
        !window.location.pathname.includes("/user/login")
      ) {
        message.warning("请先登录");
        window.location.href = `/user/login?redirect=${window.location.href}`;
      }
    }

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(error);
  }
);

export default myAxios;