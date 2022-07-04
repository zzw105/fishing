<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/svg/fishingLogo.svg" />
    <el-button size="large" type="primary" @click="toGame">开始钓鱼</el-button>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";

const toGame = () => {
  router.push({ name: "Game" });
};
</script>

<style lang="less" scoped>
.home {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 360px;
  border-radius: 5%;
  background-color: #eaf1ff;
  box-shadow: 3px -3px 4px #aaaaaa;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  img {
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
  }
}
</style>
