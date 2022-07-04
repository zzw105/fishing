<template>
  <div class="title">{{ text }}</div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  text: string;
}>();
</script>

<style lang="less" scoped>
.title {
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  border: 3px double #000;
}
</style>
