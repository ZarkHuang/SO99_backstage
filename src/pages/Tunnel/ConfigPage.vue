<template>
    <n-back-top :right="100" />
    <n-card title="配置文件">
        <n-grid :x-gap="12" :y-gap="12" cols="9" item-responsive responsive="screen">
            <n-grid-item span="10 m:2">
                <n-select v-model:value="nodeValue" :options="nodeOptions" placeholder="請選擇選項" />
            </n-grid-item>
            <n-grid-item span="10 m:5">
                <n-select placeholder="請選擇，不選就全選" v-model:value="multipleSelectValue" filterable multiple tag
                    :options="tunnelOptions" />
            </n-grid-item>
            <n-grid-item span="10 m:2">
                <n-flex justify="end">
                    <n-button type="primary">
                        生成
                    </n-button>
                    <n-button type="primary" @click="copyToClipboard">
                        複製
                    </n-button>
                </n-flex>
            </n-grid-item>
        </n-grid>
        <template #footer>
            <n-card>
                <n-code :code="tunnelConfig" language="ini" word-wrap />
            </n-card>
        </template>
    </n-card>
    <n-grid style="margin-top: 20px;" cols="1 s:5" responsive="screen" :x-gap="20" :y-gap="20">
        <n-grid-item :span="3">
            <n-card title="使用說明">
                <template #header-extra>
                    <n-button text tag="a" href="#" target="_blank" type="primary">
                        更多說明
                    </n-button>
                </template>
                <n-h4>這是個模組</n-h4>
                <n-p>
                    這是個模組：
                   
                </n-p>
                <n-h4>這是個模組</n-h4>
                <n-p>
                    這是個模組這是個模組這是個模組，這是個模組這是個模組這是個模組，這是個模組這是個模組這是個模組這是個模組這是個模組這是個模組。
                </n-p>
            </n-card>
        </n-grid-item>
        <n-grid-item :span="2">
            <n-card title="使用步驟">
                <template #header-extra>
                    <n-button text tag="a" href="#" target="_blank" type="primary">
                        操作步驟
                    </n-button>
                </template>
                <n-steps vertical :current="3">
                    <n-step title="步骤1" description="這是個模組這是個模組" />
                    <n-step title="步骤2" description="這是個模組這是個模組這是個模組這是個模組這是個模組" />
                    <n-step title="步骤3" description="這是個模組這是個模組這是個模組這是個模組這是個模組這是個模組這是個模組" />
                    <n-step title="步骤4" description="這是個模組這是個模組" />
                    <n-step title="步骤4" description="這是個模組這是個模組這是個模組這是個模組" />
                </n-steps>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useMessage } from 'naive-ui';

const message = useMessage()

const copyToClipboard = () => {
    navigator.clipboard.writeText(tunnelConfig).then(() => {
        message.success('配置文件複製成功')
    }).catch(err => {
        console.error('複製配置文件失败:', err);
        message.error('配置文件複製失败')
    });
};

const nodeValue = ref(null)
const multipleSelectValue = ref(null)
const nodeOptions = [
    {
        label: '測試1',
        value: 'song2'
    },
    {
        label: '測試2',
        value: 'song3'
    }
]

const tunnelOptions = [
    {
        label: '測試標籤哈哈',
        value: 'song2'
    },
    {
        label: '測試標籤笑哈哈',
        value: 'song3'
    }
]

const tunnelConfig = `
[common]
一山還有一山高

蘿蔔還有蘿蔔糕

醬油還有醬油膏

雞蛋還有雞蛋糕
`

</script>