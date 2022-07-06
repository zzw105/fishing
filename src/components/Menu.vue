<template>
  <div class="menu">
    <!-- TAG:打包需隐藏 -->
    <div @click="setMoney(1)">当前金钱：{{ money }}</div>
    <!-- <div>当前金钱：{{ money }}</div> -->
    <div @click="save">保存</div>
    <div @click="load">读取</div>
  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/pinia/user";
import { computed } from "@vue/reactivity";
import { cryptoLoadStorage, cryptoSaveStorage } from "@/utils";

const _userStore = userStore();
const { setUserAll, setMoney } = _userStore;
const money = computed(() => _userStore.getMoney);

const save = () => {
  cryptoSaveStorage("data", JSON.stringify(_userStore.$state));
};

const load = () => {
  setUserAll(JSON.parse(cryptoLoadStorage("data")));
};
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  height: 50px;
}
</style>
