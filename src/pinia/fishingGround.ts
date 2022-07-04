import { defineStore } from "pinia";

export const fishingGroundStore = defineStore("fishingGround", {
  state: (): fishingGroundStateProps => {
    return {
      allFishingGround: [
        {
          id: 1,
          name: "一号渔场",
          fish: [
            {
              id: 11,
              name: "小鱼1号",
              price: 5,
              difficulty: 1,
            },
            {
              id: 12,
              name: "小鱼2号",
              price: 10,
              difficulty: 1.5,
            },
          ],
        },
        {
          id: 2,
          name: "二号渔场",
          fish: [
            {
              id: 21,
              name: "小鱼3号",
              price: 15,
              difficulty: 2,
            },
            {
              id: 22,
              name: "小鱼4号",
              price: 20,
              difficulty: 3,
            },
          ],
        },
      ],
    };
  },
  getters: {
    //
    getAllFishingGround(state): fishingGroundStateProps["allFishingGround"] {
      return state.allFishingGround;
    },
  },
  actions: {},
});
