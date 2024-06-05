<template>
    <n-back-top :right="100" />
    <n-card title="統計信息">
        <n-grid cols="2 m:5 xl:7" responsive="screen">
            <n-grid-item>
                <n-statistic label="當前總在線隧道" tabular-nums>
                    <template #prefix>
                        <n-icon :component="BarcodeOutline" />
                    </template>
                    <n-number-animation :from="0" show-separator :to="42124" />
                </n-statistic>
            </n-grid-item>
            <n-grid-item>
                <n-statistic label="當前總連接數" tabular-nums>
                    <template #prefix>
                        <n-icon :component="LinkOutline" />
                    </template>
                    <n-number-animation :from="0" show-separator :to="1203924" />
                </n-statistic>
            </n-grid-item>
            <n-grid-item span="2 s:1">
                <n-statistic label="今日上傳總流量" tabular-nums>
                    <template #prefix>
                        <n-icon :component="ArrowUpOutline" />
                    </template>
                    <n-number-animation :from="0" :to="120.39" :precision="2" />
                    <template #suffix>
                        TiB
                    </template>
                </n-statistic>
            </n-grid-item>
            <n-grid-item span="2 s:1">
                <n-statistic label="今日下載總流量" tabular-nums>
                    <template #prefix>
                        <n-icon :component="ArrowDownOutline" />
                    </template>
                    <n-number-animation :from="0" :to="421.26" :precision="2" />
                    <template #suffix>
                        TiB
                    </template>
                </n-statistic>
            </n-grid-item>
            <n-grid-item span="2 s:1">
                <n-statistic label="數據更新時間" tabular-nums>
                    2024-6-2 18:56
                </n-statistic>
            </n-grid-item>
        </n-grid>
    </n-card>
    <n-grid cols="1 m:3 l:4 xl:5 2xl:6" style="margin-top: 20px;" :x-gap="12" :y-gap="12" responsive="screen">
        <n-grid-item v-for="(nodeStatusCard, index) in nodeStatusCards" :key="index">
            <n-card size="small">
                <template #header>
                    {{ nodeStatusCard.title }}
                    <span style="color: gray; font-size: 14px;">{{ nodeStatusCard.id }}</span>
                </template>
                <template #header-extra>
                    <n-flex>
                        <n-tag round :bordered="false" type="warning" v-if="nodeStatusCard.group === 'vip'">
                            VIP
                        </n-tag>
                        <n-tag round :bordered="false" v-if="nodeStatusCard.state === false">
                            離線
                        </n-tag>
                    </n-flex>
                </template>
                <n-flex justify="space-around" size="large" align="center">
                    <n-progress type="circle" :percentage="nodeStatusCard.bandwidthOccupation"
                        :color="progressColor(nodeStatusCard.bandwidthOccupation)" />
                    <n-descriptions label-placement="left" :column="1">
                        <n-descriptions-item label="上傳">
                            {{ nodeStatusCard.uploadTraffic }}
                        </n-descriptions-item>
                        <n-descriptions-item label="下載">
                            {{ nodeStatusCard.downloadTraffic }}
                        </n-descriptions-item>
                        <n-descriptions-item label="連接數">
                            {{ nodeStatusCard.numberOfConnections }}
                        </n-descriptions-item>
                        <n-descriptions-item label="CPU占用">
                            {{ nodeStatusCard.CPU }}
                        </n-descriptions-item>
                    </n-descriptions>
                </n-flex>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { LinkOutline, BarcodeOutline, ArrowUpOutline, ArrowDownOutline } from '@vicons/ionicons5'

const nodeStatusCards = ref([
    {
        id: '#1',
        title: '測試1',
        group: 'vip',
        uploadTraffic: 12.21,
        downloadTraffic: 24.12,
        numberOfConnections: 1244,
        CPU: '24%',
        bandwidthOccupation: 20,
        state: false
    },
    {
        id: '#2',
        title: '測試2',
        group: 'user',
        uploadTraffic: 12.21,
        downloadTraffic: 24.12,
        numberOfConnections: 1244,
        CPU: '24%',
        bandwidthOccupation: 32,
        state: true
    },
    {
        id: '#3',
        title: '測試3',
        group: 'user',
        uploadTraffic: 12.21,
        downloadTraffic: 24.12,
        numberOfConnections: 1244,
        CPU: '24%',
        bandwidthOccupation: 52,
        state: true
    },
    {
        id: '#4',
        title: '測試4',
        group: 'vip',
        uploadTraffic: 12.21,
        downloadTraffic: 24.12,
        numberOfConnections: 1244,
        CPU: '24%',
        bandwidthOccupation: 86,
        state: true
    },
    {
        id: '#5',
        title: '測試5',
        group: 'user',
        uploadTraffic: 12.21,
        downloadTraffic: 24.12,
        numberOfConnections: 1244,
        CPU: '152%',
        bandwidthOccupation: 2512,
        state: true
    },
])


// 根據節點調整進度條顏色
const progressColor = (bandwidthOccupation: number) => {
    if (bandwidthOccupation >= 0 && bandwidthOccupation < 25) {
        return '#18a058'
    } else if (bandwidthOccupation >= 25 && bandwidthOccupation < 50) {
        return '#2080f0'
    } else if (bandwidthOccupation >= 50 && bandwidthOccupation < 75) {
        return '#faad14'
    } else if (bandwidthOccupation >= 75 && bandwidthOccupation < 100) {
        return '#fa541c'
    } else {
        return '#f5222d'
    }
}

</script>