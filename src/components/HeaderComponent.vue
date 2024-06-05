<template>
    <n-space justify="space-between" class="center-aligned">
        <span
            :style="{ display: isHidden ? 'none' : 'flex', color: themeStore.primaryColor, marginLeft: '24px', fontSize: '26px', transition: 'color 0.2s' }">
            test
        </span>
        <div :style="{ display: isHidden ? 'flex' : 'none' }">
            <n-dropdown size="large" :options="menuOptions">
                <n-button quaternary style="font-size: 18px">
                    <n-icon :component="MenuOutline" style="cursor: pointer;"></n-icon>
                </n-button>
            </n-dropdown>
        </div>
        <n-space class="center-aligned" justify="space-between">
            <n-button quaternary style="font-size: 18px">
                <n-badge :value="999" :max="9">
                    <n-icon :component="ChatbubbleEllipsesOutline" style="cursor: pointer;"></n-icon>
                </n-badge>
            </n-button>
            <n-popover trigger="hover">
                <template #trigger>
                    <n-button quaternary style="font-size: 18px;" @click="ThemeSwitcherDrawer('right')">
                        <n-icon :component="SettingsOutline" style="cursor: pointer;"></n-icon>
                    </n-button>
                </template>
                <span>面板設置</span>
            </n-popover>
            <n-dropdown trigger="hover" :options="userDropdownOptions">
                <n-button quaternary size="large" class="avatar-container">
                    <n-avatar round size="large" src="https://cdn.pixabay.com/photo/2011/03/21/10/45/pig-5652_1280.jpg"
                        style="cursor: pointer;"></n-avatar>
                    <div class="text-container">
                        <n-performant-ellipsis style="max-width: 90px">
                            <div class="text-top">Zark</div>
                        </n-performant-ellipsis>
                        <div class="text-bottom">超级會員</div>
                    </div>
                </n-button>
            </n-dropdown>
        </n-space>
    </n-space>
    <n-drawer v-model:show="themeSwitcherDrawer" :placement="placement" :default-width="251" resizable>
        <n-drawer-content title="面板配置">
            <ThemeSwitcher />
        </n-drawer-content>
    </n-drawer>
</template>

<script lang="ts">
import { SettingsOutline, ChatbubbleEllipsesOutline } from '@vicons/ionicons5'
import { defineComponent, ref, h, Component } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { useScreenStore } from '@/stores/useScreen';
import { storeToRefs } from 'pinia';
import { NAvatar, NText, NIcon, useMessage, type DrawerPlacement } from 'naive-ui'
import ThemeSwitcher from './ThemeSwitcher.vue';
import { useRouter } from 'vue-router';
import { menuOptions } from './Options/Menu'
import {
    PersonCircleOutline as UserIcon,
    LogOutOutline as LogoutIcon,
    MenuOutline
} from '@vicons/ionicons5'

// UserDropdown圖標函樹
const renderIcon = (icon: Component, color?: string) => {
    return () => {
        return h(NIcon, { size: '24', color }, { default: () => h(icon) });
    };
};

// 內容渲染 - 用戶基本資料
function renderCustomHeader() {
    return h(
        'div',
        {
            style: 'display: flex; align-items: center; padding: 8px 12px;'
        },
        [
            h(NAvatar, {
                round: true,
                style: 'margin-right: 12px;',
                src: 'https://cdn.pixabay.com/photo/2011/03/21/10/45/pig-5652_1280.jpg'
            }),
            h('div', null, [
                h('div', null, [h(NText, { depth: 2 }, { default: () => 'zark2345' })]),
                h('div', { style: 'font-size: 12px;' }, [
                    h(
                        NText,
                        { depth: 3 },
                        { default: () => 'zark@gmail.com' }
                    )
                ])
            ])
        ]
    )
}

export default defineComponent({
    components: {
        ThemeSwitcher
    },
    setup() {
        // Router
        const router = useRouter();
        // 顶部消息
        const message = useMessage()

        // 基础的手机端适配
        const screenStore = useScreenStore();
        const { isHidden } = storeToRefs(screenStore);

        const themeSwitcherDrawer = ref(false)
        const placement = ref<DrawerPlacement>('right')
        const themeStore = useThemeStore();
        const ThemeSwitcherDrawer = (place: DrawerPlacement) => {
            themeSwitcherDrawer.value = true
            placement.value = place
        }
        return {
            themeStore,
            SettingsOutline,
            ChatbubbleEllipsesOutline,
            placement,
            // 抽屉
            themeSwitcherDrawer,
            ThemeSwitcherDrawer,
            isHidden,
            MenuOutline,
            menuOptions,
            userDropdownOptions: [
                {
                    key: 'header',
                    type: 'render',
                    render: renderCustomHeader
                },
                {
                    label: '用戶資料',
                    key: 'profile',
                    icon: renderIcon(UserIcon),
                    props: {
                        onClick: () => {
                            router.push('/user');
                        }
                    }
                },
                {
                    label: '退出登入',
                    key: 'logout',
                    icon: renderIcon(LogoutIcon, '#f5222d'),
                    props: {
                        onClick: () => {
                            message.info('還沒做這個東西，這只是模組。');
                        },
                    },
                },
            ],
        };
    }
})
</script>

<style>
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

.text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
}

.text-top,
.text-bottom {
    font-size: 12px;
    text-align: left;
}

.text-top {
    font-weight: bold;
}

.text-bottom {
    color: #999;
}
</style>
