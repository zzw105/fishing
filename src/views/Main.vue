<template>
  <div class="main">
    <Game />
    <Menu />
  </div>
</template>

<script lang="ts" setup>
import Menu from "@/components/Menu.vue";
import Game from "@/components/Game.vue";
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
