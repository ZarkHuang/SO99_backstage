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
        <n-date-picker
          v-model="selectedDateRange"
          type="daterange"
          placeholder="選擇日期範圍"
          style="width: 184px"
        />
        <n-button ghost type="primary" @click="handleSearch">搜尋</n-button>
        <n-button ghost type="primary" @click="handleCopyIds">複製ID</n-button>
      </n-space>
    </n-space>

    <!-- 資料表 -->
    <div class="table-container">
      <n-data-table
        :columns="columns"
        :data="paginatedData"
        :bordered="false"
        :row-key="rowKey"
        v-model:checked-row-keys="checkedRowKeys"
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
import { useMessage } from "naive-ui";

const message = useMessage();

// 搜尋相關
const searchQuery = ref("");
const selectedWeight = ref("");
const selectedDateRange = ref<[string, string] | null>(null);
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

const handleSelectAll = (checked: boolean) => {
  const newCheckedKeys = checked ? tableData.value.map((row) => row.id) : [];
  checkedRowKeys.value = newCheckedKeys;
  console.log("After select all:", newCheckedKeys); // 檢查更新後的數據
};

const handleSelect = (checked: boolean, row: any) => {
  const newCheckedKeys = checked
    ? [...checkedRowKeys.value, row.id]
    : checkedRowKeys.value.filter((key) => key !== row.id);
  checkedRowKeys.value = newCheckedKeys;
  console.log("Updated row after select:", newCheckedKeys); // 檢查更新後的行數據
};

const rowKey = (row: any) => row.id;

const columns = getTableColumns(handleSelectAll, handleSelect);

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

const checkedRowKeys = ref<string[]>([]);

const handleCopyIds = () => {
  console.log("Current table data before filtering: ", tableData.value); // 確保數據顯示

  const selectedIds = checkedRowKeys.value.join(", ");

  console.log("Selected IDs after filtering: ", selectedIds); // 確保複製的 ID

  if (selectedIds.length > 0) {
    navigator.clipboard
      .writeText(selectedIds)
      .then(() => {
        message.success("ID已複製");
      })
      .catch((err) => {
        message.error("複製失敗");
      });
  } else {
    message.warning("請選擇至少一個ID");
  }
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
