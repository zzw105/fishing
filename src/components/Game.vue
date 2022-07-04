<template>
  <div class="game">
    <Strip />
  </div>
</template>

<script lang="ts" setup>
import Strip from "@/components/Strip.vue";
import { userStore } from "@/pinia/user";

const store = userStore();
const { setTitle } = store;
setTitle("123");
</script>

<style lang="less" scoped>
.game {
  flex: 1;
}
</style>
