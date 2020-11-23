import { defineComponent, CSSProperties, ref } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { option } from '../line/study'

//legend:图表的图例展示组件

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const legend: EChartOption.Legend = {
            type: 'scroll',//图例的显示类型,plain:普通类型(显示空间不够时会被折叠后隐藏),scroll:翻页滚动(显示空间不够时会出现翻页控件进行翻页显示)
            show: true,//组件的显示控制
            left: 'center',//组件的显示方位控制,可以是number类型的像素值,也可以说string类型的百分比(百分比是相对显示节点元素的大小),也可以是'left', 'center', or 'right'其中之一
            top: '5%',//组件的显示方位控制,可以是number类型的像素值,也可以说string类型的百分比,也可以是'top', 'middle', or 'bottom'其中之一
            right: 'auto',//可以是number类型的像素值,也可以说string类型的百分比
            bottom: 'auto',//可以是number类型的像素值,也可以说string类型的百分比
            //width: 200,//图例组件的宽度。默认为自适应
            //height: 50,//图例组件的高度。默认为自适应
            orient: 'horizontal',//图例的布局方向,默认值为'horizontal',可选值有:'horizontal' , 'vertical'
            align: 'auto',//图例图标和文本对齐方式,可选值有'auto' | 'left' | 'right';
            padding: 5,//内容周围的图例空间。单位为px。每个位置的默认值为5。并且可以使用左，右，上和下将它们设置为不同的值。
            itemGap: 10,//每个图例之间的距离，水平布局中的水平距离，和垂直距离在垂直布局中。
            itemWidth: 25,//图例图标的图像宽度
            itemHeight: 14,//图例图标的图像高度
            symbolKeepAspect: true,//是否当图例图标是自定义的通过url显示的,改变图标宽高或自适应是保持图标不变形
            formatter: (name) => `A_${name}`,//字符串模板:'A_{name}' //Formatter用于格式化图例标签，支持字符串模板和回调函数。
            selectedMode: 'multiple',//图例的选定模式，该模式控制是否可以通过单击图例来切换显示系列。 默认情况下处于启用状态，您可以将其设置为false以禁用它。 此外，对于单选和多选，可以将其设置为“单选”或“多选”。//boolean | 'single' | 'multiple'
            inactiveColor: '#ccc',//图例未选择时的图例颜色。
            selected: { 'Forest': false },//用于初始化那图例的选中状态(所有图例都是默认选中,可以通过selected设置初始为选中的图例)
            textStyle: { color: '#d3f261' },//统一的设置图例的text的样式//EChartOption.TextStyleWithRich
            tooltip: {},//鼠标在图例上是显示的提示组件//EChartOption.Tooltip
            icon: 'roundRect',//设置图例图标,官方可选值有:'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none',也可以通过'image//:url'或'path://'引入自定义图标
            data: [{ name: 'Forest' }, { name: 'Steppe', textStyle: { color: '#000' }, icon: 'circle', }, { name: 'Desert' }, { name: 'Wetland' }],//图例的数据数组。数组项通常是代表字符串的名称。不提供时图例组件将根据系列自动计算颜色和图标。如果需要为单个项目设置样式，则还可以设置其配置。
            backgroundColor: '#bae7ff',//图例组件的背景色,默认为:'transparent'
            //图例组件的边框样式
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 3,
            //图例组件的阴影设置
            shadowBlur: 15,
            shadowColor: '#bae7ff',
            shadowOffsetX: 3,
            shadowOffsetY: 3,
            scrollDataIndex: 0,//当当前的图例组件是scroll的显示状态时,设置初始化滚动控件显示的第一个图例的索引值
            pageButtonItemGap: 5,//当当前的图例组件是scroll的显示状态时,用于设置左右翻页按键与中间页码文本的间距
            pageButtonGap: 5,//当当前的图例组件是scroll的显示状态时,用于设置翻页控件与图例显示控件之间的间距
            pageButtonPosition: 'end',//当当前的图例组件是scroll的显示状态时,用于控制翻页控件在图例组件是横向布局时是在图例显示控件的左还是右,是垂直布局时是在图例显示控件的上还是下
            pageFormatter: '{current}-{total}',//设置翻页控件的页面显示格式,默认为:'{current}/{total}',
            //pageIcons: { horizontal: [], vertical: [] },//设置翻页控件的按钮图标,horizontal和vertical都是字符串数值,用于分别设置图例组件横向和垂直布局时左右两端的翻页按键图标(通过'image//:url'或'path://'引入自定义图标的地址文本),
            pageIconColor: '#1890ff',//设置翻页控件按钮的颜色
            pageIconInactiveColor: '#69c0ff',//设置翻页控件按钮在非活动状态的颜色
            pageIconSize: 10,//设置翻页控件按钮的大小。它可以是数字，也可以是[10，3]之类的数组，表示[width，height]。
            pageTextStyle: { textBorderColor: '#f5222d', textBorderWidth: 1, fontWeight: 'bold', fontSize: 13, },//设置翻页控件页面文本的text样式(字体描边无效)
            animation: true,//当当前的图例组件是scroll的显示状态时,是否使用翻页动画
            animationDurationUpdate: 300,//翻页动画持续的时间,单位毫秒
        }
        const option_: EChartOption = {
            color: ["#003366", "#006699", "#4cabce", "#e5323e"],
            dataset: {
                source: [
                    ["type", "2012", "2013", "2014", "2015", "2016"],
                    ["Forest", 320, 332, 301, 334, 390],
                    ["Steppe", 220, 182, 191, 234, 290],
                    ["Desert", 150, 232, 201, 154, 190],
                    ["Wetland", 98, 77, 101, 99, 40]
                ]
            },
            legend: legend,
            grid: {
                left: '10%',
                top: '20%',
                right: '10%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {
                type: "category",
                axisTick: {
                    show: false
                }
            },
            yAxis: {},
            series: [{
                type: "bar",
                seriesLayoutBy: "row"
            }, {
                type: "bar",
                seriesLayoutBy: "row"
            }, {
                type: "bar",
                seriesLayoutBy: "row"
            }, {
                type: "bar",
                seriesLayoutBy: "row"
            }]
        }
        return () => <Base option={option_} style={css} />
    }
})