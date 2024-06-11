// src/stores/drawers/UserDataDrawerStore.ts
import { defineStore } from 'pinia';
import { useBaseDrawerStore } from '@/stores/baseDrawer';

export const useDataDrawerStore = defineStore('dataDrawer', () => {
  return useBaseDrawerStore({
    account: '',
    name: '',
    position: '',
    level: '',
    active: true
  });
});
