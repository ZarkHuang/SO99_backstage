<template>
  <n-layout style="height: 100vh;">
  
    <n-layout position="absolute" has-sider>
      <n-layout-sider :style="{ display: isHidden ? 'none' : 'flex' }" bordered collapse-mode="width"
        :collapsed-width="64" :width="240" :collapsed="collapsed" show-trigger @collapse="handleCollapse"
        @expand="handleExpand" :native-scrollbar="false">
        <MenuComponent />
      </n-layout-sider>

      <n-layout :native-scrollbar="false" style="height:100vh">
        <n-layout-header bordered>
          <HeaderComponent />
        </n-layout-header>
        <n-layout content-style=" background-color:#fff; margin:0 16px 0px 16px; padding:8px">    
         <router-view></router-view>
         </n-layout>
      </n-layout>

      <n-layout-footer position="absolute" style="background-color: transparent; width: 100%;">
      <AppFooter />
    </n-layout-footer>
    </n-layout>

  </n-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useLayoutStore } from '@/stores/useLayout';
import MenuComponent from '@/components/MenuComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import AppFooter from '@/components/FooterComponent.vue';
import { useScreenStore } from '@/stores/useScreen';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {
    MenuComponent,
    HeaderComponent,
    AppFooter  // 加入 AppFooter
  },
  setup() {
    const screenStore = useScreenStore();
    const { isHidden } = storeToRefs(screenStore);
    const layoutStore = useLayoutStore();
    const collapsed = computed(() => layoutStore.collapsed);

    const handleCollapse = () => {
      layoutStore.setCollapse(true);
    };

    const handleExpand = () => {
      layoutStore.setCollapse(false);
    };

    return {
      collapsed,
      handleCollapse,
      handleExpand,
      isHidden
    };
  }
});
</script>

<style lang="scss">
span {
  transition: color 0.3s;
}
</style>
