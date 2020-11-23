/*
 * @Author: your name
 * @Date: 2020-11-09 19:58:43
 * @LastEditTime: 2020-11-09 20:58:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\common\hooks\useWindowSizeLis.ts
 */

import { ref, computed, Ref, unref } from 'vue';
import { sizeSpecsEnum, screenEnum, screenMap } from '../../enums/windowSizeEnum'
import { useEvent } from './useEvent'

let globalSizeSpecsRef: Ref<sizeSpecsEnum | undefined>;
let globalSpecsWidthRef: Ref<number>;
let globalRealWidthRef: Ref<number>;

export type WindowResizeListenerRefRes = { sizeSpecsRef: Ref<sizeSpecsEnum | undefined>, specsWidthRef: Ref<number>, realWidthRef: Ref<number> }

export function getWindowResizeListenerRefRes(): WindowResizeListenerRefRes {
    return {
        sizeSpecsRef: globalSizeSpecsRef,
        specsWidthRef: globalSpecsWidthRef,
        realWidthRef: globalRealWidthRef
    }
}

export function useWindowResizeListener(fn?: () => void): WindowResizeListenerRefRes {

    const screenRef = ref<sizeSpecsEnum>(sizeSpecsEnum.XL);
    const realWidthRef = ref(window.innerWidth);

    function getWindowWidth() {
        const width = document.body.clientWidth;
        const xs = screenMap.get(sizeSpecsEnum.XS)!;
        const sm = screenMap.get(sizeSpecsEnum.SM)!;
        const md = screenMap.get(sizeSpecsEnum.MD)!;
        const lg = screenMap.get(sizeSpecsEnum.LG)!;
        const xl = screenMap.get(sizeSpecsEnum.XL)!;
        if (width < xs) {
            screenRef.value = sizeSpecsEnum.XS;
        } else if (width < sm) {
            screenRef.value = sizeSpecsEnum.SM;
        } else if (width < md) {
            screenRef.value = sizeSpecsEnum.MD;
        } else if (width < lg) {
            screenRef.value = sizeSpecsEnum.LG;
        } else if (width < xl) {
            screenRef.value = sizeSpecsEnum.XL;
        } else {
            screenRef.value = sizeSpecsEnum.XXL;
        }
        realWidthRef.value = width;
    }

    useEvent({
        el: window,
        event: 'resize',
        controlType:'debounce',
        listener: () => {
            fn && fn()
            getWindowWidth()
        }
    })

    getWindowWidth()
    globalSizeSpecsRef = computed(() => unref(screenRef))
    globalSpecsWidthRef = computed((): number => screenMap.get(unref(screenRef)!)!)
    globalRealWidthRef = computed((): number => unref(realWidthRef))

    return {
        sizeSpecsRef: globalSizeSpecsRef,
        specsWidthRef: globalSpecsWidthRef,
        realWidthRef: globalRealWidthRef
    }

}