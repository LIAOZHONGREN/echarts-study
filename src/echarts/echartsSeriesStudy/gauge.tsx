import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//仪表盘

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const seriesGauge: EChartOption.SeriesGauge = {
            type: "gauge",
            radius: '75%',
            //@ts-ignore
            center: ['50%', '50%'],
            startAngle: 225,
            endAngle: -45,
            clockwise: true,//仪表盘刻度值是否是顺时针增长。
            min: 0,//最小的数据值，映射到 minAngle。
            max: 100,//最大的数据值，映射到 maxAngle。
            splitNumber: 10,//仪表盘刻度的分割段数。
            axisLabel: {
                color: 'rgba(0,0,0,0)',
                textBorderColor: 'auto',
                textBorderWidth: 1,
                fontWeight: 'bold',
            },
            axisLine: {
                lineStyle: {
                    width: 5,
                    color: [[0.2, '#a0d911'], [0.8, '#f5222d'], [1, '#a0d911']],//仪表盘的轴线可以被分成不同颜色的多段。每段的结束位置和颜色可以通过一个数组来表示。
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.3)',
                }
            },
            axisTick: {
                length: 10,
                lineStyle: { color: 'auto', }
            },
            pointer: { width: 5 },//仪表盘指针。
            itemStyle: { color: 'green' },//仪表盘指针样式。
            //emphasis: {},
            title: { color: 'blue' },//仪表盘标题样式设置,标题文本:data.name
            detail: { formatter: "{value}%" },//仪表盘详情，用于设置显示数据和数据的显示样式。
            data: [{ value: 50, name: "Percent" }],
            //markPoint: {},
            //markLine: {},
            //markArea: {},
            //tooltip: {},
            //...
        }
        const option: EChartOption = {
            series: [seriesGauge]
        }
        return () => < Base option={option} style={css} />
    }
})