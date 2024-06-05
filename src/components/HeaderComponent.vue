<template>
  <n-space justify="space-between" class="center-aligned" style="background-color: #f5f5f5; border: none">
    <!-- 麵包屑 -->
    <n-breadcrumb :separator="'/'" style="margin-left: 24px;">
      <n-breadcrumb-item :to="{ name: '首頁' }">首頁</n-breadcrumb-item>
      <n-breadcrumb-item>角色管理</n-breadcrumb-item>
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
import { ref, h } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { useScreenStore } from '@/stores/useScreen';
import { storeToRefs } from 'pinia';
import { NIcon, useMessage } from 'naive-ui';
import { useRouter } from 'vue-router';
import { menuOptions } from './Options/Menu';
import { MenuOutline } from '@vicons/ionicons5';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

// 使用 Pinia 存儲
const themeStore = useThemeStore();
const screenStore = useScreenStore();
const { isHidden } = storeToRefs(screenStore);
const message = useMessage();
const router = useRouter();

const userDropdownOptions = [
  {
    key: 'header',
    type: 'render',
    render: () => h(
      'div',
      { style: 'display: flex; align-items: center; padding: 8px 12px;' },
      [
        h('n-avatar', {
          round: true,
          style: 'margin-right: 12px;',
          src: 'https://cdn.pixabay.com/photo/2011/03/21/10/45/pig-5652_1280.jpg',
        }),
        h('div', null, [
          h('div', null, [h('n-text', { depth: 2 }, { default: () => 'zark2345' })]),
          h('div', { style: 'font-size: 12px;' }, [
            h('n-text', { depth: 3 }, { default: () => 'zark@gmail.com' }),
          ]),
        ]),
      ],
    ),
  },
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
