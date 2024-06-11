// src/stores/UserDrawerStore.ts
import { defineStore } from 'pinia';
import { useBaseDrawerStore } from '@/stores/baseDrawer';

export const useUserDrawerStore = defineStore('userDrawer', () => {
  return useBaseDrawerStore({
    name: '',
    level: '',
    active: true
  });
});
