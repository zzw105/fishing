import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      title: "",
      money: 100,
      fish: [],
      nowGround: 0,
    };
  },
  getters: {
    // 获取标题
    getTitle(state) {
      return state.title;
    },
  },
  actions: {
    // 修改标题内容
    setTitle(pal: string) {
      this.title = pal;
    },
  },
});
