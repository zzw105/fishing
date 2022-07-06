<template>
  <div class="stripBox">
    <div class="lineBox">
      <div class="line"></div>
      <div
        :style="{
          width: targetStyle.width + 'px',
          left: targetStyle.left + 'px',
        }"
        class="target"
      ></div>
      <div
        :style="{
          width: targetLineStyle.width + 'px',
          left: targetLineStyle.left + 'px',
        }"
        class="targetLine"
      ></div>
    </div>
    <div class="btnBox">
      <el-button @click="toFishing"
        >{{ isFishing ? "拉杆" : "下杆" }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { sortFish, randomNum } from "@/utils";
import { userStore } from "@/pinia/user";

const _userStore = userStore();
const { setMoney } = _userStore;

const props = defineProps<{
  fishs: fishProps[];
}>();

// 目标块
const targetStyle = reactive<targetStyleProps>({ left: 50, width: 0 });

// 当前鱼
const nowFish = ref<fishProps>();

// 玩家条
const targetLineStyle = reactive<targetLineStyleProps>({ left: 6, width: 2 });
const targetLineDirection = ref<number>(1);

const setIntervalNum = ref<NodeJS.Timer>();
const isFishing = ref<boolean>(false);

// 开始或停止钓鱼
const toFishing = () => {
  isFishing.value = !isFishing.value;
  if (isFishing.value) {
    // 开始钓鱼
    fishingStar();
    targetLineStyle.left = 6;
  } else {
    // 完成钓鱼
    clearInterval(setIntervalNum.value);
    if (
      targetLineStyle.left + targetLineStyle.width >= targetStyle.left &&
      targetLineStyle.left <= targetStyle.left + targetStyle.width
    ) {
      ElMessage({
        type: "success",
        message: `钓到了${nowFish.value?.name}，价值${nowFish.value?.price}`,
      });
      if (nowFish.value) setMoney(nowFish.value.price);
    } else {
      ElMessage({
        type: "error",
        message: "没钓到",
      });
    }
  }
};

// 开始钓鱼
const fishingStar = () => {
  const fishArr = sortFish(props.fishs, "probability");
  const RNum = randomNum(1, 100);

  nowFish.value = fishArr.find((item) => {
    if (RNum <= item.probability) return true;
  });
  if (!nowFish.value) return;

  const milliseconds = 15 / nowFish.value.difficulty;
  const width = 30 / nowFish.value.difficulty;
  const left = randomNum(10, 250 - width);

  targetStyle.width = width;
  targetStyle.left = left;
  setIntervalNum.value = setInterval(() => {
    let num = targetLineStyle.left;
    if (num <= 10) targetLineDirection.value = 1;
    if (num >= 250 - targetLineStyle.width) targetLineDirection.value = -1;
    num += targetLineDirection.value;
    targetLineStyle.left = num;
  }, milliseconds);
};

onMounted(() => {
  // fishingStar();
});
</script>

<style lang="less" scoped>
.stripBox {
  width: 260px;
  height: 60px;
  //   background-color: rgba(170, 187, 204, 0.5);

  .lineBox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    background-color: #bbb;
    margin-bottom: 5px;

    .line {
      height: 10px;
      width: 250px;
      background-color: #d6d6ff;
      border-radius: 5px;
    }

    .target {
      background-color: red;
      position: absolute;
      height: 10px;
    }

    .targetLine {
      background-color: rgba(0, 0, 0, 0.58);
      position: absolute;
      height: 14px;
    }
  }
}
</style>
