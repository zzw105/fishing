import { defineStore } from "pinia";
export const fishingGroundStore = defineStore("fishingGround", {
  state: (): fishingGroundStateProps => {
    return {
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
            },
            {
              id: 202,
              name: "小鱼2号",
              price: 10,
              difficulty: 1.5,
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
            },
            {
              id: 204,
              name: "小鱼4号",
              price: 20,
              difficulty: 3,
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
    };
  },
  getters: {
    //
    getAllFishingGround(state) {
      return state.allFishingGround;
    },
  },
  actions: {},
});
