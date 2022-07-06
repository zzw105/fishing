<template>
  <div class="FishingGround">
    <FishingGroundBox
      v-for="item in allFishingGround"
      :key="item.id"
      :ground-info="item"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { globalStore } from "@/pinia/global";
import FishingGroundBox from "@/components/FishingGroundBox.vue";
import { computed } from "@vue/reactivity";

const _globalStore = globalStore();
const allFishingGround = computed(() => _globalStore.getAllFishingGround);
const { setTitle } = _globalStore;

onMounted(() => {
  setTitle("请选择渔场");
});
</script>

<style scoped lang="less">
.FishingGround {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
