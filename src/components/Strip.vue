<template>
  <div class="stripBox">
    <div class="lineBox">
      <div class="line"></div>
      <div ref="targetRef" class="target"></div>
      <div class="targetLine"></div>
    </div>
    <div class="btnBox"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { targetStyleProps } from "@vue/runtime-core";

const targetStyle = reactive<targetStyleProps>({ left: "50px", width: "30px" });
const targetLineStyle = reactive<targetStyleProps>({
  left: "6px",
  width: "2px",
});

// const setIntervalNum = ref<number>(0);

const targetRef = ref<HTMLDivElement>();

onMounted(() => {
  let num = 6;
  let go = 1;
  setInterval(() => {
    if (num === 5) go = 1;
    if (num === 200) go = -1;
    num += go;
    targetLineStyle.left = num + "px";
    console.log(targetLineStyle.left);
  }, 10);
});
console.log(targetStyle);
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
      background-color: blue;
      border-radius: 5px;
    }

    .target {
      background-color: red;
      position: absolute;
      height: 10px;
      width: v-bind("targetStyle.width");
      left: v-bind("targetStyle.left");
    }

    .targetLine {
      background-color: black;
      position: absolute;
      height: 10px;
      width: v-bind("targetLineStyle.width");
      left: v-bind("targetLineStyle.left");
    }
  }
}
</style>
