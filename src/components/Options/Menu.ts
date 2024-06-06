import { h, Component } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon, MenuOption } from 'naive-ui';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

// 菜單Icon渲染的函數
function renderIcon(icon: string) {
  return () => h(NIcon, { size: 16 }, { default: () => h(SvgIcon, { icon }) });
}

/// 菜單選項數組
export const menuOptions: MenuOption[] = [
  {
    label: () => h(
      RouterLink,
      {
        to: { name: '首頁' }
      },
      { default: () => '首頁' }
    ),
    key: '首頁',
    icon: renderIcon('House')
  },
  {
    label: () => h(
      RouterLink,
      {
        to: { name: '角色管理' }
      },
      { default: () => '角色管理' }
    ),
    key: '角色管理',
    icon: renderIcon('Users')
  },
  {
    label: () => h(
      RouterLink,
      {
        to: { name: '管理帳號' }
      },
      { default: () => '管理帳號' }
    ),
    key: '管理帳號',
    icon: renderIcon('UserGear')
  },
  {
    label: () => h(
      RouterLink,
      {
        to: { name: '用戶資料' }
      },
      { default: () => '用戶資料' }
    ),
    key: '用戶資料',
    icon: renderIcon('CheckItem')
  },
  {
    label: () => h(
      RouterLink,
      {
        to: { name: '分析報表' }
      },
      { default: () => '分析報表' }
    ),
    key: '分析報表',
    icon: renderIcon('Analyze')
  },
  {
    label: () => h(
      RouterLink,
      {
        to: { name: '訊息管理' }
      },
      { default: () => '訊息管理' }
    ),
    key: '訊息管理',
    icon: renderIcon('Bell')
  },
  {
    label: () => h(
      RouterLink,
      {
        to: { name: '個管輔導' }
      },
      { default: () => '個管輔導' }
    ),
    key: '個管輔導',
    icon: renderIcon('FirstAidKit')
  }
];
