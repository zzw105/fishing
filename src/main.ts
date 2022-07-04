import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store, { key } from "./store";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

const app = createApp(App);

// 注册eleUI图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia()).use(router).use(ElementPlus).mount("#app");
