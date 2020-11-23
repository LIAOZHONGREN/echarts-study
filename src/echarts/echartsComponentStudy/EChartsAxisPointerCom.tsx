
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//axisPointer:坐标轴指示器

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const axisPointer: EChartOption.AxisPointer = {
            //id?: string;
            // link?: object[];//不同轴的 axisPointer 可以进行联动，在这里设置。联动表示轴能同步一起活动。轴依据他们的 axisPointer 当前对应的值来联动。
            triggerOn: 'mousemove|click',//提示框触发的条件,可选值:'mousemove' | 'click' | 'mousemove|click' | 'none';
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
        const option: EChartOption = {
            axisPointer: axisPointer,
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        }
        return () => <Base option={option} style={css} />
    }
})