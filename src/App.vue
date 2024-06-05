<template>
  <n-config-provider :hljs="hljs" :theme="computedTheme" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <ViewComponent />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { defineComponent, h, computed } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { RouterView } from 'vue-router';
import { useProviderStore } from './stores/provider';
import { NLoadingBarProvider, useLoadingBar, lightTheme, darkTheme, NMessageProvider } from 'naive-ui';
import hljs from 'highlight.js/lib/core'
import ini from 'highlight.js/lib/languages/ini'
import nginx from 'highlight.js/lib/languages/nginx'

hljs.registerLanguage('ini', ini)
hljs.registerLanguage('nginx', nginx)

// 當前年份時間
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// 控制台输出
const chmlFrpPanel =
  `
 .--,       .--,
 ( (   .---./  ) )
  '.__/o   o__.'
     {=  ^  =}
      >  -  <
     /       \
    //       \\
   //|   .   |\\____/ so99 開案!
`
  ;
console.info(chmlFrpPanel);
const themeStore = useThemeStore();

const computedTheme = computed(() => {
  return themeStore.theme === 'dark' ? darkTheme : lightTheme;
});

const themeOverrides = computed(() => {
  const commonColors = {
    primaryColor: themeStore.primaryColor,
    primaryColorHover: themeStore.primaryColor,
    primaryColorPressed: themeStore.primaryColor,
    primaryColorSuppl: themeStore.primaryColor,
  };

  const lightThemeOverrides = {
    bodyColor: '#f5f5f5', // 更改亮色主题下的背景颜色
  };

  return {
    common: {
      ...commonColors,
      ...(themeStore.theme === 'light' ? lightThemeOverrides : {}),
    },
    Button: {
      // 调整Primary按钮，让它看起来更合适
      textColorPrimary: '#fff',
      textColorHoverPrimary: '#fff',
      textColorPressedPrimary: '#fff',
      textColorFocusPrimary: '#fff',
      textColorDisabledPrimary: '#fff',
      colorPrimary: themeStore.primaryColor,
      colorHoverPrimary: themeStore.primaryColor,
      colorPressedPrimary: themeStore.primaryColor,
      colorFocusPrimary: themeStore.primaryColor,
      colorDisabledPrimary: themeStore.primaryColor,
    },
  };
});

const provider = useProviderStore();

const ViewComponent = defineComponent({
  render: () => h(RouterView),
  setup() {
    provider.setLoadingBar(useLoadingBar());
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
