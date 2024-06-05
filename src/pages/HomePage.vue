<template>
    <n-back-top :right="100" />
    <n-flex vertical>
        <n-card>
            <n-space justify="space-between">
                <div style="display: flex; align-items: center;">
                    <n-avatar :size="72" round :style="{ display: isHidden ? 'none' : 'flex' }"
                        src="https://cdn.pixabay.com/photo/2011/03/21/10/45/pig-5652_1280.jpg" />
                    <div :style="textStyle">
                        <h3 style="margin: 0;">{{ greeting }}</h3>
                        <p style="margin: 0; margin-top: 4px;">{{ apiText }}</p>
                    </div>
                </div>
                <n-space justify="end" style="margin-top: 15px;">
                    <n-button type="primary" strong secondary>簽到</n-button>
                    <n-popover trigger="hover">
                        <template #trigger>
                            <n-button strong secondary>簽到確認</n-button>
                        </template>
                        <n-thing title="統計訊息" content-style="margin-top: 10px;">
                            上次簽到時間：2024-05-24<br>
                            累計簽到積分：20842<br>
                            累計簽到時數：121<br>
                            今日簽到人數：2
                        </n-thing>
                    </n-popover>
                </n-space>
            </n-space>
        </n-card>
        <n-grid style="margin-top: 15px" cols="1 s:2 m:4" responsive="screen" :x-gap="15" :y-gap="20">
            <n-gi v-for="(card, index) in cards" :key="index">
                <n-card :style="cardStyle" :title="card.title" size="small">
                    <n-flex justify="space-between" align="center">
                        <n-icon size="32">
                            <component :is="card.icon" />
                        </n-icon>
                        <n-statistic tabular-nums>
                            <n-number-animation :from="0" :to="card.value" :precision="card.precision" />
                            <template v-if="card.suffix" #suffix>
                                {{ card.suffix }}
                            </template>
                        </n-statistic>
                    </n-flex>
                </n-card>
            </n-gi>
        </n-grid>
        <n-grid style="margin-top: 15px" cols="1 s:5" responsive="screen" :x-gap="15" :y-gap="20">
            <n-gi :span="3">
                <n-card>
                    <div id="main" style="width: 100%; height: 400px;"></div>
                </n-card>
                <n-card style="margin-top: 15px">
                    <n-result status="success" title="這是一個後臺模組" description="Test">
                    </n-result>
                </n-card>
            </n-gi>
            <n-gi :span="2">
                <n-card title="常見問題">
                    <n-alert title="您的帳戶已被禁止操作。" type="error">
                        不明原因，你被停止觀看所有內容。
                    </n-alert>
                    <n-alert title="您尚未填寫個人資訊。" style="margin-top: 10px" type="warning" @click="goToUserPage">
                        若無填寫個人資訊，將無法進一步操作網頁內容。
                    </n-alert>
                    <n-alert title="提示" type="info" style="margin-top: 10px">
                        如果這裡沒有您想了解的，可以前往<n-button text tag="a" href="#" target="_blank" type="primary">
                            長佳智能官網
                        </n-button>或洽詢工程師
                    </n-alert>
                    <n-collapse style="margin-top: 20px;">
                        <n-collapse-item title="注意事項" name="1">
                            <div>這是一個後臺模組這是一個後臺模組，這是一個後臺模組這是一個後臺模組這是一個後臺模組，這是一個後臺模組。</div>
                        </n-collapse-item>
                        <n-collapse-item title="關於實名" name="2">
                            <div>允許未成年認證，但是請不要使用非本人身份證。</div>
                        </n-collapse-item>
                        <n-collapse-item title="延遲問題" name="3">
                            <div>節點請選擇離你(開服者)最近的節點。您可以根據節點狀態頁中的節點負載選擇負載較低的節點，這能夠優化您的體驗。
                                伺服器卡頓不一定為映射的原因。這裡使用mc伺服器舉例，您可以通過查看伺服器TPS或MSPT查看是否為伺服器硬件負載過高。若MSPT或TPS在正常範圍內，但伺服器延遲依舊很高，您可以考慮購買會員獲得更高的頻寬。
                            </div>
                        </n-collapse-item>
                        <n-collapse-item title="資訊安全" name="4">
                            <div>這是一個後臺模組這是一個後臺模組這是一個後臺模組這是一個後臺模組，這是一個後臺模組這是一個後臺模組這是一個後臺模組，這是一個後臺模組這是一個後臺模組這是一個後臺模組
                                這是一個後臺模組這是一個後臺模組，這是一個後臺模組這是一個後臺模組這是一個後臺模組。
                            </div>
                        </n-collapse-item>
                        <n-collapse-item title="禁止內容" name="5">
                            <div>不能使用映射搭建關於賭博, 黃色, 血腥, 暴力, 爆破, 發包, 代刷網, 發卡網等違反中國法律的站點或服務
                                一旦發現，我們有權強行停止您的映射服務。並且上報給公安機關。</div>
                        </n-collapse-item>
                        <n-collapse-item title="友鏈申請" name="6">
                            <div>這是一個後臺模組這是一個後臺模組這是一個後臺模組這是一個後臺模組，這是一個後臺模組這是一個後臺模組這是一個後臺模組這是一個後臺模組，
                                這是一個後臺模組這是一個後臺模組這是一個後臺模組，這是一個後臺模組這是一個後臺模組這是一個後臺模組。</div>
                        </n-collapse-item>
                    </n-collapse>
                </n-card>
            </n-gi>
        </n-grid>
    </n-flex>
</template>

<script lang="ts" setup>
import { computed, onMounted, watch, ref } from 'vue';
import { useScreenStore } from '@/stores/useScreen';
import { storeToRefs } from 'pinia';
import { useThemeVars } from 'naive-ui';
import * as echarts from 'echarts';
import { LinkOutline, ServerOutline, ArrowUpCircleOutline, ArrowDownCircleOutline } from '@vicons/ionicons5';
import axios from 'axios';
// 可以根據主題自適應不同顏色
import { useStyleStore } from '@/stores/style';
import { useRouter } from 'vue-router';

const styleStore = useStyleStore();
const cardStyle = computed(() => styleStore.getCardStyle());

const router = useRouter();
const goToUserPage = () => {
    router.push('/user')
}

const cards = [
    { title: '連接數', value: 214, icon: LinkOutline, precision: 0 },
    { title: '總上傳', value: 12.43, icon: ArrowUpCircleOutline, precision: 2, suffix: 'TiB' },
    { title: '總下載', value: 31.79, icon: ArrowDownCircleOutline, precision: 2, suffix: 'TiB' },
    { title: '積分數', value: 241248, icon: ServerOutline, precision: 0 },
]

const screenStore = useScreenStore();
const { isHidden, screenWidth } = storeToRefs(screenStore);

const textStyle = computed(() => ({
    marginLeft: screenWidth.value >= 600 ? '16px' : '0',
    textAlign: 'left' as const
}));

// 根據設置的時間去設定不同歡迎文字
const currentTime = ref(new Date());

setInterval(() => {
    currentTime.value = new Date();
}, 1000);

const greeting = computed(() => {
    const hour = currentTime.value.getHours();
    if (hour >= 0 && hour < 6) {
        return "夜深了，zark，夜晚依然靜謐，但新的希望已經開始萌芽。";
    }
    else if (hour >= 6 && hour < 11) {
        return "早上好，zark，今天又是充滿活力的一天。";
    }
    else if (hour >= 11 && hour < 14) {
        return "中午好，zark，享受這溫暖的陽光和美味的午餐吧。";
    }
    else if (hour >= 14 && hour < 15) {
        return "休息一下，zark，做那麼多都沒用的，老闆不會喜歡你的，喝個茶吧";
    }
    else if (hour >= 15 && hour < 17) {
        return "下午好，zark，午後的時光總是最適合專注與思考。";
    }
    else if (hour >= 17 && hour < 22) {
        return "晚上好，zark，夜幕降臨，是時候享受片刻寧靜了。";
    }
    else {
        return "少熬夜，zark，願你有一個寧靜而甜美的夢境。";
    }
});

// 一言
const apiText = ref('');
onMounted(async () => {
    try {
        const response = await axios.get('https://v0.elegant.tw');
        apiText.value = response.data.sentence;
        // console.log(apiText.value)
    } catch (error) {
        console.error('API獲取資料失敗', error);
    }
});

// ECharts
const themeVars = useThemeVars();

const updateChart = () => {
    const chartDom = document.getElementById('main');
    if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option: echarts.EChartsOption = {
            title: {
                text: '流量統計',
                textStyle: {
                    color: themeVars.value.textColorBase
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: themeVars.value.textColorBase
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    color: themeVars.value.textColorBase
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} M',
                    color: themeVars.value.textColorBase
                }
            },
            series: [
                {
                    name: '上傳',
                    type: 'line',
                    data: [0, 11, 19, 0, 21, 12, 9],
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                },
                {
                    name: '下載',
                    type: 'line',
                    data: [0, 14, 19, 2, 21, 12, 9],
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                }
            ]
        };
        myChart.setOption(option);
    } else {
        console.error('Element with id "main" not found.');
    }
};

onMounted(() => {
    updateChart();
});

watch(themeVars, () => {
    updateChart();
}, { deep: true });
</script>