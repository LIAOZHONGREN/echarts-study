
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { Polar } from '../../types/echarts'

//polar:极坐标系的控制组件,控制坐标系的位置和大小

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const polar: Polar = {
            center: ['50%', '50%'],//极坐标系的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
            radius: 120,//极坐标系的半径。可以为如下类型：number：直接指定外半径值。 string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。 Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
        }
        const option: EChartOption = {
            polar: polar,
            angleAxis: {
                type: "category",
                data: ["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"],
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#999",
                        type: "dashed"
                    }
                },
                axisLine: {
                    show: false
                }
            },
            radiusAxis: {
                type: "category",
                data: ["Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    rotate: 45
                }
            },
            series: [{
                name: "Punch Card",
                type: "scatter",
                coordinateSystem: "polar",
                symbolSize: function (val: number[]) { return val[2] * 2 },
                data: [
                    [0, 11, 2],
                    [0, 12, 4],
                    [0, 13, 1],
                    [1, 16, 6],
                    [2, 4, 0],
                    [2, 5, 0],
                    [2, 17, 5],
                    [2, 18, 5],
                    [2, 19, 5],
                    [2, 20, 7],
                    [2, 21, 4],
                    [3, 19, 10],
                    [3, 20, 6],
                    [4, 13, 4],
                    [4, 14, 4],
                    [4, 15, 14],
                    [5, 3, 3],
                    [5, 9, 0],
                    [5, 10, 4],
                    [5, 11, 1],
                    [6, 0, 1],
                    [6, 18, 0],
                ]
            }]
        }
        return () => <Base option={option} style={css} />
    }
})