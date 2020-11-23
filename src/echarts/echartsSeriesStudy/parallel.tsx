import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { Parallel, ParallelAxis } from '../../types/echarts'

//平行坐标系的系列。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        //不支持dataset              
        const seriesParallel: EChartOption.SeriesParallel = {
            type: 'parallel',
            coordinateSystem: 'parallel',
            parallelIndex: 0,
            //name: '',
            //lineStyle: {},
            //emphasis: {},
            inactiveOpacity: 0.05,//框选时，未被选中的条线会设置成这个『透明度』（从而可以达到变暗的效果）。
            activeOpacity: 1,//框选时，选中的条线会设置成这个『透明度』（从而可以达到高亮的效果）。
            realtime: true,
            smooth: false,//是否使用平滑曲线。默认为 false，可以设置为 true 或者一个范围为 0 到 1 的小数值，指定平滑程度。
            progressive: 500,
            //...
            data: [
                [0, 1, 2, 3, 4, 'A'],
                [5, 6, 7, 8, 9, 'B'],
                [10, 11, 12, 13, 14, 'C'],
                [15, 16, 17, 18, 19, 'D'],
                [20, 21, 22, 23, 24, 'E'],
                [25, 26, 27, 28, 29, 'F'],
            ],
            //...
        }
        const option: EChartOption = {
            parallel: { left: 'center', top: 'center', width: '80%', height: '80%', layout: 'horizontal', } as Parallel,
            parallelAxis: [
                { type: 'value', dim: 0, name: '一', nameLocation: 'end' } as ParallelAxis,
                { type: 'value', dim: 1, name: '二', nameLocation: 'end' } as ParallelAxis,
                { type: 'value', dim: 2, name: '三', nameLocation: 'end' } as ParallelAxis,
                { type: 'value', dim: 3, name: '四', nameLocation: 'end' } as ParallelAxis,
                { type: 'value', dim: 4, name: '五', nameLocation: 'end' } as ParallelAxis,
                { type: 'category', dim: 5, name: '六', nameLocation: 'end' } as ParallelAxis,
            ],
            series: [seriesParallel]
        }
        return () => < Base option={option} style={css} />
    }
})