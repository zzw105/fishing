<template>
  <div id="app">
    <Title v-if="isPlay" />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Title from "@/components/Title";

export default defineComponent({
  components: { Title },
  data() {
    return {
      isPlay: false,
    };
  },
  mounted() {
    console.log();
    this.isPlay = this.$route.path !== "/";
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
