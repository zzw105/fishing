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
import { userStore } from "@/pinia/user";

const _userStore = userStore();
const props = defineProps<{
  groundInfo: fishingGroundProps;
}>();

const toFishing = () => {
  _userStore.setGround(props.groundInfo);
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
