/*
 * @Author: your name
 * @Date: 2020-11-09 20:33:49
 * @LastEditTime: 2020-11-20 22:12:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\common\hooks\web\useECharts.ts
 */

import { unref, Ref, nextTick, onUnmounted } from 'vue';
import echarts, { EChartOption, ECharts, EChartsResponsiveOption } from 'echarts';
import { useDebounce } from '../core/useDebounce'
import { useEvent } from '../event/useEvent'
import { useTimeout } from '../core/useTimeout'
import { useWindowResizeListener } from '../event/useWindowResizeListener'
import { screenEnum } from '../../enums/windowSizeEnum'

export function useECharts(elRef: Ref<HTMLDivElement | undefined>, theme: 'light' | 'dark' | 'default' = 'light') {

    let chartInstance: Nullable<ECharts> = null

    function resize() {
        chartInstance && chartInstance.resize()
    }

    function init(options: EChartOption<EChartOption.Series> | EChartsResponsiveOption) {

        const initExce = () => {
            const el = unref(elRef)
            if (!el) return
            chartInstance = echarts.init(el, theme)
            if (!chartInstance) return
            useEvent({ el: el, event: 'resize', controlType: 'debounce', wait: 200, listener: resize })
            const { specsWidthRef } = useWindowResizeListener();
            if (unref(specsWidthRef) <= screenEnum.MD) {
                useTimeout(() => { resize() }, 30);
            }
            chartInstance.setOption(options);
        }

        const el = unref(elRef)
        if (!el) {
            nextTick(() => {
                useTimeout(() => { initExce() }, 30);
            });
        } else {
            initExce()
        }
    }

    function setOptions(options: EChartOption<EChartOption.Series> | EChartsResponsiveOption | { baseOption: EChartOption, options: EChartOption[] }, clear = true) {

        if (!chartInstance) {
            init(options)
        } else {
            clear && chartInstance.clear();
            //@ts-ignore
            chartInstance.setOption(options);
        }

    }

    function getChartInstance(): Nullable<ECharts> {
        return chartInstance
    }

    onUnmounted(() => {
        chartInstance && chartInstance.dispose()
    });

    return {
        setOptions,
        getChartInstance,
    };
}
