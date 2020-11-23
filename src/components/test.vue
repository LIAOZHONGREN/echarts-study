<!--
 * @Author: your name
 * @Date: 2020-11-09 22:08:15
 * @LastEditTime: 2020-11-10 22:33:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\test.vue
-->

<template>
  <div>{{ `${sizeSpecsRef} ${specsWidthRef} ${realWidthRef}` }}</div>
  <button ref="testbut">我是测试</button>
  <button @click="removeEvent">移除事件</button>
</template>

<script lang="ts">
import { ref, watch, watchEffect, onMounted, onUnmounted, unref,defineComponent } from "vue";
import { useEvent } from "../common/hooks/event/useEvent";
import { useWindowResizeListener } from "../common/hooks/event/useWindowResizeListener";
export default defineComponent({
  name: "Test",
  setup() {
    const testbut = ref<HTMLDivElement | undefined>();
    let removeEvent = ref(() => {});

    removeEvent.value = useEvent({
      el: testbut,
      listener: () => {
        console.log("测试useEvent");
      },
      event: "click",
      controlType: "debounce",
      wait: 500,
    });

    onMounted(() => {
      console.log(testbut.value?.tagName);
    });

    watch(
      testbut,
      (v, o, clear) => {
        console.log("watch", testbut.value?.tagName);
        clear(() => {
          console.log("watch clear");
        });
      }
    );

    watchEffect((onInvalidate) => {
      console.log("watchEffect", testbut.value?.tagName);
      onInvalidate(() => {
        console.log("onInvalidate");
      });
    });

    onUnmounted(() => console.log("onUnmounted"));
    const {
      sizeSpecsRef,
      specsWidthRef,
      realWidthRef,
    } = useWindowResizeListener(() => {
      console.log("useWindowResizeListener");
    });
    return { testbut, removeEvent, sizeSpecsRef, specsWidthRef, realWidthRef };
  },
});
</script>
