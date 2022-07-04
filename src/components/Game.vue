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
const store = userStore();
const { setTitle } = store;

onMounted(() => {
  setTitle("渔场");
});
</script>

<style lang="less" scoped>
.game {
  flex: 1;
}
</style>
