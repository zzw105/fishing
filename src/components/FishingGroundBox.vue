<template>
  <div class="fishingGroundBox">
    <el-icon class="locationIcon"><Location /></el-icon>
    <span class="name">{{ groundInfo.name }}</span>
    <div class="in" @click="toFishing">
      <span>进入</span>
      <el-icon><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { globalStore } from "@/pinia/global";
import { useRouter } from "vue-router";

const router = useRouter();
const _globalStore = globalStore();
const props = defineProps<{
  groundInfo: fishingGroundProps;
}>();

const toFishing = () => {
  //  仓库中记录当前渔场并跳转
  _globalStore.setGround(props.groundInfo);
  router.push({ name: "Game" });
};
</script>

<style lang="less" scoped>
.fishingGroundBox {
  display: flex;
  align-items: center;
  font-size: 25px;
  width: 1000px;
  height: 50px;
  background-color: #abc;
  margin-bottom: 20px;
  .locationIcon {
    margin: 0 10px;
  }
  .name {
    flex: 1;
  }
  .in {
    display: flex;
    align-items: center;
  }
}
</style>
