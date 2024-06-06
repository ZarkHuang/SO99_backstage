<template>
  <n-drawer v-model:show="drawerStore.showEditDrawer" placement="right" :title="drawerStore.mode === 'edit' ? '編輯角色' : '新增角色'" width="432" style="padding:16px">
    <n-space vertical>
      <!-- 標題和按鈕 -->
      <div class="drawer-header">
        <n-icon class="close-icon" @click="drawerStore.closeDrawer">
          <SvgIcon icon="Close" />
        </n-icon>
        <span class="drawer-title">{{ drawerStore.mode === 'edit' ? '編輯角色' : '新增角色' }}</span>
        <n-space>
          <n-button ghost type="primary" @click="drawerStore.closeDrawer">取消</n-button>
          <n-button type="primary" @click="handleSave">{{ drawerStore.mode === 'edit' ? '確定' : '新增' }}</n-button>
        </n-space>
      </div>
      <n-divider />

      <!-- 表單內容 -->
      <n-space vertical>
        <div class="form-item">
          <label>角色名稱*</label>
          <n-input v-model="drawerStore.editData.name" placeholder="角色名稱" />
        </div>
        <div class="form-item">
          <label>角色層級*</label>
          <n-select v-model="drawerStore.editData.level" :options="levelOptions" placeholder="角色層級" />
        </div>
        <div class="form-item">
          <label>操作*</label>
          <div class="switch-container">
            <n-switch v-model:checked="drawerStore.editData.active" />
          </div>
        </div>
      </n-space>
    </n-space>
  </n-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDrawerStore } from '@/stores/drawer';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

const drawerStore = useDrawerStore();
const levelOptions = ref([
  { label: '企業', value: '企業' },
  { label: '管理員', value: '管理員' }
  // 添加其他角色層級選項
]);

const handleSave = () => {
  if (drawerStore.mode === 'edit') {
    // 調用編輯角色的 API
    console.log('打編輯角色api:', drawerStore.editData);
  } else {
    // 調用新增角色的 API
    console.log('打新增角色api:', drawerStore.editData);
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
  width: 100px;
  margin-right: 16px;
  text-align: left;
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
