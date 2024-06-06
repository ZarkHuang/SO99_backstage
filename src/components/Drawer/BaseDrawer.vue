<!-- src/components/Drawer/BaseDrawer.vue -->
<template>
    <n-drawer :show="show" @update:show="updateShow" :placement="placement" :width="width" style="padding:16px">
        <n-space vertical>
            <!-- 標題和按鈕 -->
            <div class="drawer-header">
                <n-icon class="close-icon" @click="closeDrawer">
                    <SvgIcon icon="Close" />
                </n-icon>
                <span class="drawer-title">{{ title }}</span>
                <n-space>
                    <n-button ghost type="primary" @click="closeDrawer">取消</n-button>
                    <n-button type="primary" @click="handleSave">新增</n-button>
                </n-space>
            </div>
            <n-divider />
            <!-- 表單內容 -->
            <slot />
        </n-space>
    </n-drawer>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

const props = defineProps({
    show: Boolean,
    title: String,
    placement: String,
    width: String,
});

const emit = defineEmits(['update:show', 'save', 'close']);

const closeDrawer = () => {
    emit('update:show', false);
    emit('close');
};

const handleSave = () => {
    emit('save');
};

const updateShow = (value: boolean) => {
    emit('update:show', value);
};
</script>

<style scoped>
.drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.close-icon {
    cursor: pointer;
}

.drawer-title {
    font-weight: bold;
    margin-left: 8px;
    flex-grow: 1;
}

.n-divider:not(.n-divider--vertical) {
    margin-top: 12px;
    margin-bottom: 12px;
}
</style>