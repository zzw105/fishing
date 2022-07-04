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

<style scoped></style>
