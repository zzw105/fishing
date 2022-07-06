import { defineStore } from "pinia";
export const globalStore = defineStore("global", {
  state: (): globalStateProps => {
    return {
      title: "",
      allFishingGround: [
        {
          id: 101,
          name: "一号渔场",
          fish: [
            {
              id: 201,
              name: "小鱼1号",
              price: 5,
              difficulty: 1,
              probability: 100,
            },
            {
              id: 202,
              name: "小鱼2号",
              price: 10,
              difficulty: 1.5,
              probability: 20,
            },
          ],
          ground: [
            {
              id: 301,
              number: 0,
              autoFish: false,
            },
            {
              id: 302,
              number: 0,
              autoFish: false,
            },
            {
              id: 303,
              number: 0,
              autoFish: false,
            },
            {
              id: 304,
              number: 0,
              autoFish: false,
            },
            {
              id: 305,
              number: 0,
              autoFish: false,
            },
            {
              id: 306,
              number: 0,
              autoFish: false,
            },
          ],
        },
        {
          id: 102,
          name: "二号渔场",
          fish: [
            {
              id: 203,
              name: "小鱼3号",
              price: 15,
              difficulty: 2,
              probability: 50,
            },
            {
              id: 204,
              name: "小鱼4号",
              price: 20,
              difficulty: 3,
              probability: 100,
            },
          ],
          ground: [
            {
              id: 307,
              number: 0,
              autoFish: false,
            },
            {
              id: 308,
              number: 0,
              autoFish: false,
            },
            {
              id: 309,
              number: 0,
              autoFish: false,
            },
            {
              id: 310,
              number: 0,
              autoFish: false,
            },
            {
              id: 311,
              number: 0,
              autoFish: false,
            },
            {
              id: 312,
              number: 0,
              autoFish: false,
            },
          ],
        },
      ],
      nowGround: {
        id: 1,
        name: "未选择渔场",
        ground: [
          {
            id: 0,
            number: 0,
            autoFish: false,
          },
        ],
        fish: [
          {
            id: 0,
            name: "0",
            price: 0,
            difficulty: 0,
            probability: 0,
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
    //
    getAllFishingGround(state) {
      return state.allFishingGround;
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
