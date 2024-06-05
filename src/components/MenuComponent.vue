<template>
  <div>
    <div class="logo">
      <span
        :style="{ color: themeStore.primaryColor, fontSize: '26px'  }">
        test
      </span>
    </div>
    <n-menu :options="menuOptions" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { useScreenStore } from '@/stores/useScreen';
import { storeToRefs } from 'pinia';
import { menuOptions } from './Options/Menu';

// 使用 Pinia 存儲
const themeStore = useThemeStore();
const screenStore = useScreenStore();
const { isHidden } = storeToRefs(screenStore);

// setup 邏輯
const collapsed = ref(false);

const handleCollapse = () => {
  collapsed.value = true;
};

const handleExpand = () => {
  collapsed.value = false;
};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px; /* 和 collapsedWidth 保持一致 */
}
</style>
