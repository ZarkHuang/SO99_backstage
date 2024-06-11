// Userpage.vue
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
    <div class="note">
      備註: 初始預設只有自己的層級一個角色，並且只能新增自己往下的層級角色
    </div>

    <!-- 資料表 -->
    <div class="table-container">
      <n-data-table :columns="columns" :data="paginatedData" :bordered="false" />
    </div>
    <UserEditDrawer />
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
import { getTableColumns, getMockTableData } from "@/components/UserPage/UserPageTable";
import UserEditDrawer from "@/components/UserPage/UserDrawer.vue";
import { useUserDrawerStore } from "@/stores/drawers/UserDrawerStore";

// 搜尋相關
const searchQuery = ref("");
const handleSearch = () => {
  console.log("Search clicked!", searchQuery.value);
  // 這裡可以加入搜尋邏輯
};
const handleAdd = () => {
  drawerStore.openDrawer("add", {
    name: "",
    level: levelOptions.value[0].value,
    active: false,
  }); // 打開drawer並設置為新增模式
};

// 資料表相關
const tableData = ref(getMockTableData());
const drawerStore = useUserDrawerStore();

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

// 設定選項的預設值
const levelOptions = ref([
  { label: "企業", value: "企業" },
  { label: "管理員", value: "管理員" },
]);
</script>

<style scoped>
.table-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 670px;
}
</style>
