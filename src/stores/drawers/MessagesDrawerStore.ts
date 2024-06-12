// src/stores/AccountDrawerStore.ts
import { defineStore } from 'pinia';
import { useBaseDrawerStore } from '@/stores/baseDrawer';

export const useMessagesDrawerStore = defineStore('messageDrawer', () => {
  return useBaseDrawerStore({
    account: '',
    name: '',
    career: '',
    position: '',
    level: '',
    active: true
  });
});
