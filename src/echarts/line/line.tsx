import { defineComponent, CSSProperties, nextTick, ref, unref } from 'vue'
import echarts, { EChartOption } from 'echarts'
import { useECharts } from '../../common/hooks/web/useECharts'
import Base from '../base'


export default defineComponent({
    components: { Base },
    setup() {
        const el = ref<HTMLDivElement>()
        const css: CSSProperties = { position: 'relative', width: '700px', height: '700px' }
        const option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    data: [1, 2, 3]
                },
                grid: {
                    containLabel: true,
                },
                xAxis: { type: 'category', data: ['一', '二', '三'] },
                yAxis: { type: 'value' },
                series: [{
                    type: 'bar'
                }]
            },
            options: [
                { series: [{ data: [30, 60, 90] }] },
                { series: [{ data: [60, 90, 120] }] },
                { series: [{ data: [90, 120, 150] }] },
            ]
        }
        nextTick(() => {
            const ele = unref(el)
            if (!ele) return
            //@ts-ignore
            echarts.init(ele).setOption(option)
        })
        return () => (
            <div ref={el} style={css} />
        )
    }
})