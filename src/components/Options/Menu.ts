import { h, Component } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon, MenuOption } from 'naive-ui';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

// 菜單Icon渲染的函數
function renderIcon(icon: string) {
  return () => h(NIcon, { size: 24 }, { default: () => h(SvgIcon, { icon }) });
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
    type: 'divider',
    props: {
      style: { marginLeft: '32px' }
    }
  },
  {
    label: () => h(
      RouterLink,
      {
        to: { name: '個人資料' }
      },
      { default: () => '個人資料' }
    ),
    key: '個人資料',
    icon: renderIcon('Users')
  },
  {
    label: '功能管理',
    key: '功能管理',
    icon: renderIcon('UserGear'),
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: { name: '功能列表' }
          },
          { default: () => '功能列表' }
        ),
        key: '功能列表',
        icon: renderIcon('CheckItem')
      },
      {
        label: () => h(
          RouterLink,
          {
            to: { name: '配置文件' }
          },
          { default: () => '配置文件' }
        ),
        key: '配置文件',
        icon: renderIcon('CheckItem')
      },
      {
        label: () => h(
          RouterLink,
          {
            to: { name: '節點狀態' }
          },
          { default: () => '節點狀態' }
        ),
        key: '節點狀態',
        icon: renderIcon('CheckItem')
      },
      {
        label: () => h(
          RouterLink,
          {
            to: { name: '下載' }
          },
          { default: () => '下載' }
        ),
        key: '下載',
        icon: renderIcon('CheckItem')
      }
    ]
  },
  {
    label: '用戶資料',
    key: '用戶資料',
    icon: renderIcon('CheckItem'),
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: { name: '免費域名' }
          },
          { default: () => '免費域名' }
        ),
        key: '免費域名',
        icon: renderIcon('CheckItem')
      }
    ]
  },
  {
    label: '增值中心',
    key: '增值中心',
    icon: renderIcon('Analyze'),
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: { name: '購買點數卡' }
          },
          { default: () => '購買點數卡' }
        ),
        key: '購買點數卡',
        icon: renderIcon('Analyze')
      },
      {
        label: () => h(
          RouterLink,
          {
            to: { name: '積分商城' }
          },
          { default: () => '積分商城' }
        ),
        key: '積分商城',
        icon: renderIcon('Analyze')
      },
      {
        label: () => h(
          RouterLink,
          {
            to: { name: '消費記錄' }
          },
          { default: () => '消費記錄' }
        ),
        key: '消費記錄',
        icon: renderIcon('Analyze')
      }
    ]
  },
  {
    label: '其他資訊',
    key: '其他資訊',
    icon: renderIcon('CircleWarning'),
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: { name: '其他' }
          },
          { default: () => '其他' }
        ),
        key: '其他',
        icon: renderIcon('CircleWarning')
      },
    ]
  },
];
