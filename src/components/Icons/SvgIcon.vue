<template>
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'SvgIcon',
    props: {
      icon: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: '',
      },
    },
    computed: {
      iconName() {
        return `#icon-${this.icon}`;
      },
      svgClass() {
        return `svg-icon ${this.className}`;
      },
    },
  });
  </script>
  
  <style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
  }
  </style>
  