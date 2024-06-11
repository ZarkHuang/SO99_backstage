// src/stores/baseDrawer.ts
import { ref } from 'vue';

export const useBaseDrawerStore = (initialState: any) => {
  const showEditDrawer = ref(false);
  const editData = ref<any>({ ...initialState });
  const mode = ref<'edit' | 'add'>('edit'); // 新增 mode 狀態

  const openDrawer = (drawerMode: 'edit' | 'add', data: any = {}) => {
    mode.value = drawerMode;
    editData.value = { ...initialState, ...data };
    showEditDrawer.value = true;
  };

  const closeDrawer = () => {
    showEditDrawer.value = false;
  };

  return {
    showEditDrawer,
    editData,
    mode,
    openDrawer,
    closeDrawer,
  };
};
