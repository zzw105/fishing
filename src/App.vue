<template>
  <div id="app">
    <Title v-if="isPlay" :text="title" />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import Title from "@/components/Title.vue";
import { userStore } from "@/pinia/user";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const isPlay = ref<boolean>(false);
const route = useRoute();
const store = userStore();
const { title } = storeToRefs(store);
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
