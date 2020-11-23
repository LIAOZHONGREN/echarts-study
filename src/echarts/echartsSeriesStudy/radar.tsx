import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { Radar } from '../../types/echarts'

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        //不支持dataset
        const seriesRadar: EChartOption.SeriesRadar = {
            type: 'radar',
            //radarIndex: 0,
            symbol: 'emptyRoundRect',
            symbolSize: 8,
            symbolRotate: 45,
            symbolOffset: [0, 0],
            //symbolKeepAspect:true,
            label: { show: false },
            itemStyle: { shadowBlur: 10, borderWidth: 0.5 },
            lineStyle: { width: 0.5 },
            areaStyle: { opacity: 0 },
            emphasis: {
                label: { show: true },
                itemStyle: { shadowBlur: 20, borderWidth: 1 },
                lineStyle: { width: 1 },
                areaStyle: { opacity: 0.3 }
            },
            //tooltip: {},
            data: [{ value: [10, 20, 30, 40, 50, 60] }],
            //zlevel:,
            //z:,
            //silent:false,
            //动画设置
            //...
        }
        const option: EChartOption = {
            radar: {
                center: ['50%', '50%'],
                radius: 120,
                shape: 'circle',
                splitArea: { show: false },
                name: { textStyle: { fontWeight: 'bold',fontSize:15 } },
                indicator: [
                    { name: '一', max: 60 },
                    { name: '二', max: 60 },
                    { name: '三', max: 60 },
                    { name: '四', max: 60 },
                    { name: '五', max: 60 },
                    { name: '六', max: 60 }
                ],

            } as Radar,
            series: [seriesRadar]
        }
        return () => <Base option={option} style={css} />
    }
})