
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'


export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '900px', height: '300px', border: 'solid 1px #000' }
        const seriesPie: EChartOption.SeriesPie = {
            type: 'pie',
            id: 'pie',
            name: 'pie',
            legendHoverLink: true,
            hoverAnimation: true,//是否开启 hover 在扇区上的放大动画效果。
            hoverOffset: 10,//高亮扇区的偏移距离。
            selectedMode: 'single',//伞形块的选中模式,false表示不可选中,true表示可选(有两种类型'single'和'multiple'(多选)),为true时默认为'multiple',
            selectedOffset: 10,//选中扇区的偏移距离。
            clockwise: true,//饼图的扇区是否是顺时针排布。
            startAngle: 90,//起始角度，支持范围[0, 360]。
            minAngle: 0,//最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互。
            minShowLabelAngle: 0,//小于这个角度（0 ~ 360）的扇区，不显示标签（label 和 labelLine）。
            roseType: false,//是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
            avoidLabelOverlap: true,//是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。 如果不需要开启该策略，例如圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
            stillShowZeroSum: true,//是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区。
            cursor: 'pointer',
            zlevel: 0,
            z: 2,
            label: {
                position: 'outside',//可选值:'outside','inner' 同 'inside','center'
                formatter: '{b}:{@[1]}-{d}%',
                alignTo: 'none',//标签的对齐方式，仅当 position 值为 'outer' 时有效。可选值:'labelLine'(label line 的末端对齐),'edge'(文字对齐),'none'(默认)
                bleedMargin: 10,//文字的出血线大小，超过出血线的文字将被裁剪为 '...'。仅当 label.position 为 'outer' 并且 label.alignTo 为 'none' 或 'labelLine' 的情况有效。
                distanceToLabelLine: 5,//文字与 label line 之间的距离。
            },
            labelLine: {
                show: true,
                //length: undefined,//视觉引导线第一段的长度。
                //length2: undefined,//视觉引导项第二段的长度。
                smooth: 0.5,//是否平滑视觉引导线，默认不平滑，可以设置成 true 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。
                lineStyle: { type: 'dashed' }
            },
            //itemStyle:{},
            emphasis: {
                itemStyle: { shadowColor: 'rgba(0,0,0,0.3)', shadowBlur: 20 },
                label: {
                    formatter: '{t|{b}}:{@[1]}-{d}%',
                    rich: { t: { color: 'transparent', fontSize: 18, fontWeight: 'bold', textBorderColor: 'red', textBorderWidth: 1 } }
                }
            },
            radius: [0, 50],
            center: ['16.5%', '50%'],
            //seriesLayoutBy: 'column',
            //datasetIndex:0,
            //@ts-ignore
            //dimensions: [],
            //@ts-ignore
            encode: { itemName: 0, value: 1 },
            //data: [],
            markPoint: {
                symbol: 'pin',
                //@ts-ignore
                data: [{ name: '某个屏幕坐标', x: 100, y: 100, label: { formatter: '{b}' } }]
            },
            markLine: {
                //@ts-ignore
                data: [[{ name: '两个屏幕坐标之间的标线', x: 100, y: 100 }, { x: 300, y: 200 }]]
            },
            markArea: {
                //@ts-ignore
                //data: [[{ name: '两个屏幕坐标之间的标域', x: 100, y: 100 }, { x: '66%', y: '66%' }]]报错
            },
            silent: false,
            tooltip: {}
        }

        const seriesPie2: EChartOption.SeriesPie = {
            type: 'pie',
            center: ['49.5%', '50%'],
            radius: [0, 120],
            roseType: 'radius',
            //@ts-ignore
            encode: {
                itemName: 0,
                value: 1
            },
            label: {
                show: false,
                position: 'inside'
            },
            emphasis: {
                label: {
                    show: true,
                    fontWeight: 'bold',
                    fontSize: 20,
                }
            }
        }

        const seriesPie3: EChartOption.SeriesPie = {
            type: 'pie',
            center: ['82.5%', '50%'],
            radius: [60, 120],
            roseType: 'area',
            //@ts-ignore
            encode: {
                itemName: 0,
                value: 1
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontWeight: 'bold',
                    fontSize: 20,
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: (idx: number) => {
                return Math.random() * 200;
            }
        }

        const option: EChartOption = {
            dataset: {
                source: [
                    ['一', 10],
                    ['二', 20],
                    ['三', 30],
                    ['四', 40],
                    ['五', 50],
                    ['六', 60],
                ]
            },
            series: [seriesPie, seriesPie2, seriesPie3]
        }
        return () => <Base option={option} style={css} />
    }
})