<template>
  <div class="menu">
    <!-- TAG:打包需处理 -->
    <div @click="setMoney(1)" class="money">
      <el-icon><Money /></el-icon>：{{ money }}
    </div>
    <el-button @click="back">返回鱼场</el-button>
    <el-button @click="save">保存</el-button>
    <el-button @click="leadingOut">导出</el-button>
    <el-button @click="load">读取</el-button>
    <el-dialog
      v-model="dialogVisible"
      title="导出存档"
      width="30%"
      :before-close="handleClose"
    >
      <textarea
        ref="textarea"
        name="data"
        id="data"
        :value="localData"
      ></textarea>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="copy">复制代码</el-button>
          <el-button type="primary" @click="handleClose">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/pinia/user";
import { computed } from "@vue/reactivity";
import { cryptoLoadStorage, cryptoSaveStorage } from "@/utils";
import { ElMessage } from "element-plus";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const textarea = ref<HTMLTextAreaElement>();
const dialogVisible = ref(false);
const localData = ref("");
const _userStore = userStore();
const { setUserAll, setMoney } = _userStore;
const money = computed(() => _userStore.getMoney);
const time = ref<NodeJS.Timer | null>(null);
const router = useRouter();

// 保存
const save = () => {
  cryptoSaveStorage("data", JSON.stringify(_userStore.$state));
  ElMessage({
    type: "success",
    message: `自动存档成功`,
  });
};

// 关闭提示框
const handleClose = () => {
  dialogVisible.value = false;
};

// 导出按钮
const leadingOut = () => {
  save();
  const data = localStorage.getItem("data");
  if (!data) return;
  localData.value = data;
  dialogVisible.value = true;
};

// 载入
const load = () => {
  setUserAll(JSON.parse(cryptoLoadStorage("data")));
};

// 返回
const back = () => {
  router.push({ name: "FishingGround" });
};

// 拷贝
const copy = () => {
  textarea.value?.focus();
  textarea.value?.setSelectionRange(0, -1);
  document.execCommand("copy");
};

onMounted(() => {
  // 自动存档
  time.value = setInterval(() => {
    save();
  }, 10000);
});

onUnmounted(() => {
  if (time.value) clearInterval(time.value);
});
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  padding: 0 20px;
  align-items: center;
  height: 50px;
  .money {
    flex: 1;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
}
</style>
