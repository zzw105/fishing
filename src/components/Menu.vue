<template>
  <div class="menu">
    <!-- TAG:打包需隐藏 -->
    <div @click="setMoney(1)">当前金钱：{{ money }}</div>
    <!-- <div>当前金钱：{{ money }}</div> -->
    <div @click="save">保存</div>
    <div @click="load">读取</div>
    <div @click="back">返回鱼场</div>
  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/pinia/user";
import { computed } from "@vue/reactivity";
import { cryptoLoadStorage, cryptoSaveStorage } from "@/utils";
import { ElMessage } from "element-plus";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const _userStore = userStore();
const { setUserAll, setMoney } = _userStore;
const money = computed(() => _userStore.getMoney);
const time = ref<NodeJS.Timer | null>(null);
const router = useRouter();

const save = () => {
  cryptoSaveStorage("data", JSON.stringify(_userStore.$state));
  ElMessage({
    type: "success",
    message: `自动存档成功`,
  });
};

const load = () => {
  setUserAll(JSON.parse(cryptoLoadStorage("data")));
};

const back = () => {
  router.push({ name: "FishingGround" });
};

onMounted(() => {
  // 自动存档
  time.value = setInterval(() => {
    save();
  }, 10000);
});

onUnmounted(() => {
  if (time.value) clearInterval(time.value);
});
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  height: 50px;
}
</style>
