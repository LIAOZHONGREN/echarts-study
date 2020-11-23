import { defineComponent, CSSProperties, ref } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//grid:可以控制直角坐标系组件的大小和位置

export default defineComponent({
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const el = ref<HTMLDivElement>()
        //在直角坐标系中绘制网格。 在单个网格中，最多允许两个X和Y轴。 折线图，条形图和散点图（气泡图）可以绘制在网格中。
        const grid: EChartOption.Grid = {
            show: true,
            left: '10%',//组件的显示方位控制,可以是number类型的像素值,也可以说string类型的百分比(百分比是相对显示节点元素的大小),也可以是'left', 'center', or 'right'其中之一
            top: '20%',//组件的显示方位控制,可以是number类型的像素值,也可以说string类型的百分比,也可以是'top', 'middle', or 'bottom'其中之一
            right: '10%',//可以是number类型的像素值,也可以说string类型的百分比
            bottom: '10%',//可以是number类型的像素值,也可以说string类型的百分比
            width: 'auto',//网格组件的宽度。默认为自适应。
            height: 'auto',//网格组件的高度。默认为自适应。
            containLabel: true,//*格网区域是否包含轴的轴刻度标签。
            backgroundColor: '#f4ffb8',//网格的背景颜色，默认情况下为透明。仅当设置show：true时有效。
            //设置网格组件的边框,不能设置圆角
            borderColor: '#ffa39e',
            borderWidth: 2,
            shadowBlur: 15,
            //设置网格组件的阴影
            shadowColor: '#ffa39e',
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            tooltip: {}// Tooltip
        }
        const option: EChartOption = {
            color: ["#3398DB"],
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: grid,
            xAxis: [{
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                type: "value"
            }],
            series: [{
                name: "直接访问",
                type: "bar",
                barWidth: "60%",
                data: [10, 52, 200, 334, 390, 330, 220]
            }]
        }
        return () => <Base option={option} style={css} />
    }
})