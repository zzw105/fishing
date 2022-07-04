<template>
  <div class="FishingGround">
    <FishingGroundBox
      v-for="item in getAllFishingGround"
      :key="item.id"
      :ground-info="item"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { fishingGroundStore } from "@/pinia/fishingGround";
import { userStore } from "@/pinia/user";
import FishingGroundBox from "@/components/FishingGroundBox.vue";

const _fishingGroundStore = fishingGroundStore();
const _userStore = userStore();
const { getAllFishingGround } = _fishingGroundStore;
const { setTitle } = _userStore;

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
