import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Game from "@/views/Main.vue";
import FishingGround from "@/views/FishingGround.vue";
import { cryptoLoadStorage } from "@/utils";
import { userStore } from "@/pinia/user";
import { ElMessage } from "element-plus";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/fishingGround",
    name: "FishingGround",
    component: FishingGround,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  // 跳转至主页加载存档
  if (to.path === "/home") {
    if (cryptoLoadStorage("data")) {
      userStore().setUserAll(JSON.parse(cryptoLoadStorage("data")));
      ElMessage({
        type: "success",
        message: `成功加载存档`,
      });
    }
  }

  // 无路径跳转至首页
  if (to.path === "/") {
    return { name: "Home" };
  }

  // 刷新页面跳转首页
  if (to.path !== "/home" && from.name === undefined) {
    return { name: "Home" };
  }
});

export default router;
