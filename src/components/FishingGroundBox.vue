<template>
  <div class="fishingGroundBox"></div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { VfishingGroundProps } from "@vue/runtime-core";

const props = defineProps<{
  groundInfo: VfishingGroundProps;
}>();
</script>

<style></style>
