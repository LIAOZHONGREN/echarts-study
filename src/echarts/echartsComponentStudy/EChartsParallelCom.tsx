import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { Parallel, ParallelAxis } from '../../types/echarts'

//parallel:平行坐标系（Parallel Coordinates） 是一种常用的可视化高维数据的图表。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '600px', height: '300px', border: 'solid 1px #000' }
        const parallel: Parallel = {
            left: "5%",
            right: "13%",
            bottom: "10%",
            top: "20%",
            layout: 'horizontal',
            //axisExpandable: true,
            //axisExpandCenter: 2,
            //axisExpandCount: 5,
            //axisExpandWidth:30,
            //axisExpandTriggerOn: 'click'
            parallelAxisDefault: {
                type: "value",
                name: "AQI指数",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                    color: 'red',
                    fontSize: 12
                }
            }
        }

        const option: EChartOption = {
            color: ["#c23531", "#91c7ae", "#dd8668"],
            parallelAxis: [{
                dim: 0,
                name: '{a|日}期',
                inverse: true,
                max: 31,
                nameLocation: "start",
                nameTextStyle: {
                    color: '#40a9ff',
                    rich: {
                        a: {
                            color: 'rgba(0,0,0,0)',
                            textBorderColor: '#ff7875',
                            textBorderWidth: 1,
                            textShadowBlur: 10,
                            textShadowColor: '#ff7875',
                            textShadowOffsetX: 3,
                            textShadowOffsetY: 3,
                            fontWeight: 'bold',
                            fontSize: 20,
                        }
                    }
                },
                areaSelectStyle: {
                    color: '#fffb8f',
                    borderColor: '#ffec3d',
                    opacity: 0.6
                }
            } as ParallelAxis, {
                dim: 1,
                name: "AQI"
            }, {
                dim: 2,
                name: "PM2.5"
            }, {
                dim: 3,
                name: "PM10"
            }, {
                dim: 4,
                name: " CO"
            }, {
                dim: 5,
                name: "NO2"
            }, {
                dim: 6,
                name: "SO2"
            }, {
                dim: 7,
                name: "等级",
                type: "category",
                data: ["优", "良", "轻度污染", "中度污染", "重度污染", "严重污染"],
                axisLine: {
                    lineStyle: {
                        color: '#91d5ff',
                        type: 'dotted'
                    }
                },
                axisLabel: {
                    fontWeight: 'bold',
                    fontSize: 18,
                    formatter: (value: string, index: number) => {
                        const arr = ['a', 'b', 'c', 'd', 'e', 'f']
                        return `{${arr[index]}|${value}}`
                    },
                    rich: {
                        a: { color: '#f5222d', fontWeight: 'bold', fontSize: 18 },
                        b: { color: '#ff4d4f', fontWeight: 'bold' },
                        c: { color: '#8c8c8c', fontWeight: 'bold' },
                        d: { color: '#595959', fontWeight: 'bold' },
                        e: { color: '#434343', fontWeight: 'bold' },
                        f: { color: '#262626', fontWeight: 'bold' },
                    }
                }
            } as ParallelAxis],
            parallel: parallel,
            series: [{
                name: "广州",
                type: "parallel",
                data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "优"],
                    [2, 85, 62, 71, 1.195, 60, 8, "良"],
                    [3, 78, 38, 74, 1.363, 37, 7, "良"],
                    [4, 21, 21, 36, 0.634, 40, 9, "优"],
                    [5, 41, 42, 46, 0.915, 81, 13, "优"],
                    [6, 56, 52, 69, 1.067, 92, 16, "良"],
                    [7, 64, 30, 28, 0.924, 51, 2, "良"],
                    [8, 55, 48, 74, 1.236, 75, 26, "良"],
                    [9, 76, 85, 113, 1.237, 114, 27, "良"],
                    [10, 91, 81, 104, 1.041, 56, 40, "良"],
                    [11, 84, 39, 60, 0.964, 25, 11, "良"],
                    [12, 64, 51, 101, 0.862, 58, 23, "良"],
                    [13, 70, 69, 120, 1.198, 65, 36, "良"],
                    [14, 77, 105, 178, 2.549, 64, 16, "良"],
                    [15, 109, 68, 87, 0.996, 74, 29, "轻度污染"],
                    [16, 73, 68, 97, 0.905, 51, 34, "良"],
                    [17, 54, 27, 47, 0.592, 53, 12, "良"],
                    [18, 51, 61, 97, 0.811, 65, 19, "良"],
                    [19, 91, 71, 121, 1.374, 43, 18, "良"],
                    [20, 73, 102, 182, 2.787, 44, 19, "良"],
                    [21, 73, 50, 76, 0.717, 31, 20, "良"],
                    [22, 84, 94, 140, 2.238, 68, 18, "良"],
                    [23, 93, 77, 104, 1.165, 53, 7, "良"],
                    [24, 99, 130, 227, 3.97, 55, 15, "良"],
                    [25, 146, 84, 139, 1.094, 40, 17, "轻度污染"],
                    [26, 113, 108, 137, 1.481, 48, 15, "轻度污染"],
                    [27, 81, 48, 62, 1.619, 26, 3, "良"],
                    [28, 56, 48, 68, 1.336, 37, 9, "良"],
                    [29, 82, 92, 174, 3.29, 0, 13, "良"],
                    [30, 106, 116, 188, 3.628, 101, 16, "轻度污染"],
                    [31, 118, 50, 0, 1.383, 76, 11, "轻度污染"]
                ]
            }]
        }
        return () => <Base option={option} style={css} />
    }
})
