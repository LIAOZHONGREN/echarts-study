<!--
 * @Author: your name
 * @Date: 2020-11-06 14:23:44
 * @LastEditTime: 2020-11-06 19:20:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\components\VuexTest.vue
-->
<template>{{ text }}</template>

<script>
import { ref, computed } from "vue";
import { testStore } from "../store/modules/test";
export default {
  setup() {
    const text = computed(() => testStore.getText);
    return { text };
  },
};
</script>