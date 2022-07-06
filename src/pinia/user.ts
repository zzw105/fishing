import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: (): userStoreProps => {
    return {
      money: 0,
      fish: [],
      items: [],
    };
  },
  getters: {
    // 获取当前金钱
    getMoney(state) {
      return state.money;
    },
  },
  actions: {
    // 设置金钱
    setMoney(pal: number) {
      console.log(this.money);
      this.money += pal;
    },
    // 设置全部信息用于持久化
    setUserAll(pal: userStoreProps) {
      this.$state = pal;
    },
  },
});
