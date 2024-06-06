<template>
    <n-space vertical size="large" style="padding:16px;">
        <!-- 搜尋區 -->
        <n-space align="center" justify="space-between">
            <n-space>
                <n-input v-model="searchQuery" placeholder="搜尋角色" style="width: 184px;" />
                <n-button ghost type="primary" @click="handleSearch">搜尋</n-button>
            </n-space>
            <n-button ghost type="primary" @click="handleAdd">新增角色</n-button>
        </n-space>

        <!-- 備註 -->
        <div class="note">
            備註: 初始預設只有自己的層級一個角色，並且只能新增自己往下的層級角色
        </div>

        <!-- 資料表 -->
        <n-data-table :columns="columns" :data="tableData" :bordered="false" />
        <BaseDrawer :show="drawerStore.showEditDrawer" :title="drawerTitle" :placement="'right'" :width="'432px'"
          @update:show="drawerStore.closeDrawer" @save="handleSave" @close="handleClose">
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
                <n-switch v-model:checked="drawerStore.editData.active" />
            </div>
        </BaseDrawer>
    </n-space>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { getTableColumns, getMockTableData } from '@/components/UserDataPage/UserDataTable';
import BaseDrawer from '@/components/Drawer/BaseDrawer.vue';
import { useDrawerStore } from '@/stores/drawer';

// 搜尋相關
const searchQuery = ref('');
const handleSearch = () => {
    console.log('Search clicked!', searchQuery.value);
    // 這裡可以加入搜尋邏輯
};
const handleAdd = () => {
    drawerStore.setEditData({ name: '', level: '', active: false }); // 清空editData
    drawerStore.openDrawer('add'); // 打開drawer並設置為新增模式
};

// 資料表相關
const tableData = ref(getMockTableData());
const drawerStore = useDrawerStore();
const handleEdit = (row: any) => {
    drawerStore.setEditData({ ...row });
    drawerStore.openDrawer('edit');
};
const columns = getTableColumns(handleEdit);

const drawerTitle = computed(() => drawerStore.mode === 'edit' ? '編輯角色' : '新增角色');

const levelOptions = ref([
  { label: '企業', value: '企業' },
  { label: '管理員', value: '管理員' }
]);

const handleSave = () => {
    if (drawerStore.mode === 'edit') {
        // 調用編輯角色的 API
        console.log('打用戶資料編輯角色api:', drawerStore.editData);
    } else {
        // 調用新增角色的 API
        console.log('打用戶資料新增角色api:', drawerStore.editData);
    }
    drawerStore.closeDrawer();
};

const handleClose = () => {
    console.log('Drawer closed');
};
</script>

<style scoped>
.note {
    color: #999;
    font-size: 12px;
    margin-top: 16px;
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
</style>
