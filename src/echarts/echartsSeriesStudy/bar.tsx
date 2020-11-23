import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '900px', height: '300px', border: 'solid 1px #000' }
        const seriesBar: EChartOption.SeriesBar = {
            type: 'bar',
            //id:'',
            name: 'bar',
            legendHoverLink: true,
            coordinateSystem: 'cartesian2d',
            //xAxisIndex: 0,
            //yAxisIndex: 0,
            //@ts-ignore
            roundCap: false,//是否在环形柱条两侧使用圆弧效果。
            label: {//数据拐点标签设置(可以设置标签的摆放和样式)
                show: true,
                //distance: 20,//与图标的距离
                //position: ['50%', '50%'],//设置标签的位置(相对拐点图标包围盒子的左上角),设置它后distance无效
                // rotate: -45,//标签的旋转角度,基准点为position
                //offset: [-10, -10],//设置标签偏移,优先级第一position和distance
                formatter: '{a}\n{b}:{@[1]}',//标签显示模板,支持回调函数,详细的使用请看官方说明
                color: 'blue',
                fontStyle: 'normal',
                fontFamily: 'normal',
                fontSize: 13,
                fontWeight: 600,
                align: 'center',
                verticalAlign: 'center',
                lineHeight: 20,
                backgroundColor: 'rgba(0,0,0,0.3)',//标签包围盒子的背景色,支持背景图片
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 3,
                padding: 3,
                shadowColor: 'red',
                shadowBlur: 10,
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                //width:100,无效
                //height:100,无效
                textBorderColor: 'green',
                textBorderWidth: 1,
                textShadowColor: 'green',
                textShadowBlur: 5,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
                //rich:{}//富文本颜色设置
            },
            itemStyle: {//柱的样式设置
                color: '#36cfc9',
                borderColor: 'rgba(0,0,0,0.66)',
                borderWidth: 1,
                borderType: 'solid',
                barBorderRadius: 3,
                shadowBlur: 5,
                shadowColor: '#36cfc9',
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                opacity: 0.88,
            },
            //@ts-ignore
            showBackground: true,//是否显示柱条的背景色。通过 backgroundStyle 配置背景样式。
            //@ts-ignore
            backgroundStyle: {
                color: '#000',
                borderColor: 'red',
                borderWidth: 0.5,
                borderType: 'solid',
                barBorderRadius: 3,
                //shadowBlur:,
                //shadowColor:,
                //shadowOffsetX:,
                //shadowOffsetY:,
                opacity: 0.3
            },
            emphasis: { itemStyle: { barBorderWidth: 0, } },
            stack: 'bar',
            //cursor: 'pointer',
            //barWidth: 'auto',
            //barMinWidth: '',
            //barMaxWidth: '',
            //barMinHeight: 0,//柱条最小高度，可用于防止某数据项的值过小而影响交互。
            //barGap: '30%',//不同系列的柱间距离，为百分比（如 '30%'，表示柱子宽度的 30%）。如果想要两个系列的柱子重叠，可以设置 barGap 为 '-100%'。这在用柱子做背景的时候有用。
            //barCategoryGap: '20%',//同一系列的柱间距离，默认为类目间距的20%，可设固定值
            //large: false,//是否开启大数据量优化，在数据图形特别多而出现卡顿时候可以开启。开启后配合 largeThreshold 在数据量大于指定阈值的时候对绘制进行优化。缺点：优化后不能自定义设置单个数据项的样式。
            //largeThreshold: 400,//开启绘制优化的阈值。
            //progressive: 5000,//渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
            //progressiveThreshold: 3000,//启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
            //progressiveChunkMode: 'mod',//分片的方式。可选值：'sequential': 按照数据的顺序分片。缺点是渲染过程不自然。'mod': 取模分片，即每个片段中的点会遍布于整个数据，从而能够视觉上均匀得渲染。
            //dimensions: [],
            seriesLayoutBy: 'row',
            encode: {
                x: 0, y: 1
            },
            //datasetIndex: 0,
            //data: [],//如果需要每个数据的样式单独设置可以在data设置
            markPoint: {
                symbol: 'pin',
                symbolSize: (v: number, p: object) => v,
                symbolRotate: 0,
                //symbolKeepAspect:true,
                symbolOffset: [0, 0],
                silent: false,//是否不触发事件
                label: { color: 'rgba(0,0,0,0)', fontWeight: 'bold', textBorderColor: '#000', textBorderWidth: 1 },
                itemStyle: { borderColor: '#69c0ff', emphasis: { color: 'green' } },
                //@ts-ignore
                data: [{ type: 'max', valueIndex: 1 }]
            },
            markLine: {
                silent: false,
                symbol: ['none', 'arrow'],
                symbolSize: 8,
                precision: 2,//标线数值的精度，在显示平均值线的时候有用。
                label: {
                    show: true,
                    position: 'end',
                    formatter: '{b}\n{@[1]}',
                    //@ts-ignore
                    distance: [-40, 0],
                    emphasis: {
                        formatter: '{@[1]}',
                    }
                },
                lineStyle: {
                    color: 'red',
                    type: 'dashed',
                },
                //@ts-ignore
                data: [{ name: '标注y等于50', yAxis: 50, label: { emphasis: { color: 'green' } } }, { xAxis: '五', label: { show: false }, lineStyle: { color: 'blue' } }]
            },
            markArea: {
                silent: false,
                label: {
                    color: 'blue'
                },
                itemStyle: {
                    color: 'rgba(0,0,0,0.3)',
                    emphasis: { color: 'rgba(0,0,0,0.5)' }
                },
                //@ts-ignore
                data: [[{ name: '三到五', xAxis: '三' }, { xAxis: '五' }]]
            },
            //tooltip: {},
        }

        const seriesBar_polar: EChartOption.SeriesBar = {
            type: 'bar',
            seriesLayoutBy: 'row',
            coordinateSystem: 'polar',
            encode: { angle: 1, radius: 0, },
            //@ts-ignore
            roundCap: true,
            label: { show: true, },//没效果
            //@ts-ignore
            showBackground: true,//是否显示柱条的背景色。通过 backgroundStyle 配置背景样式。
            //@ts-ignore
            backgroundStyle: {
                color: '#000',
                borderColor: 'red',
                borderWidth: 0.5,
                borderType: 'solid',
                barBorderRadius: 3,
                //shadowBlur:,
                //shadowColor:,
                //shadowOffsetX:,
                //shadowOffsetY:,
                opacity: 0.3
            },
        }

        const seriesBar_polar2: EChartOption.SeriesBar = {
            type: 'bar',
            seriesLayoutBy: 'row',
            coordinateSystem: 'polar',
            encode: { angle: 0, radius: 1, },
            //@ts-ignore
            polarIndex: 1,
            label: { show: true, },//没效果
            //@ts-ignore
            showBackground: true,//是否显示柱条的背景色。通过 backgroundStyle 配置背景样式。
            //@ts-ignore
            backgroundStyle: {
                color: '#000',
                borderColor: 'red',
                borderWidth: 0.5,
                borderType: 'solid',
                barBorderRadius: 3,
                //shadowBlur:,
                //shadowColor:,
                //shadowOffsetX:,
                //shadowOffsetY:,
                opacity: 0.3
            },
            stack:'bar'
        }

        const option: EChartOption = {
            dataset: {
                source: [
                    ['一', '二', '三', '四', '五', '六'],
                    [10, 20, 30, 40, 50, 60],
                    [10, 10, 10, 10, 10, 10]
                ]
            },
            // tooltip: {},
            grid: {
                left: '1.5%',
                width: '30%',
                height: '80%',
                top: 'center',
                containLabel: true
            },
            xAxis: { type: 'category', },
            yAxis: { type: 'value', },
            polar: [
                { center: ['49.5%', '50%'], radius: 120 },
                { center: ['82.5%', '50%'], radius: 120 }
            ],
            angleAxis: [{ type: 'value' }, { type: 'category', polarIndex: 1 }],
            radiusAxis: [{ type: 'category' }, { type: 'value', polarIndex: 1, max: 70 }],
            series: [seriesBar, seriesBar_polar, { type: 'bar', coordinateSystem:'polar',seriesLayoutBy: 'row', encode: { angle: 0, radius: 2 }, stack: 'bar', polarIndex: 1 }, seriesBar_polar2]
        }
        return () => <Base option={option} style={css} />
    }
})