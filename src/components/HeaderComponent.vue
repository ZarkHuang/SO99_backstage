<template>
  <n-space justify="space-between" class="center-aligned" style="background-color: #f5f5f5; border: none">
    <!-- 麵包屑 -->
    <n-breadcrumb :separator="'/'" style="margin-left: 24px;">
      <n-breadcrumb-item @click="navigateHome">
        <n-text style="cursor: pointer;">首頁</n-text>
      </n-breadcrumb-item>
      <n-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbs" :key="index" :to="{ name: breadcrumb.name }">
        <n-text :style="{ fontWeight: index === breadcrumbs.length - 1 ? 'bold' : 'normal' }">
          {{ breadcrumb.meta.breadcrumb }}
        </n-text>
      </n-breadcrumb-item>
    </n-breadcrumb>

    <div :style="{ display: isHidden ? 'flex' : 'none' }">
      <n-dropdown size="large" :options="menuOptions">
        <n-button quaternary style="font-size: 18px">
          <n-icon :component="MenuOutline" style="cursor: pointer;"></n-icon>
        </n-button>
      </n-dropdown>
    </div>
    <n-space class="center-aligned" justify="space-between">
      <n-dropdown trigger="hover" :options="userDropdownOptions">
        <n-button quaternary size="large" class="avatar-container">
          Hi <p class="userName">Zark</p>
          <SvgIcon icon="UserCircle" class="user-icon" size="24px"/>
        </n-button>
      </n-dropdown>
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
import { ref, computed, h } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useScreenStore } from '@/stores/useScreen';
import { storeToRefs } from 'pinia';
import { NIcon, useMessage, NText } from 'naive-ui';
import { menuOptions } from './Options/Menu';
import { MenuOutline } from '@vicons/ionicons5';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

// 使用 Pinia 存儲
const screenStore = useScreenStore();
const { isHidden } = storeToRefs(screenStore);
const message = useMessage();
const router = useRouter();
const route = useRoute();

// 動態生成麵包屑
const breadcrumbs = computed(() => {
  const matched = route.matched;
  return matched.slice(1); // 去掉根路由
});

const navigateHome = () => {
  router.push({ name: '首頁' });
};

const userDropdownOptions = [
  {
    label: '用戶資料',
    key: 'profile',
    icon: () => h(NIcon, { size: 16 }, { default: () => h(SvgIcon, { icon: 'House' }) }),
    props: {
      onClick: () => {
        router.push('/user');
      },
    },
  },
  {
    label: '退出登入',
    key: 'logout',
    icon: () => h(NIcon, { size: 16, color: '#f5222d' }, { default: () => h(SvgIcon, { icon: 'House' }) }),
    props: {
      onClick: () => {
        message.info('還沒做這個東西，這只是模組。');
      },
    },
  },
];
</script>

<style scoped>
.center-aligned {
  display: flex;
  align-items: center;
  height: 60px;
}

.avatar-container {
  display: flex;
  align-items: center;
  margin-right: 12px;
}

p.userName {
  font-weight: bold;
  margin: 0 6px;
}
</style>
