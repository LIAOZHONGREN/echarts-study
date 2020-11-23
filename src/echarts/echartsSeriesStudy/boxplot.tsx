import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//Boxplot 中文可以称为『箱形图』、『盒须图』、『盒式图』、『盒状图』、『箱线图』，是一种用作显示一组数据分散情况资料的统计图。它能显示出一组数据的最大值、最小值、中位数、下四分位数及上四分位数。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '600px', height: '300px', border: 'solid 1px #000' }

        const seriesBoxplot: EChartOption.SeriesBoxplot = {
            type: 'boxplot',
            //xAxisIndex: 0,
            //yAxisIndex: 0,
            //legendHoverLink: true,
            //hoverAnimation: true,
            //layout:'',//布局方式，可选值：'horizontal'：水平排布各个 box。'vertical'：竖直排布各个 box。默认值根据当前坐标系状况决定：如果 category 轴为横轴，则水平排布；否则竖直排布；如果没有 category 轴则水平排布。
            boxWidth: [7, 50],//box 的宽度的上下限。数组的意思是：[min, max]。
            //itemStyle: {},
            //emphasis: {},
            //dimensions: [],
            encode: {
                x: 0, y: [1, 2, 3, 4, 5]
            },
            //data: [],
            //markPoint: {},
            //markLine: {},
            //markArea: {},
            //tooltip: {}
        }

        const option: EChartOption = {
            dataset: {
                source: [
                    ['一', 655, 850, 940, 980, 1070],
                    ['二', 760, 800, 845, 885, 960],
                    ['三', 780, 840, 855, 880, 940],
                    ['四', 720, 767.5, 815, 865, 920],
                    ['五', 740, 807.5, 810, 870, 950]
                ]
            },
            tooltip: {},
            grid: { width: '80%', left: '10%', bottom: '10%', containLabel: true },
            xAxis: { type: 'category', },
            yAxis: { type: 'value' },
            series: [seriesBoxplot]
        }
        return () => < Base option={option} style={css} />
    }
})