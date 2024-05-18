import { createApp, Suspense, h } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import { createPinia } from "pinia";
import "@/access";

const app = createApp({
  render: () => h(Suspense, null, { // 处理路由懒加载（异步问题）
    default: () => h(App)
  })
})

app.use(Antd);
app.use(router);

const pinia = createPinia();
app.use(pinia);


app.mount("#app");
