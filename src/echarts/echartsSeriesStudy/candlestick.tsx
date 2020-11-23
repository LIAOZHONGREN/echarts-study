import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//Candlestick 即我们常说的 K线图。在 ECharts3 中，同时支持 'candlestick' 和 'k'这两种 'series.type'（'k' 会被自动转为 'candlestick'）。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '600px', height: '300px', border: 'solid 1px #000' }

        const seriesCandlestick: EChartOption.SeriesCandlestick = {
            type: 'k',
            layout: '',////'horizontal'|'vertical'
            //barWidth: '',//指定柱宽度。可以使用绝对数值（如 10）或百分比（如 '20%'，表示 band width 的百分之多少）。默认自适应。
            //barMinWidth: '',
            //barMaxWidth: '',
            //itemStyle: {},
            //emphasis: {},
            encode: {

            },
            //data: [],
            //markPoint: {},
            //markLine: {},
            //markArea: {},
            //...
        }
        const option: EChartOption = {
            dataset: {
                source: [
                    ['一', 30, 25, 20, 35],
                    ['二', 20, 25, 30, 35],
                    ['三', 30, 35, 40, 45],
                    ['四', 40, 45, 50, 55],
                    ['五', 50, 55, 60, 65],
                    ['六', 60, 65, 70, 75]
                ]
            },
            tooltip: {},
            grid: { width: '80%', left: '10%', bottom: '10%', containLabel: true },
            xAxis: { type: 'category', },
            yAxis: { type: 'value' },
            series: [seriesCandlestick]
        }
        return () => < Base option={option} style={css} />
    }
})