<template>
    <n-space vertical size="large">
        <!-- 選擇和搜尋區 -->
        <n-space align="center">
            <n-select v-model="selectedOption1" :options="options1" placeholder="機構選擇" style="width: 216px;"></n-select>
            <n-select v-model="selectedOption2" :options="options2" placeholder="企業選擇" style="width: 216px;"></n-select>
            <n-date-picker v-model="selectedDate" type="date" placeholder="請選擇開始到結束日期"
                style="width: 265px;"></n-date-picker>
            <n-button type="primary" @click="handleSearch">搜尋</n-button>
        </n-space>

        <!-- 圓餅圖區 -->
        <n-grid cols="1 s:2 m:3" responsive="screen" >
            <n-gi v-for="(chart, index) in charts" :key="index">
                    <div :id="'chart-' + index" style="width: 100%; height: 320px;"></div>
                    <!-- 顏色區分標籤 -->
                    <n-space align="center" justify="center" style="margin-top: 10px;">
                        <div v-for="(legend, i) in legends" :key="i" class="legend-item">
                            <div :style="{ backgroundColor: legend.color }" class="legend-color"></div>
                            <span>{{ legend.name }}</span>
                        </div>
                    </n-space>
            </n-gi>
        </n-grid>
    </n-space>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useThemeVars } from 'naive-ui';
import * as echarts from 'echarts';

// 選擇和日期
const selectedOption1 = ref(null);
const selectedOption2 = ref(null);
const selectedDate = ref(null);

// 選項
const options1 = ref([
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' }
]);

const options2 = ref([
    { label: 'Option A', value: 'optionA' },
    { label: 'Option B', value: 'optionB' }
]);

// 搜尋按鈕處理
const handleSearch = () => {
    console.log('Search clicked!', selectedOption1.value, selectedOption2.value, selectedDate.value);
    updateCharts();
};

// 圓餅圖配置
const charts = ref([
    { title: 'Chart 1' },
    { title: 'Chart 2' },
    { title: 'Chart 3' },
    { title: 'Chart 4' },
    { title: 'Chart 5' },
    { title: 'Chart 6' }
]);

const legends = [
    { name: 'Search Engine', color: '#AFAFAF' },
    { name: 'Direct', color: '#D9C40B' },
    { name: 'Email', color: '#19D7B4' },
    { name: 'Union Ads', color: '#1398CC' },
    { name: 'Video Ads', color: '#EB9A20' }
];

// 主題變數
const themeVars = useThemeVars();

// 更新圖表
const updateCharts = () => {
  charts.value.forEach((chart, index) => {
    const chartDom = document.getElementById('chart-' + index);
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          show: false
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '70%', // 調整圓餅大小
            data: legends.map(legend => ({
              value: Math.floor(Math.random() * 1000), // 隨機值或真實數據
              name: legend.name,
              itemStyle: { color: legend.color } // 設置顏色
            })),
            label: {
              formatter: '{d}%',
              color: themeVars.value.textColorBase,
              position: 'inside'
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 2
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  });
};



onMounted(() => {
    updateCharts();
});

watch(themeVars, () => {
    updateCharts();
}, { deep: true });
</script>

<style scoped>
.legend-item {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.legend-color {
    width: 12px;
    height: 12px;
    margin-right: 6px;
}
</style>