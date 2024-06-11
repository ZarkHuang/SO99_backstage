<template>
  <n-space vertical size="large" class="container">
    <!-- 搜尋區 -->
    <n-space align="center" justify="space-between">
      <n-space>
        <n-input v-model="searchQuery" placeholder="搜尋角色" style="width: 184px" />
        <n-button ghost type="primary" @click="handleSearch">搜尋</n-button>
      </n-space>
      <n-button ghost type="primary" @click="handleAdd">新增角色</n-button>
    </n-space>

    <!-- 備註 -->
    <div class="note">備註:無法新增往上層級之角色。</div>

    <!-- 資料表 -->
    <div class="table-container">
      <n-data-table :columns="columns" :data="paginatedData" :bordered="false" />
    </div>
    <AccountDrawer />
    <n-space justify="center">
      <n-pagination
        v-if="totalPages > 1"
        :page="currentPage"
        :page-size="pageSize"
        :page-count="totalPages"
        @update:page="handlePageChange"
      />
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  getTableColumns,
  getMockTableData,
} from "@/components/AccountPage/AccountPageTable";
import AccountDrawer from "@/components/AccountPage/AccountDrawer.vue";
import { useAccountDrawerStore } from "@/stores/drawers/AccountDrawerStore";

// 搜尋相關
const searchQuery = ref("");
const handleSearch = () => {
  console.log("Search clicked!", searchQuery.value);
  // 這裡可以加入搜尋邏輯
};
const handleAdd = () => {
  drawerStore.openDrawer("add", { name: "", level: "", active: false });
};

// 資料表相關
const tableData = ref(getMockTableData());
const drawerStore = useAccountDrawerStore();

const handleEdit = (row: any) => {
  drawerStore.openDrawer("edit", row);
};

const columns = getTableColumns(handleEdit);

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
</script>

<style scoped>
.table-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 670px;
}
</style>
