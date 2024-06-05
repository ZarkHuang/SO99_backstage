<template>
    <n-back-top :right="100" />
    <n-flex vertical>
        <n-grid cols="1 s:5" responsive="screen" :x-gap="15" :y-gap="20">
            <n-gi :span="2">
                <n-card title="實名認證" style="margin-bottom: 15px">
                    <n-form ref="realNameFormRef" :model="realNameModel" :rules="realNameRules" label-placement="left"
                        label-width="auto">
                        <n-form-item path="name" label="姓名" :show-require-mark="true">
                            <n-input v-model:value="realNameModel.name" round />
                        </n-form-item>
                        <n-form-item path="idCard" label="身份证" :show-require-mark="true">
                            <n-input v-model:value="realNameModel.idCard" round />
                        </n-form-item>
                        <n-row :gutter="[0, 24]">
                            <n-col :span="24">
                                <div style="display: flex; justify-content: flex-end">
                                    <n-button :disabled="realNameModel.name === null || realNameModel.idCard === null"
                                        round type="primary" @click="realNameHandleValidateButtonClick">
                                        驗證
                                    </n-button>
                                </div>
                            </n-col>
                        </n-row>
                    </n-form>
                </n-card>
                <n-card title="使用兌換碼">
                    <n-form ref="exchangeCodeFormRef" :model="exchangeCodeModel" :rules="exchangeCodeRules"
                        label-placement="left" label-width="auto">
                        <n-form-item path="exchangeCode" label="兌換碼" :show-require-mark="true">
                            <n-input v-model:value="exchangeCodeModel.exchangeCode" round />
                        </n-form-item>
                        <n-row :gutter="[0, 24]">
                            <n-col :span="24">
                                <div style="display: flex; justify-content: flex-end">
                                    <n-button :disabled="exchangeCodeModel.exchangeCode === null" round type="primary"
                                        @click="exchangeCodeHandleValidateButtonClick">
                                        驗證
                                    </n-button>
                                </div>
                            </n-col>
                        </n-row>
                    </n-form>
                </n-card>
                <n-card style="display: flex; justify-content: center; margin-top: 15px ">
                    <n-space justify="center">
                        <div
                            style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
                            <n-avatar :size="72" round
                                src="https://cdn.pixabay.com/photo/2011/03/21/10/45/pig-5652_1280.jpg" />
                            <div style="text-align: center;">
                                <h3 style="margin: 0;">Hi，chaoji
                                    <span style="color: gray; font-size: 14px;">#1</span>
                                </h3>
                                <p style="margin: 0; margin-top: 4px;">admin123@gmail.com</p>
                            </div>
                        </div>
                    </n-space>
                    <n-card :style="cardStyle" style="margin-top: 15px; text-align: center;">
                        <n-descriptions label-placement="top" :column="3" label-align="center" size="large">
                            <n-descriptions-item label="註冊時間">
                                2077-5-30
                            </n-descriptions-item>
                            <n-descriptions-item label="電話">
                                0972******
                            </n-descriptions-item>
                            <n-descriptions-item label="權限">
                                小豬園園長
                            </n-descriptions-item>
                            <n-descriptions-item label="到期時間">
                                9999-9-9
                            </n-descriptions-item>
                            <n-descriptions-item label="驗證狀態">
                                已驗證
                            </n-descriptions-item>
                            <n-descriptions-item label="剩餘積分">
                                241248
                            </n-descriptions-item>
                        </n-descriptions>
                    </n-card>
                    <div style="display: flex; justify-content: center;">
                        <n-tag v-if="!showNewContent" round :bordered="false" type="primary" style="margin-top: 15px;"
                            @click="toggleContent">
                            點擊顯示Token
                            <template #icon>
                                <n-icon :component="KeyOutline" />
                            </template>
                        </n-tag>
                        <n-tag round v-if="showNewContent" @click="toggleContent" :bordered="false" type="primary"
                            style="margin-top: 15px;">
                            西醫治標，中醫治本，中西合璧，治成標本
                        </n-tag>
                    </div>
                </n-card>
            </n-gi>
            <n-gi :span="3">
                <n-card title="消息">
                    <n-alert title="您的帳戶已被封閉" type="error">
                        這是一個後臺模組這是一個後臺模組，這是一個後臺模組這是一個後臺模組這是一個後臺模組，這是一個後臺模組。
                    </n-alert>
                    <n-alert title="您的會員即將到期" type="info" style="margin-top: 10px">
                        這是一個後臺模組這是一個後臺模組，這是一個後臺模組這是一個後臺模組這是一個後臺模組，這是一個後臺模組。
                    </n-alert>
                    <n-alert title="離線通知" type="warning" style="margin-top: 10px">
                        這是一個後臺模組這是一個後臺模組，這是一個後臺模組這是一個後臺模組這是一個後臺模組，這是一個後臺模組。
                    </n-alert>
                </n-card>
                <n-card title="帳戶設置" style="margin-top: 15px">
                    <template #header-extra>
                        <n-button quaternary type="primary" round>
                            簽到
                        </n-button>
                        <n-popover trigger="hover">
                            <template #trigger>
                                <n-button quaternary round>簽到確認</n-button>
                            </template>
                        <n-thing title="統計訊息" content-style="margin-top: 10px;">
                            上次簽到時間：2024-05-24<br>
                            累計簽到積分：20842<br>
                            累計簽到時數：121<br>
                            今日簽到人數：2
                        </n-thing>
                        </n-popover>
                    </template>
                    <n-grid cols="1 l:2" responsive="screen" :x-gap="5" :y-gap="5">
                        <n-gi>
                            <n-card hoverable size="small" :bordered="false">
                                <n-space justify="space-between" align="center">
                                    <div style="display: flex; align-items: center;">
                                        <n-icon size="28" :component="KeyOutline" />
                                        <div style="margin-left: 15px;">
                                            <p style="margin: 0; font-size: 15px">重置Token</p>
                                            <p style="margin: 0; font-size: 12px">這是一個後臺模組這是一個後臺模組</p>
                                        </div>
                                    </div>
                                </n-space>
                            </n-card>
                        </n-gi>
                        <n-gi>
                            <n-card hoverable size="small" :bordered="false">
                                <n-space justify="space-between" align="center">
                                    <div style="display: flex; align-items: center;">
                                        <n-icon size="28" :component="PersonOutline" />
                                        <div style="margin-left: 15px">
                                            <p style="margin: 0; font-size: 15px">修改用戶名</p>
                                            <p style="margin: 0; font-size: 12px">這是一個後臺模組這是一個後臺模組</p>
                                        </div>
                                    </div>
                                </n-space>
                            </n-card>
                        </n-gi>
                        <n-gi>
                            <n-card hoverable size="small" :bordered="false">
                                <n-space justify="space-between" align="center">
                                    <div style="display: flex; align-items: center;">
                                        <n-icon size="28" :component="ImageOutline" />
                                        <div style="margin-left: 15px">
                                            <p style="margin: 0; font-size: 15px">更改頭像</p>
                                            <p style="margin: 0; font-size: 12px">這是一個後臺模組這是一個後臺模</p>
                                        </div>
                                    </div>
                                </n-space>
                            </n-card>
                        </n-gi>
                        <n-gi>
                            <n-card hoverable size="small" :bordered="false">
                                <n-space justify="space-between" align="center">
                                    <div style="display: flex; align-items: center;">
                                        <n-icon size="28" :component="LockClosedOutline" />
                                        <div style="margin-left: 15px">
                                            <p style="margin: 0; font-size: 15px">修改密碼</p>
                                            <p style="margin: 0; font-size: 12px">這是一個後臺模組這是一個後臺模組</p>
                                        </div>
                                    </div>
                                </n-space>
                            </n-card>
                        </n-gi>
                        <n-gi>
                            <n-card hoverable size="small" :bordered="false">
                                <n-space justify="space-between" align="center">
                                    <div style="display: flex; align-items: center;">
                                        <n-icon size="28" :component="MailOutline" />
                                        <div style="margin-left: 15px">
                                            <p style="margin: 0; font-size: 15px">更換信箱</p>
                                            <p style="margin: 0; font-size: 12px">這是一個後臺模組這是一個後臺模組</p>
                                        </div>
                                    </div>
                                </n-space>
                            </n-card>
                        </n-gi>
                    </n-grid>
                </n-card>
            </n-gi>
        </n-grid>
    </n-flex>
</template>

<script setup lang="ts">
import { KeyOutline, PersonOutline, ImageOutline, MailOutline, LockClosedOutline } from '@vicons/ionicons5'
import { ref, computed } from 'vue';
import { NTag, NIcon, FormInst, useMessage, FormRules } from 'naive-ui';
import { useStyleStore } from '@/stores/style';

const styleStore = useStyleStore();
const cardStyle = computed(() => styleStore.getCardStyle());

// 驗證清單
interface RealNameModelType {
    name: string | null;
    idCard: string | null;
}

const realNameFormRef = ref<FormInst | null>(null);
const message = useMessage();
const realNameModel = ref<RealNameModelType>({
    name: null,
    idCard: null,
});

const realNameRules: FormRules = {
    name: [
        {
            required: true,
            message: '請輸入真實姓名',
        },
    ],
    idCard: [
        {
            required: true,
            message: '請輸入身分證字號',
        },
    ],
};

const realNameHandleValidateButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    realNameFormRef.value?.validate((errors) => {
        if (!errors) {
            message.success('身分驗證成功');
        } else {
            console.error(errors);
            message.error('身分驗證失敗');
        }
    });
};

// 兑换码表单
interface ExchangeCodeType {
    exchangeCode: string | null;
}

const exchangeCodeFormRef = ref<FormInst | null>(null);
const exchangeCodeModel = ref<ExchangeCodeType>({
    exchangeCode: null,
});

const exchangeCodeRules: FormRules = {
    exchangeCode: [
        {
            required: true,
            message: '請輸入兌換碼',
        },
    ],
};

const exchangeCodeHandleValidateButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    exchangeCodeFormRef.value?.validate((errors) => {
        if (!errors) {
            message.success('兌換成功：SSR魔關羽 * 1，已發送至大廳信箱');
        } else {
            console.error(errors);
            message.error('兌換失敗');
        }
    });
};

// 顯示token
const showNewContent = ref(false);

const toggleContent = () => {
    showNewContent.value = !showNewContent.value;
};
</script>