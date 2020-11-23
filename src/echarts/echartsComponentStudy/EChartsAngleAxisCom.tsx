import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { AngleAxis } from '../../types/echarts'

//angleAxis:角度轴组件,在使用极坐标系(polar)时使用

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const angleAxis: AngleAxis = {
            type: "value",
            startAngle: 0,
            // data:
            min: 0,
            max: 360,
            axisLabel: {
                color: 'rgba(0,0,0,0)',
                fontWeight: 'bold',
                textBorderColor: '#1890ff',
                textBorderWidth: 1,
                textShadowColor: '#1890ff',
                textShadowBlur: 10,
                textShadowOffsetX: 3,
                textShadowOffsetY: 3
            },
            axisLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                }
            },
        }
        const option: EChartOption = {
            polar: {
                center: ["50%", "50%"],

            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross"
                }
            },
            angleAxis: angleAxis,
            radiusAxis: { min: 0, max: 10 },
            series: [{
                coordinateSystem: "polar",
                name: "line",
                type: "line",
                showSymbol: false,
                data: [[0, 0]]
            }]
        }
        return () => <Base option={option} style={css} />
    }
})