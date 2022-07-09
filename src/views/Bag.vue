<template>
  <div class="bag">{{ fish }}</div>
</template>

<script lang="ts" setup>
import { userStore } from "@/pinia/user";
import { storeToRefs } from "pinia";

const _userStore = userStore();
const { fish } = storeToRefs(_userStore);
</script>

<style lang="less" scoped></style>
