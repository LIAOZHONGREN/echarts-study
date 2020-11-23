import { defineComponent, CSSProperties, ref } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

export default defineComponent({
    setup() {
        const css: CSSProperties = { width: '400px', height: '300px', border: 'solid 1px #000' }
        const el = ref<HTMLDivElement>()
        //轴线相关设置
        const axisLine: EChartOption.BasicComponents.Line = {
            show: true,//设置使用此轴线设置对象的轴组件的轴线是否显示
            onZero: true,//X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效。
            onZeroAxisIndex: 0,//当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上。
            symbol: ['none', 'arrow'],//设置轴两端的图标,官方提供可选值:'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'//string | string[];
            symbolSize: [8, 6],//轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）
            symbolOffset: [0, 5],//轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移。
            lineStyle: {//EChartOption.LineStyle
                color: '#1890ff', //{ type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },//string | string[];
                width: 1,// 轴线宽度
                type: 'dashed',//轴线类型,可选值:'solid' | 'dashed' | 'dotted';
                //轴线的阴影设置
                shadowBlur: 5,
                shadowColor: '#1890ff',
                shadowOffsetX: 5,
                shadowOffsetY: 5,
                opacity: 1//轴线的透明的
            }
        }

        //坐标轴刻度相关设置
        const axisTick: EChartOption.BasicComponents.CartesianAxis.Tick = {
            show: true,//轴刻度的显示控制
            alignWithLabel: true,//控制刻度是否与标签对齐,类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
            //interval: 'auto',//坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推。可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：(index:number, value: string) => boolean 第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 false。
            inside: false,//坐标轴刻度是否朝内，默认朝外
            length: 30,//坐标轴刻度的长度。
            //设置刻度线的样式
            lineStyle: {
                color: '#b7eb8f',
                type: 'dashed',
                width: 3,
                shadowBlur: 5,
                shadowColor: '#b7eb8f',
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                opacity: 1//轴线的透明的
            }
        }

        //坐标轴刻度标签的相关设置
        const axisLabel: EChartOption.BasicComponents.CartesianAxis.Label = {
            show: true,//坐标轴刻度标签的显示控制
            interval: 0,//坐标轴刻度标签的显示间隔，在类目轴中有效。
            inside: false,//刻度标签是否朝内，默认朝外。
            rotate: -20,//刻度标签的旋转角度
            margin: 10,//刻度标签与轴线之间的距离。
            formatter: (value: string, index: number) => {
                if (index === 0) return `{a|${value[0]}}${value.slice(1)}`
                return `a_${value}`
            },//等同'{a_value}'
            //showMinLabel?: boolean;//是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
            // showMaxLabel?: boolean;//是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）。

            // color?: string;
            // fontStyle?: 'normal' | 'italic' | 'oblique';
            // fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
            // fontFamily?: string;
            // fontSize?: number;
            // lineHeight?: number;
            // width?: number | string;
            // height?: number | string;
            // textBorderColor?: string;
            // textBorderWidth?: number;
            // textShadowColor?: string;
            // textShadowBlur?: number;
            // textShadowOffsetX?: number;
            // textShadowOffsetY?: number;

            // align?: string;
            // verticalAlign?: string;
            // backgroundColor?: string | object;//object:{image: 'xxx/xxx.jpg'} 可以显示图片
            // borderColor?: string;
            // borderWidth?: number;
            // borderRadius?: number;
            // padding?: number | number[];
            // shadowColor?: string;
            // shadowBlur?: number;
            // shadowOffsetX?: number;
            // shadowOffsetY?: number;

            rich: { a: { color: 'transparent', textBorderColor: '#ff4d4f', textBorderWidth: 1, fontSize: 20, fontWeight: 'bold' } }
        }

        //坐标轴在 grid 区域中的分隔线。
        const splitLine: EChartOption.BasicComponents.CartesianAxis.SplitLine = {
            show: true,//默认不显示
            //interval?: number | Function//坐标轴分隔线的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。默认会采用标签不重叠的策略间隔显示标签。
            //分隔线样式
            lineStyle: {
                type: 'dashed',
            }
        }

        //坐标轴在 grid 区域中的分隔区域，默认不显示。
        const splitArea: EChartOption.BasicComponents.CartesianAxis.SplitArea = {
            //interval?: number | Function;//坐标轴分隔区域的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
            show: true,
            // areaStyle?: {
            //     color?: string[];
            //     shadowBlur?: number;
            //     shadowColor?: string;
            //     shadowOffsetX?: number;
            //     shadowOffsetY?: number;
            //     opacity?: number;
            // };
        }

        //坐标轴指示器配置项。
        const axisPointer: EChartOption.BasicComponents.CartesianAxis.Pointer = {
            show: true,//默认为true
            type: 'shadow',//指示器类型,可选值有:'line' | 'shadow' | 'none';
            snap: false,//坐标轴指示器是否自动吸附到点上。默认自动判断.这个功能在数值轴和时间轴上比较有意义，可以自动寻找细小的数值点。
            // z?: number;
            //指示器标签,(标签值取的时轴刻度标签)
            label: {
                show: true,
                // precision?: number | string;//文本标签中数值的小数点精度。默认根据当前轴的值自动判断。也可以指定如 2 表示保留两位小数。
                // formatter?: string | Function;
                // margin?: number;
                // color?: string;
                // fontStyle?: 'normal' | 'italic' | 'oblique';
                // fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
                // fontFamily?: string;
                // fontSize?: number;
                // lineHeight?: number;
                // backgroundColor: 'transparent',//string | object;
                //borderColor:'transparent', 
                // borderWidth?: number;
                // borderRadius?: number;
                // padding?: number | number[];
                // shadowColor?: string;
                // shadowBlur?: number;
                // shadowOffsetX?: number;
                // shadowOffsetY?: number;
                // width?: number | string;
                // height?: number | string;
                // textBorderColor?: string;
                // textBorderWidth?: number;
                // textShadowColor?: string;
                // textShadowBlur?: number;
                // textShadowOffsetX?: number;
                // textShadowOffsetY?: number;
            },
            lineStyle: {//指示器类型为线时,指示线的样式
                type: 'dotted',
                color: '#ff9c6e',
            },
            shadowStyle: {//指示器类型为阴影块时,指示阴影块的样式
                color: '#ff9c6e',
                // shadowBlur?: number;
                // shadowColor?: string;
                // shadowOffsetX?: number;
                // shadowOffsetY?: number;
                opacity: 0.3,
            },
            triggerTooltip: false,//是否触发 tooltip。如果不想触发 tooltip 可以关掉。
            value: 3,//设置指示器的初始位置
            //status: false,//当前的状态,无效果
            handle: {
                show: true,
                // icon?: any;
                size: 20,//number | number[];
                // margin?: number;
                // color?: string;
                // throttle?: number;//手柄拖拽时触发视图更新周期，单位毫秒，调大这个数值可以改善性能，但是降低体验。
                // shadowBlur?: number;
                // shadowColor?: string;
                // shadowOffsetX?: number;
                // shadowOffsetY?: number;
            }
        }


        //坐标轴次刻度线相关设置。次刻度线无法在类目轴（type: 'category'）中使用。
        const minorTick: EChartOption.BasicComponents.CartesianAxis.MinorTick = {
            show: true,
            splitNumber: 10,//次刻度线分割数，默认会分割成 5 段
            length: 10,//刻度长度
            // lineStyle?: LineStyle;
        }

        //坐标轴在 grid 区域中的次分隔线。次分割线会对齐次刻度线 minorTick
        const minorSplitLine: EChartOption.BasicComponents.CartesianAxis.MinorSplitLine = {
            show: true,
            lineStyle: {
                color: '#fadb14'
            }
        }

        const xAxis: EChartOption.XAxis = {
            show: true,//显示控制
            //gridIndex:0,//设置此x轴组件放在那个网格组件,一般自动分配,不需设置
            offset: 0,//该轴相对于默认位置的偏移(负数为向内偏移).当这种类型的多轴具有相同的位置值时很有用。
            name: '{a|我}是轴名称',//默认显示在轴的右边
            nameLocation: 'center',//轴名称的位置,可选值有:'start' | 'center' | 'end'
            nameTextStyle: { rich: { a: { color: 'rgab(0,0,0,0)', textBorderColor: '#40a9ff', textBorderWidth: 1, fontSize: 20, fontWeight: 'bold' } } },//轴名称的文本样式设置对象
            nameGap: 40,//轴名称与轴之间的间隔
            nameRotate: -10,//设置轴名称的旋转角度
            inverse: false,//是否把轴反正(x轴就是左右反转,y轴是上下反转)
            boundaryGap: true,//坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样,类型:boolean | (string | number)[]
            min: 0,//设置为1,'Tue'和(value) => value.min + 1会得到同样的结果//设置轴的最小值,类型:number | string | ((value: { min: number; max: number }) => number);
            max: 6,//设置为5,'Sat'和(value) => value.max - 1会得到同样的结果//设置轴的最大值,类型:number | string | ((value: { min: number; max: number }) => number);
            scale: false,//只在数值轴中（type: 'value'）有效。是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。在设置 min 和 max 之后该配置项无效。
            splitNumber: 5,//坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。在类目轴中无效。
            //minInterval:1,//自动计算的坐标轴最小间隔大小。例如可以设置成1保证坐标轴分割刻度显示成整数;例如,在时间轴上（类型为“时间”）,可以将其设置为“ 3600 *24 *1000”，以确保轴标签之间的间隔小于或等于一天。只在数值轴或时间轴中（type: 'value' 或 'time'）有效。
            //interval:0,//自动计算的坐标轴最小间隔大 因为 splitNumber 是预估的值，实际根据策略计算出来的刻度可能无法达到想要的效果，这时候可以使用 interval 配合 min、max 强制设定刻度划分，一般不建议使用。无法在类目轴中使用。在时间轴（type: 'time'）中需要传时间戳，在对数轴（type: 'log'）中需要传指数值。
            //logBase:10,//对数轴的底数，只在对数轴中（type: 'log'）有效。
            //silent: false,//坐标轴是否是静态无法交互。
            triggerEvent: true,//坐标轴的标签是否响应和触发鼠标事件，默认不响应。
            axisLine: axisLine,//坐标轴轴线相关设置。
            axisTick: axisTick,
            axisLabel: axisLabel,
            splitLine: splitLine,
            splitArea: splitArea,
            axisPointer: axisPointer,
            type: "category",//轴类型,可选值:"category" | "value" | "time" | "log"
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],//[{value:string|number,textStyle?: TextStyleWithRich}]
        }

        const option: EChartOption = {
            color: ["#3398DB"],
            //axisPointer:axisPointer,
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: {
                show: true,
                width: 280,
                height: 210,
                left: 'center',
                top: 60,
                containLabel: true,
                backgroundColor: '#f6ffed'
            },
            xAxis: [xAxis],
            yAxis: [{
                type: "value",
                axisPointer: {
                    show: true,
                    type: 'line',
                    triggerTooltip: false,
                    value: 100,
                    handle: {
                        show: true,
                        size: 20,
                        margin: 75,
                    }
                }
            }],
            series: [{
                name: "直接访问",
                type: "bar",
                barWidth: "60%",
                data: [10, 52, 200, 334, 390, 330, 220]
            }]
        }

        function func(x: number) {
            x /= 10;
            return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
        }

        function generateData() {
            let data = [];
            for (let i = -200; i <= 200; i += 0.1) {
                data.push([i, func(i)]);
            }
            return data;
        }

        const option2: EChartOption = {
            animation: false,
            grid: {
                top: 40,
                left: 50,
                right: 40,
                bottom: 50
            },
            xAxis: {
                name: 'x',
                minorTick: minorTick,
                splitLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                minorSplitLine: minorSplitLine
            },
            yAxis: {
                name: 'y',
                min: -100,
                max: 100,
                minorTick: {
                    show: true
                },
                splitLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                minorSplitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd'
                    }
                }
            },
            dataZoom: [{
                show: true,
                type: 'inside',
                filterMode: 'none',
                xAxisIndex: [0],
                startValue: -20,
                endValue: 20
            }, {
                show: true,
                type: 'inside',
                filterMode: 'none',
                yAxisIndex: [0],
                startValue: -20,
                endValue: 20
            }],
            series: [
                {
                    type: 'line',
                    showSymbol: false,
                    clipOverflow: true,
                    data: generateData()
                }
            ]
        }

        return () => (
            <div>
                < Base option={option} style={{ ...css, marginBottom: '10px' }} />
                < Base option={option2} style={css} />
            </div>
        )
    }
})