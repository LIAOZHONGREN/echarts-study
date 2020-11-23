
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//散点（气泡）图

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '600px', height: '300px', border: 'solid 1px #000' }
        const seriesScatter: EChartOption.SeriesScatter = {
            type: 'scatter',
            id: 'scatter',
            name: 'scatter',
            coordinateSystem: 'cartesian2d',
            //xAxisIndex: 0,
            //yAxisIndex: 0,
            //polarIndex: 0,
            //geoIndex: 0,
            //calendarIndex: 0,//使用的日历坐标系的 index，在单个图表实例中存在多个日历坐标系的时候有用。
            //hoverAnimation: true,
            //legendHoverLink: true,
            symbol: 'pin',
            symbolSize: 15,
            //symbolRotate: 0,
            //symbolKeepAspect: true,
            //symbolOffset: [0, 0],
            large: false,//是否开启大数据量优化，在数据图形特别多而出现卡顿时候可以开启。开启后配合 largeThreshold 在数据量大于指定阈值的时候对绘制进行优化。缺点：优化后不能自定义设置单个数据项的样式。
            //largeThreshold: 2000,
            //cursor: 'pointer',
            label: { show: false },
            itemStyle: { color: 'red' },
            emphasis: {
                label: { show: true },
                itemStyle: { color: '#bae637' }
            },
            //progressive: 400,//渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
            //progressiveThreshold: 3000,
            //dimensions: [],
            //seriesLayoutBy: 'column',
            encode: { x: 0, y: 1 },
            //datasetIndex: 0,
            //data: [],
            markPoint: {
                //@ts-ignore
                data: [
                    { name: '最大值', type: 'max', symbolSize: 30, label: { formatter: '{b}:{@[1]}' } },
                    { name: '某个坐标', coord: [10, 20], label: { formatter: '{b}' }, symbol: 'triangle' },
                    { name: '固定 x 像素位置', yAxis: 10, x: '20%', label: { formatter: '{b}' }, symbol: 'diamond' },
                    { name: '某个屏幕坐标', x: 100, y: 100, label: { formatter: '{b}' }, symbol: 'arrow' }
                ]
            },
            markLine: {
                //@ts-ignore
                data: [
                    //@ts-ignore
                    { name: '平均线', type: 'average'/**支持 'average', 'min', 'max' */ },
                    //@ts-ignore
                    { name: 'Y 轴值为 100 的水平线', yAxis: 50 },
                    //@ts-ignore
                    [{ name: '最小值到最大值', type: 'min' }, { type: 'max' }],
                    //@ts-ignore
                    [{ name: '两个坐标之间的标线', coord: ['五', 10] }, { coord: ['五', 20] }],
                    //@ts-ignore
                    [{ yAxis: 'max', x: '50%' }, { type: 'max' }],
                    //@ts-ignore
                    [{ name: '两个屏幕坐标之间的标线', x: 100, y: 100 }, { x: 300, y: 200 }]
                ]
            },
            markArea: {
                //@ts-ignore
                data: [
                    //@ts-ignore
                    [{ name: '平均值到最大值', type: 'average' }, { type: 'max' }],
                ]
            },
            //silent: false,
            //动画配置
            //...
            tooltip: {}
        }

        const seriesScatter_polar: EChartOption.SeriesScatter = {
            type: 'scatter',
            coordinateSystem: 'polar',
            seriesLayoutBy: 'column',
            encode: { radius: 0, angle: 1 },
            markPoint: {
                //@ts-ignore
                data: [
                    { angleAxis: 10, radiusAxis: '三' },
                    { name: '最大值', type: 'max', valueIndex: 0, label: { formatter: (p: any) => p.name } },
                    { coord: ['三', 30], symbol: 'rect', symbolSize: 16 }
                ]
            },
            markLine: {
                //@ts-ignore
                data: [
                    //@ts-ignore
                    [{ coord: ['一', 60] }, { coord: ['六', 60] }],
                    //@ts-ignore
                    [{ type: 'min', valueIndex: 0 }, { type: 'max', valueIndex: 0 }],
                    //@ts-ignore
                    [{ angleAxis: 50, radiusAxis: '五' }, { angleAxis: 20, radiusAxis: '五' }]
                ]
            },
            //markArea: {}//报错
        }

        const option: EChartOption = {
            dataset: {
                source: [
                    ['一', 10], ['二', 20], ['三', 30], ['四', 40], ['五', 50], ['六', 60],
                ]
            },
            grid: { containLabel: true, width: '40%', height: '80%', left: '5%', top: 'center' },
            xAxis: { type: 'category' },
            yAxis: { type: 'value' },
            polar: { center: ['75%', '50%'], radius: 120, },
            angleAxis: { type: 'value', max: 70 },
            radiusAxis: { type: 'category', axisTick: { alignWithLabel: true }, },
            series: [seriesScatter, seriesScatter_polar]
        }
        return () => <Base option={option} style={css} />
    }
})


