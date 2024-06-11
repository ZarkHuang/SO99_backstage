<template>
  <n-space vertical size="large" class="container">
    <!-- 搜尋區 -->
    <n-space align="center" justify="space-between">
      <n-space>
        <n-input v-model="searchQuery" placeholder="搜尋角色" style="width: 184px" />
        <n-select
          v-model="selectedWeight"
          :options="weightOptions"
          placeholder="體重正負"
          style="width: 184px"
        />
        <n-button ghost type="primary" @click="handleSearch">搜尋</n-button>
      </n-space>
    </n-space>

    <!-- 資料表 -->
    <div class="table-container">
      <n-data-table
        :columns="columns"
        :data="paginatedData"
        :bordered="false"
        :row-key="rowKey"
        style="margin-top: 8px"
      />
    </div>
    <ReportDrawer />
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
} from "@/components/ReportPage/ReportPageTable";
import ReportDrawer from "@/components/ReportPage/ReportDrawer.vue";
import { useReportDrawerStore } from "@/stores/drawers/ReportDrawerStore";

// 搜尋相關
const searchQuery = ref("");
const selectedWeight = ref("");
const weightOptions = ref([
  { label: "體重正", value: "positive" },
  { label: "體重負", value: "negative" },
]);

const handleSearch = () => {
  console.log("Search clicked!", searchQuery.value, selectedWeight.value);
  // 這裡可以加入搜尋邏輯
};

// 資料表相關
const tableData = ref(getMockTableData());
const drawerStore = useReportDrawerStore();

const handleEdit = (row: any) => {
  drawerStore.openDrawer("edit", row);
};

const handleSelectAll = (checked: boolean) => {
  tableData.value.forEach((row) => (row.checked = checked));
};

const handleSelect = (checked: boolean, row: any) => {
  row.checked = checked;
};

const rowKey = (row: any) => row.id;

const columns = getTableColumns(handleEdit, handleSelectAll, handleSelect);

// 分頁相關
const pageSize = 15;
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
