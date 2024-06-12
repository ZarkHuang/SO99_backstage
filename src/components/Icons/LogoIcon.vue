<template>
  <svg :class="svgClass" :style="svgStyle" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { defineProps } from "vue";

// 定義組件的 props
const props = defineProps<{
  icon: string;
  className?: string;
  size?: string;
}>();

// 計算 iconName 和 svgClass
const iconName = computed(() => `#icon-${props.icon}`);
const svgClass = computed(() => `svg-icon ${props.className || ""}`);
const svgStyle = computed(() => ({
  width: props.size || "1em",
  height: props.size || "1em",
}));
</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
