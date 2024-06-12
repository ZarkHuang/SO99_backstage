<template>
  <div>
    <div class="logo">
      <LogoIcon icon="logo_vertical" size="68px" />
    </div>
    <n-menu
      style="text-align: left"
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      @update:value="handleUpdateValue"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useScreenStore } from "@/stores/useScreen";
import { storeToRefs } from "pinia";
import { menuOptions } from "./Options/Menu";
import LogoIcon from "@/components/Icons/LogoIcon.vue";

// 使用 Pinia 存儲
const screenStore = useScreenStore();
const { isHidden } = storeToRefs(screenStore);
const route = useRoute();
const router = useRouter();
const activeKey = ref(route.name as string);

// setup 邏輯
const collapsed = ref(false);

const handleUpdateValue = (key: string) => {
  activeKey.value = key;
  const targetOption = menuOptions.find((option) => option.key === key);
  if (targetOption && typeof targetOption.label === "function") {
    const labelVNode = targetOption.label();
    const to = labelVNode.props.to;
    router.push(to);
  }
};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 64px;
  padding-left: 16px;
}
</style>
