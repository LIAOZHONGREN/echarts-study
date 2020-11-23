
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { Brush } from '../../types/echarts'

//brush:区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '600px', height: '300px', border: 'solid 1px #000' }
        const brush: Brush = {
            brushLink: 'all',
            xAxisIndex: [0],
            //yAxisIndex: [0,1],
            //seriseIndex: [1],
            //toolbox: ['rect','polygon','keep','clear','lineX','lineY'],
            //brushType:'polygon',//不知道作用
            //brushMode:'multiple',//不知道作用
            transformable: true,
            brushStyle: {
                color: 'rgba(0,0,255,0.3)',
                borderWidth: 1,
                borderColor: '#000'
            },
            inBrush: {
                color: ['red'],
            },
            outOfBrush: {
                color: ['blue']
            }
        }
        const option: EChartOption = {
            brush: brush,
            grid: [{
                left: 10,
                width: '45%',
                containLabel: true
            }, {
                right: 10,
                width: '45%',
                containLabel: true
            }],
            xAxis: [
                {
                    //gridIndex: 0,
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                {
                    gridIndex: 1,
                    type: 'category',
                    data: ['一', '二', '三', '四', '五', '六', '七']
                }
            ],
            yAxis: [{
                // gridIndex: 0,
                type: 'value'
            }, {
                gridIndex: 1,
                type: 'value'
            }],
            series: [
                {
                    //xAxisIndex: 0,
                    //yAxisIndex: 0,
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                },
                {
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                }
            ]
        }
        return () => <Base option={option} style={css} />
    }
})