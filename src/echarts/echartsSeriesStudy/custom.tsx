import { defineComponent, CSSProperties, ref, nextTick } from 'vue'
import echarts, { EChartOption } from 'echarts'
import Base, { BaseComponent } from '../base'

//自定义系列

export default defineComponent({
    components: { Base },
    setup() {
        const baseEl = ref<BaseComponent>()
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const seriesCustom: EChartOption.SeriesCustom = {
            type: 'custom',
            coordinateSystem: 'cartesian2d',//null|'none'|cartesian2d'|'polar'|'geo'|'calendar'
            xAxisIndex: 0,
            yAxisIndex: 0,
            //polarIndex: 0,
            //geoIndex: 0,
            //calendarIndex: 0,
            renderItem: (p, a) => {
                //@ts-ignore
                const pos = a.coord([a.value(0), a.value(1)])//坐标系坐标转画布坐标
                //@ts-ignore
                return {
                    type: 'circle',
                    name: 'circle_',
                    shape: {
                        //@ts-ignore
                        r: a.value(1),
                        cx: pos[0],
                        //@ts-ignore
                        cy: pos[1] - a.value(1) - 5
                    },
                    //@ts-ignore
                    style: a.style(),
                    //@ts-ignore
                    styleEmphasis: a.styleEmphasis(),
                } as EChartOption.SeriesCustom.RenderItemReturnCircle
                //return {}
            },
            //itemStyle: { color: 'blue' },
            emphasis: { itemStyle: { color: 'green' } },
            //dimensions: [],
            seriesLayoutBy: 'column',
            encode: { x: 0, y: 1 },
            //datasetIndex: 0,
            //data: [],
            //tooltip: {},
            //...
        }

        nextTick(() => {
            const chartInstance = baseEl.value?.chartInstance
            if (chartInstance) {
                //给seriesCustom系列的元素添加点击事件
                //@ts-ignore
                chartInstance.on('click', { element: 'circle_' }, (p: any) => {
                    console.log(p)
                })
            }
        })

        const option: EChartOption = {
            dataset: [
                {
                    source: [
                        ['A', 2],
                        ['B', 3],
                        ['C', 4],
                        ['D', 5],
                        ['E', 6],
                        ['F', 7],
                    ]
                }
            ],
            grid: { width: '80%', height: '80%', left: 'center', top: 'center' },
            xAxis: { type: 'category' },
            yAxis: { type: 'value' },
            series: [seriesCustom, { type: 'bar', encode: { x: 0, y: 1 } }]
        }
        return () => <Base ref={baseEl} option={option} style={css} />
    }
})