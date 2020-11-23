
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//tooltip:信息提到浮层组件

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const tooltip: EChartOption.Tooltip = {
            show: true,
            trigger: 'axis',//触发类型。可选值:'item'(鼠标在item上才触发显示tooltip组件),'axis'(鼠标进入坐标系,显示距离鼠标最近的item的信息的tooltip组件,组件跟随鼠标),'none'(说明都不触发)
            //axisPointer:{},//坐标轴指示器配置项。
            showContent: true,//是否显示提示框浮层，默认显示。只需tooltip触发事件或显示axisPointer而不需要显示内容时可配置该项为false。
            alwaysShowContent: false,//是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏，设置为 true 可以保证一直显示提示框内容。
            triggerOn: 'mousemove|click',//提示框触发的条件.可选值:'mousemove' | 'click' | 'mousemove|click' | 'none'
            showDelay: 0,//浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
            hideDelay: 100,//浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效。
            enterable: false,//鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
            renderMode: 'html',//浮层的渲染模式，默认以 'html 即额外的 DOM 节点展示 tooltip；此外还可以设置为 'richText' 表示以富文本的形式渲染，渲染的结果在图表对应的 Canvas 中（目前 SVG 尚未支持富文本），这对于一些没有 DOM 的环境（如微信小程序）有更好的支持。
            confine: true,//是否将 tooltip 框限制在图表的区域内。当图表外层的 dom 被设置为 'overflow: hidden'，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。
            //appendToBody:false,//是否将 tooltip 的 DOM 节点添加为 HTML 的 <body> 的子节点。只有当 renderMode 为 'html' 是有意义的。默认值是 false
            transitionDuration: 0.4,//提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
            //position?: Tooltip.Position.Type//提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。可选：Array 通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。也可以是一个回调方法,详细是使用看官方详细的文档
            //formatter?: string | Tooltip.Formatter //tooltip组件展示的数据格式,可以编写html
            formatter: (p, t, cb) => {
                // @ts-ignore
                p = p as EChartOption.Tooltip.Format
                const html = `<div>{a}</div></br>${'ooo'}`
                //cb(t, html)
                return html
            },
            backgroundColor: '#ffccc7',
            borderColor: 'red',
            borderWidth: 1,
            padding: 3,
            textStyle: {
                // color:'rgba(0,0,0,0)',
                // textBorderColor:'red',//无效果
                // textBorderWidth:1,
                fontWeight: 'bold'
            },
            extraCssText: 'color:red'//额外附加到浮层的 css 样式。

        }
        const option: EChartOption = {
            tooltip: tooltip,
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