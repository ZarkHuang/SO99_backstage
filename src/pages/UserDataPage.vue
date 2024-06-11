<template>
  <n-space vertical size="large" class="container">
    <!-- 搜尋區 -->
    <n-space align="center" justify="space-between">
      <n-space>
        <n-input v-model="searchQuery" placeholder="搜尋角色" style="width: 184px" />
        <n-button ghost type="primary" @click="handleSearch">搜尋</n-button>
      </n-space>
      <!-- <n-button ghost type="primary" @click="handleAdd">新增角色</n-button> -->
    </n-space>

    <!-- 資料表 -->
    <div class="table-container">
      <n-data-table
        :columns="columns"
        :data="paginatedData"
        :bordered="false"
        style="margin-top: 8px"
      />
    </div>
    <n-space justify="center">
      <n-pagination
        v-if="totalPages > 1"
        :page="currentPage"
        :page-size="pageSize"
        :page-count="totalPages"
        @update:page="handlePageChange"
      />
    </n-space>
    <UserDataDrawer />
    <n-modal
      v-model:show="showSettingModal"
      class="custom-card"
      preset="card"
      :style="bodyStyle"
      :bordered="false"
      size="huge"
    >
      <h3 style="margin: 0; padding-bottom: 8px">已送出同意管理申請</h3>
      <div class="modalContent">
        <p style="margin: 0">姓名: {{ selectedUser?.name }}</p>
        <p style="margin: 0">電話: {{ selectedUser?.tel }}</p>
      </div>
    </n-modal>
  </n-space>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  getTableColumns,
  getMockTableData,
} from "@/components/UserDataPage/UserDataTable";
import UserDataDrawer from "@/components/UserDataPage/UserDataDrawer.vue";
import { useDataDrawerStore } from "@/stores/drawers/UserDataDrawerStore";

// 搜尋相關
const searchQuery = ref("");
const handleSearch = () => {
  console.log("Search clicked!", searchQuery.value);
  // 這裡可以加入搜尋邏輯
};
const handleAdd = () => {
  drawerStore.openDrawer("add", {
    id: "",
    name: "",
    career: "",
    position: "",
    level: "",
    active: false,
  });
};

// Modal 相關
const showSettingModal = ref(false);
const selectedUser = ref<any>(null);

const bodyStyle = {
  maxWidth: "300px",
  textAlign: "center",
  padding: "0px",
};

// 資料表相關
const tableData = ref(getMockTableData());
const drawerStore = useDataDrawerStore();

const handleEdit = (row: any) => {
  drawerStore.openDrawer("edit", row);
};

const handleSetting = (row: any) => {
  selectedUser.value = row;
  showSettingModal.value = true;

  // 更新資料
  setTimeout(() => {
    row.setting = "已設定";
    row.agree = "同意";
  }, 300);

  // 3秒後自動關閉 modal
  setTimeout(() => {
    showSettingModal.value = false;
  }, 2000);
};

// 分頁相關
const pageSize = 13;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(tableData.value.length / pageSize));

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return tableData.value.slice(start, end);
});

const handlePageChange = (page: number) => {
  currentPage.value = page;
};

const columns = getTableColumns(handleEdit, handleSetting);
</script>

<style scoped>
.table-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 760px;
}

.modalContent {
  padding-bottom: 16px;
}

.modalContent p {
  color: #8b8b8b;
}
</style>
