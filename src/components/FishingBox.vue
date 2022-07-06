<template>
  <div class="fishingBox">
    <div class="title">{{ index + 1 }}号</div>
    <div class="number">上钩鱼数：{{ props.groundInfo.number }}</div>
    <div class="auto">
      可否自动：{{
        props.groundInfo.autoFish ? "可以开启自动" : "不可以开启自动"
      }}
    </div>
    <Strip :groundInfo="groundInfo" :fishs="fishs" />
  </div>
</template>

<script lang="ts" setup>
import Strip from "./Strip.vue";

const props = defineProps<{
  groundInfo: groundProps;
  index: number;
  fishs: fishProps[];
}>();
</script>

<style lang="less" scoped>
.fishingBox {
  box-sizing: border-box;
  width: 280px;
  height: 300px;
  //   background-color: #abc;
  border: 3px double black;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  .title {
    text-align: center;
  }
  .auto {
    flex: 1;
  }
}
</style>
