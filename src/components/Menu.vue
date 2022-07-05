<template>
  <div class="menu">
    <div @click="add">当前金钱：{{ getMoney }}</div>
    <div @click="save">保存</div>
    <div @click="load">读取</div>
  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/pinia/user";
import { computed } from "@vue/reactivity";
import { cryptoLoadStorage, cryptoSaveStorage } from "@/utils";

const _userStore = userStore();
const { setMoney, setUserAll } = _userStore;
const getMoney = computed(() => _userStore.getMoney);

const add = () => {
  setMoney(1);
};

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
