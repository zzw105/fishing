import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: (): userStoreProps => {
    return {
      title: "",
      money: 0,
      fish: [],
      nowGround: {
        id: 1,
        name: "未选择渔场",
        fish: [
          {
            id: 0,
            name: "0",
            price: 0,
            difficulty: 0,
          },
        ],
      },
    };
  },
  getters: {
    // 获取标题
    getTitle(state) {
      return state.title;
    },

    // 获取当前渔场
    getNowGround(state) {
      return state.nowGround;
    },

    // 获取当前金钱
    getMoney(state) {
      return state.money;
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
