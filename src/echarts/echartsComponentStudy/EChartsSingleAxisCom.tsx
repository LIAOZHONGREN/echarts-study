
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//singleAxis:单轴。可以被应用到散点图中展现一维数据

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const singleAxis: EChartOption.SingleAxis = {
            left: 'center',
            top: 'center',
            splitNumber: 10,
            type: 'category',
            boundaryGap: false,
            data: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
            width: '90%',
            height: 50,
            splitLine:{
                lineStyle:{
                    color:'#73d13d'
                }
            },
            axisPointer:{//无效果
                type:'shadow',
            }
            
        }
        const option: EChartOption = {
            singleAxis: singleAxis,
            series: [
                {
                    coordinateSystem: 'singleAxis',
                    type: 'scatter',
                    data: [[0, 4], [1, 1], [2, 1], [3, 3], [4, 4], [5, 6], [6, 4], [7, 4], [8, 3], [9, 5]],
                    symbolSize: (dataItem: number[]) => dataItem[1] * 4
                }
            ]
        }
        return () => <Base option={option} style={css} />
    }
})