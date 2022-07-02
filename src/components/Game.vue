<template>
  <div class="game">
    <Strip />
  </div>
</template>

<script>
import Strip from "@/components/Strip";

export default {
  name: "Game",
  components: { Strip },
};
</script>

<style lang="less" scoped>
.game {
  flex: 1;
}
</style>
