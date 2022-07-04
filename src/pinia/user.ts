import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: (): userStoreProps => {
    return {
      title: "",
      money: 100,
      fish: [],
      nowGround: null,
    };
  },
  getters: {
    // 获取标题
    getTitle(state): string {
      return state.title;
    },
  },
  actions: {
    // 修改标题内容
    setTitle(pal: string) {
      this.title = pal;
    },
    // 设置当前渔场
    setGround(pal: fishingGroundProps) {
      this.nowGround = pal;
    },
  },
});
