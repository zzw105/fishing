import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store, { key } from "./store";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(createPinia()).use(router).use(ElementPlus).mount("#app");
