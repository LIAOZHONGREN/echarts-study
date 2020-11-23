
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '600px', height: '300px', border: 'solid 1px #000' }
        const seriesLiine: EChartOption.SeriesLine = {
            type: 'line',
            id: 'line',
            name: 'line',//系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            coordinateSystem: 'cartesian2d',//该系列使用的坐标系,可选值:'cartesian2d','polar'
            //xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            //yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            //polarIndex: 0,//使用的极坐标系的 index，在单个图表实例中存在多个极坐标系的时候有用。
            //datasetIndex: 0,//设置映射到此系列的数据集的索引,
            symbol: 'emptyCircle',//折线拐点的标记图案
            symbolSize: 4,
            symbolRotate: 0,
            symbolKeepAspect: true,//如果 symbol 是 path:// 的形式，是否在缩放时保持该图形的长宽比。
            symbolOffset: [0, 0],
            showSymbol: true,//是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
            showAllSymbol: true,//只在主轴为类目轴（axis.type 为 'category'）时有效。 可选值：'auto'：默认，如果有足够空间则显示标志图形，否则随主轴标签间隔隐藏策略。 true：显示所有图形。 false：随主轴标签间隔隐藏策略。
            hoverAnimation: true,
            legendHoverLink: true,//是否启用图例 hover 时的联动高亮。
            stack: '',//数据堆叠，同个类目轴上系列的stack属性配置相同的，后一个系列的值会在前一个系列的值上相加。
            cursor: 'pointer',//鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
            connectNulls: true,//是否连接空数据。
            clipOverflow: true,//裁掉所有超出坐标系的折线部分，拐点图形的逻辑按照散点图处理
            step: false,//是否是阶梯线图。可以设置为 true 显示成阶梯线图，也支持设置成 'start', 'middle', 'end' 分别配置在当前点，当前点与下个点的中间点，下个点拐弯。
            label: {//数据拐点标签设置(可以设置标签的摆放和样式)
                show: true,
                distance: 20,//与图标的距离
                //position: ['50%', '50%'],//设置标签的位置(相对拐点图标包围盒子的左上角),设置它后distance无效
                // rotate: -45,//标签的旋转角度,基准点为position
                offset: [-10, -10],//设置标签偏移,优先级第一position和distance
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
            itemStyle: {//折线拐点标案的样式。
                color: 'red',
                borderColor: 'blue',
                borderWidth: 1,
                borderType: 'solid',
                shadowColor: 'blue',
                shadowBlur: 5,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                opacity: 0.66
            },
            lineStyle: {//折线条样式。
                color: '#9254de',
                width: 2,
                type: 'dashed',
                shadowColor: '#9254de',
                shadowBlur: 5,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                opacity: 1,
            },
            areaStyle: {//区域填充样式。
                color: '#a0d911',
                origin: 'auto',
                shadowColor: '',
                shadowBlur: 5,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                opacity: 0.3
            },
            emphasis: {//图形的高亮样式。
                label: {
                    color: 'red'
                },
                itemStyle: { borderColor: 'red' },
            },
            smooth: false,//是否平滑曲线显示。
            //smoothMonotone: '',//折线平滑后是否在一个维度上保持单调性，可以设置成'x', 'y'来指明是在 x 轴或者 y 轴上保持单调性。
            //sampling: '',//折线图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是全部绘制不过滤数据点。可选：'average' 取过滤点的平均值 'max' 取过滤点的最大值 'min' 取过滤点的最小值 'sum' 取过滤点的和
            // dimensions: [],//使用 dimensions 定义 series.data 或者 dataset.source 的每个维度的信息。
            encode: {//可以定义 data 的哪个维度被编码成什么.详细使用开官方说明
                x: 0,
                y: 1
            },
            seriesLayoutBy: 'row',//当使用 dataset 时，seriesLayoutBy 指定了 dataset 中用行还是列对应到系列上，也就是说，系列“排布”到 dataset 的行还是列上。可取值：'column'：默认，dataset 的列对应于系列，从而 dataset 中每一列是一个维度（dimension）。'row'：dataset 的行对应于系列，从而 dataset 中每一行是一个维度（dimension）。
            //data: [],
            markPoint: {//图表标注。(用于标注特殊的折线拐点,比如最大值或最小值什么的)
                symbol: 'pin',
                symbolSize: (v: number, p: object) => v * 2,
                symbolRotate: 0,
                //symbolKeepAspect:true,
                symbolOffset: [0, 0],
                silent: false,//是否不触发事件
                label: { color: 'rgba(0,0,0,0)', fontWeight: 'bold', textBorderColor: '#000', textBorderWidth: 1 },
                itemStyle: { borderColor: '#69c0ff', emphasis: { color: 'green' } },
                //@ts-ignore
                data: [{ type: 'average', valueIndex: 1 }]//指定标准的位置,type:可选值:'min','max','average',valueIndex 指定是在哪个维度上的最大值、最小值、平均值。或者可以使用 valueDim 指定在哪个维度上的最大值、最小值、平均值。.详细配置看官方说明
            },
            markLine: {//标注线.(用于标注特殊的折线拐点,比如最大值或最小值什么的)
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
            markArea: {//标注区域.(用于标准一点范围的数据是用)
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
            //zlevel: 0,
            //z: 2,
            // silent: false,//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
            // animation: true,
            // animationThreshold: 2000,
            // animationDuration: 1000,
            // animationEasing: 'linear',
            // animationDelay: 0,
            // animationDurationUpdate: 300,
            // animationEasingUpdate: 'cubicOut',
            // animationDelayUpdate: 0,
            tooltip: {//提示组件
                backgroundColor: 'red'
            },
        }

        const seriesLiine_polar: EChartOption.SeriesLine = {
            coordinateSystem: 'polar', name: 'line', type: 'line', encode: { angle: 0, radius: 1 }, seriesLayoutBy: 'row',
            label: {//数据拐点标签设置(可以设置标签的摆放和样式)
                show: true,
                position: ['50%', '50%'],//设置标签的位置(相对拐点图标包围盒子的左上角),设置它后distance无效
                formatter: '{a}\n{b}:{@[1]}',//标签显示模板,支持回调函数,详细的使用请看官方说明
                color: 'blue',
                fontSize: 13,
                fontWeight: 600,
                align: 'center',
                verticalAlign: 'center',
                lineHeight: 20,
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 3,
                padding: 3,
                shadowColor: 'red',
                shadowBlur: 10,
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                textBorderColor: 'green',
                textBorderWidth: 1,
                textShadowColor: 'green',
                textShadowBlur: 5,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
            },
            itemStyle: {//折线拐点标案的样式。
                color: 'red',
                borderColor: 'blue',
                borderWidth: 1,
                borderType: 'solid',
                shadowColor: 'blue',
                shadowBlur: 5,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                opacity: 0.66
            },
            lineStyle: {//折线条样式。
                color: '#9254de',
                width: 2,
                type: 'dashed',
                shadowColor: '#9254de',
                shadowBlur: 5,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                opacity: 1,
            },
            areaStyle: {//区域填充样式。
                color: '#a0d911',
                origin: 'auto',
                shadowColor: '',
                shadowBlur: 5,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                opacity: 0.3
            },
            markPoint: {//图表标注。(用于标注特殊的折线拐点,比如最大值或最小值什么的)
                symbol: 'pin',
                symbolSize: (v: number, p: object) => v * 2,
                symbolRotate: 0,
                //symbolKeepAspect:true,
                symbolOffset: [0, 0],
                silent: false,//是否不触发事件
                label: { color: 'rgba(0,0,0,0)', fontWeight: 'bold', textBorderColor: '#000', textBorderWidth: 1 },
                itemStyle: { borderColor: '#69c0ff', emphasis: { color: 'green' } },
                //@ts-ignore
                data: [{ type: 'average', valueIndex: 1 }]//指定标准的位置,type:可选值:'min','max','average',valueIndex 指定是在哪个维度上的最大值、最小值、平均值。或者可以使用 valueDim 指定在哪个维度上的最大值、最小值、平均值。.详细配置看官方说明
            },
        }

        const option: EChartOption = {
            dataset: {
                // dimensions: ['一', '二', '三', '四', '五', '六'],
                source: [
                    ['一', '二', '三', '四', '五', '六'],
                    [10, 20, 30, 40, 50, 60],
                ]
            },
            tooltip: {},
            grid: {
                width: '40%',
                left: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: { type: 'category', },
            yAxis: { type: 'value' },
            polar: {
                center: ['75%', '50%'],
                radius: 120
            },
            radiusAxis: { type: 'value', max: 70 },
            angleAxis: { type: 'category' },
            series: [
                seriesLiine, seriesLiine_polar
            ]
        }
        return () => < Base option={option} style={css} />
    }
})