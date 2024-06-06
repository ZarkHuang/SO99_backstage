// src/stores/drawer.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface EditData {
  name: string;
  level: string;
  active: boolean;
}

export const useDrawerStore = defineStore('drawer', () => {
  const showEditDrawer = ref(false);
  const editData = ref<EditData>({ name: '', level: '', active: false });
  const mode = ref<'edit' | 'add'>('edit'); // 新增 mode 狀態

  const openDrawer = (drawerMode: 'edit' | 'add') => {
    mode.value = drawerMode;
    showEditDrawer.value = true;
  };

  const closeDrawer = () => {
    showEditDrawer.value = false;
  };

  const setEditData = (data: EditData) => {
    editData.value = data;
  };

  return {
    showEditDrawer,
    editData,
    mode,
    openDrawer,
    closeDrawer,
    setEditData,
  };
});
