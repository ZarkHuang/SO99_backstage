<template>
  <n-drawer
    v-model:show="drawerStore.showEditDrawer"
    placement="right"
    :title="drawerTitle"
    width="432"
    style="padding: 16px"
  >
    <n-space vertical>
      <!-- 標題和按鈕 -->
      <div class="drawer-header">
        <n-icon class="close-icon" @click="drawerStore.closeDrawer">
          <SvgIcon icon="Close" />
        </n-icon>
        <span class="drawer-title">{{ drawerTitle }}</span>
        <n-space>
          <n-button ghost type="primary" @click="drawerStore.closeDrawer">取消</n-button>
          <n-button type="primary" @click="handleSave">{{
            drawerStore.mode === "edit" ? "確定" : "新增"
          }}</n-button>
        </n-space>
      </div>
      <n-divider />

      <!-- 表單內容 -->
      <n-space vertical>
        <div class="form-item">
          <label>帳號*</label>
          <n-input v-model:value="drawerStore.editData.id" placeholder="帳號" />
        </div>
        <div class="form-item">
          <label>姓名*</label>
          <n-input v-model:value="drawerStore.editData.name" placeholder="姓名" />
        </div>
        <div class="form-item">
          <label>職稱*</label>
          <n-input v-model:value="drawerStore.editData.career" placeholder="職稱" />
        </div>
        <div class="form-item">
          <label>角色名稱*</label>
          <n-input v-model:value="drawerStore.editData.position" placeholder="角色名稱" />
        </div>
        <div class="form-item">
          <label>層級*</label>
          <n-select
            v-model:value="drawerStore.editData.level"
            :options="levelOptions"
            placeholder="層級"
          />
        </div>
        <div class="form-item">
          <label>操作*</label>
          <div class="switch-container">
            <n-switch v-model:value="drawerStore.editData.active" />
          </div>
        </div>
      </n-space>
    </n-space>
  </n-drawer>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useAccountDrawerStore } from "@/stores/drawers/AccountDrawerStore";
import SvgIcon from "@/components/Icons/SvgIcon.vue";

const drawerStore = useAccountDrawerStore();
const levelOptions = ref([
  { label: "企業", value: "企業" },
  { label: "管理員", value: "管理員" },
]);

const drawerTitle = computed(() =>
  drawerStore.mode === "edit" ? "編輯角色" : "新增角色"
);

const handleSave = () => {
  if (drawerStore.mode === "edit") {
    console.log("打編輯角色api:", drawerStore.editData);
  } else {
    console.log("打新增角色api:", drawerStore.editData);
  }
  drawerStore.closeDrawer();
};
</script>

<style scoped>
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.close-icon {
  cursor: pointer;
}

.drawer-title {
  font-weight: bold;
  margin-left: 8px;
  flex-grow: 1;
}

.form-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.form-item label {
  width: 100px; /* 固定寬度 */
  margin-right: 16px;
  text-align: left; /* 對齊左側 */
}

.form-item > *:not(label) {
  flex: 1;
}

.switch-container {
  display: flex;
  align-items: center;
}

.n-divider:not(.n-divider--vertical) {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
