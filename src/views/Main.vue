<template>
  <div class="main">
    <Game />
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Game from "@/components/Game";

export default {
  name: "Main",
  components: { Game, Menu },
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
