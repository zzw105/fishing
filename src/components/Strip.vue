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
import {
  targetLineStyleProps,
  targetStyleProps,
  NodeJS,
} from "@vue/runtime-core";
// import { useStore } from "vuex";
// import { key } from "@/store";
import { storeToRefs } from "pinia";
import { userStore } from "@/pinia/user";

// reactive
const targetStyle = reactive<targetStyleProps>({ left: 50, width: 30 });
const targetLineStyle = reactive<targetLineStyleProps>({ left: 6, width: 20 });

// ref
const targetLineDirection = ref<number>(1);
const setIntervalNum = ref<NodeJS.Timer>();
const isFishing = ref<boolean>(false);

const store = userStore();
const { getterName } = storeToRefs(store);
const { changeName } = store;

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
      console.log("钓到了");
    } else {
      console.log("没钓到");
    }
  }
};

// 结束钓鱼
const fishingStar = () => {
  setIntervalNum.value = setInterval(() => {
    let num = targetLineStyle.left;
    if (num <= 10) targetLineDirection.value = 1;
    if (num >= 250 - targetLineStyle.width) targetLineDirection.value = -1;
    num += targetLineDirection.value;
    targetLineStyle.left = num;
  }, 15);
};

onMounted(() => {
  // fishingStar();
});
</script>

<style lang="less" scoped>
.stripBox {
  width: 260px;
  height: 50px;
  background-color: rgba(170, 187, 204, 0.5);

  .lineBox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    background-color: #bbb;

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
