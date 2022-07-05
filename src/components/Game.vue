<template>
  <div class="game">
    <!-- <Strip /> -->
    <FishingBox
      v-for="(item, index) in nowGround.ground"
      :key="item.id"
      :groundInfo="item"
      :index="index"
    />
  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/pinia/user";

// 引入组件
// import Strip from "@/components/Strip.vue";
import FishingBox from "./FishingBox.vue";
import { computed, onMounted } from "vue";

// 仓库相关
const _userStore = userStore();
const { setTitle } = _userStore;
const nowGround = computed(() => _userStore.getNowGround);

onMounted(() => {
  setTitle(nowGround.value.name);
});
</script>

<style lang="less" scoped>
.game {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
</style>
