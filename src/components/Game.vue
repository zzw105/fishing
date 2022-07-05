<template>
  <div class="game">
    <Strip />
  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/pinia/user";

// 引入组件
import Strip from "@/components/Strip.vue";
import { onMounted } from "vue";

// 仓库相关
const _userStore = userStore();
const { setTitle, getNowGround } = _userStore;

onMounted(() => {
  setTitle(getNowGround.name);
});
</script>

<style lang="less" scoped>
.game {
  flex: 1;
}
</style>
