<template>
  <n-config-provider :hljs="hljs" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <ViewComponent />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { defineComponent, h, computed } from 'vue';
import { RouterView } from 'vue-router';
import { useProviderStore } from './stores/provider';
import { NLoadingBarProvider, useLoadingBar, NMessageProvider } from 'naive-ui';
import hljs from 'highlight.js/lib/core';
import ini from 'highlight.js/lib/languages/ini';
import nginx from 'highlight.js/lib/languages/nginx';

hljs.registerLanguage('ini', ini);
hljs.registerLanguage('nginx', nginx);

// 控制台输出
const chmlFrpPanel = `
 .--,       .--,
 ( (   .---./  ) )
  '.__/o   o__.'
     {=  ^  =}
      >  -  <
     /       \\
    //       \\\\
   //|   .   |\\\\____/ so99 開案!
`;
console.info(chmlFrpPanel);

const themeOverrides = computed(() => {
  const commonColors = {
    primaryColor: '#0E81AE',
    primaryColorHover: '#E9F7FC',
    primaryColorPressed: '#1398CC',
    primaryColorSuppl: '#1398CC',
  };

  return {
    common: {
      ...commonColors,
    },
    Button: {
      textColorPrimary: '#fff',
      textColorHoverPrimary: '#fff',
      textColorPressedPrimary: '#fff',
      textColorFocusPrimary: '#fff',
      textColorDisabledPrimary: '#fff',
      colorPrimary: '#1398CC',
      colorHoverPrimary: '#1398CC',
      colorPressedPrimary: '#1398CC',
      colorFocusPrimary: '#1398CC',
      colorDisabledPrimary: '#1398CC',
      borderColorPrimary: '#1398CC',
      borderColorHoverPrimary: '#1398CC',
      borderColorPressedPrimary: '#1398CC',
      borderColorFocusPrimary: '#1398CC',
      borderColorDisabledPrimary: '#1398CC',
    },
    Menu: {
      itemTextColorActive: '#0E81AE',
      itemTextColorFocus: '#0E81AE',
      itemColorActive: '#E9F7FC',
      itemColorFocus: '#47AED7',
      itemTextColorHover: '#0E81AE',
      itemIconColorHover: '#0E81AE',
      itemColorHover: 'rgba(150, 205, 226, 0.2)',
      itemTextColor: '#2c3e50',
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
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
