<template>
  <div id="app">
    <Title v-if="isPlay" :text="title" />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { globalStore } from "./pinia/global";
import { useRoute } from "vue-router";

// 引入组件
import Title from "@/components/Title.vue";
import { computed } from "@vue/reactivity";

// 是否开始游戏
const isPlay = ref<boolean>(false);
const route = useRoute();
const _globalStore = globalStore();
// 标题内容
const title = computed(() => _globalStore.getTitle);
// 监听router修改上方栏显示状态
watch(route, (val) => {
  isPlay.value = val.path !== "/";
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
