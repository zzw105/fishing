import { th } from "element-plus/es/locale";
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
    setUserFish(pal: fishProps) {
      const index = this.fish.findIndex((item) => {
        return item.id === pal.id;
      });
      if (index > -1) this.fish[index].quantity += pal.quantity;
      else this.fish.push(pal);
      console.log(this.fish);
    },
    // 设置全部信息用于持久化
    setUserAll(pal: userStoreProps) {
      this.$state = pal;
    },
  },
});
