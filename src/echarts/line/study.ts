import { EChartOption } from 'echarts'

const legend: EChartOption.Legend = {

}

export const option: EChartOption = {
    //标题组件
    title: {
        text: '{a|图}表',
        link: 'www.baidu.com',//点击标题连接到http://localhost:8080/www.baidu.com
        target: 'self',//如果设置了link,target可以设置link是:'self' 当前webWindow打开;'blank' 新webWindow打开
        textStyle: {
            align: 'center',//'left' 'center'  'right' 无效果
            verticalAlign: 'top',//'top' 'middle' 'bottom' 无效果
            color: 'rgba(221, 56, 56, 1)',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontFamily: 'Arial',
            fontSize: 13,
            width: 500,//百分比字符或数值
            height: '100%',
            lineHeight: 50,
            textBorderColor: '#000',//字体描边颜色
            textBorderWidth: 1,//字体描边颜色
            textShadowColor: '#fff',//字体阴影颜色
            textShadowBlur: 10,
            textShadowOffsetX: 10,
            textShadowOffsetY: 10,
            //定义富文本样式,可用于text,可定义属性{ color , fontStyle , fontWeight , fontFamily , fontSize , align , verticalAlign , lineHeight , backgroundColor , borderColor , borderWidth , borderRadius , padding , shadowColor , shadowBlur , shadowOffsetX , shadowOffsetY , width , height , textBorderColor , textBorderWidth , textShadowColor , textShadowBlur , textShadowOffsetX , textShadowOffsetY }
            //会继承上层样式
            rich: {
                a: {
                    color: '#fff',
                    fontSize: 18,
                }
            }
        },
        subtext: 'chart',
        sublink: 'www',
        subtarget: 'self',
        subtextStyle: {},//属性同textStyle
        textAlign: 'auto',//可选值：'auto'、'left'、'right'、'center'
        textVerticalAlign: 'auto',//可选值：'auto'、'top'、'bottom'、'middle'。
        padding: 3,//3,[3,3],[3,3,3,3]
        itemGap: 5,//主副标题之间的间距
        left: 'auto',//可以是数值像素值,可以是字符百分比值,也可以是'left', 'center', 'right'其中之一
        top: 'auto',//可以是数值像素值,可以是字符百分比值,也可以是'top', 'middle', 'bottom'其中之一
        right: 'auto',//可以是数值像素值,可以是字符百分比值
        bottom: 'auto',//可以是数值像素值,可以是字符百分比值
        backgroundColor: 'rgba(55, 208, 41, 1)',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,//可以[]
        //  shadowColor:''//
    },
    //图例组件
    legend: {
        type: 'scroll',//'plain'：普通图例;'scroll'：可滚动翻页的图例
        left: 'center',//可以是数值像素值,可以是字符百分比值,也可以是'left', 'center', 'right'其中之一
        top: '3%',//可以是数值像素值,可以是字符百分比值,也可以是'top', 'middle', 'bottom'其中之一
        right: 'auto',//可以是数值像素值,可以是字符百分比值
        bottom: 'auto',//可以是数值像素值,可以是字符百分比值
        width: 300,//number类型
        // height:'auto',
        orient: 'horizontal',//图例的排版类型:横向还是垂直
        align: 'left',//图例标记和文本的对齐方式,表示图例在那边
        padding: 5,//
        itemGap: 10,//图例每项之间的间隔。
        itemWidth: 25,//图例标记的图形宽度。
        itemHeight: 13,//图例标记的图形高度。
        formatter: 'a {name}',//用来格式化图例文本，支持字符串模板和回调函数两种形式。
        selectedMode: true,//图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
        inactiveColor: '#ccc',//图例关闭时的颜色。
        selected: { '邮件营销': false },//图例选中状态表。
        //图例文本样式设置
        textStyle: {
            color: '#69c0ff'
        },
        //图例的 tooltip 配置，配置项同 tooltip。默认不显示，可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip
        tooltip: {
            show: true
        },
        // icon:'circle',//图例项的 icon。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none',可以提供url
        backgroundColor: '#8c8c8c',
        //方便针对每个图例做不同的样式设置
        data: [{ name: '邮件营销' }, { name: '联盟广告', icon: 'circle' }, { name: '视频广告' }, { name: '直接访问' }, { name: '搜索引擎' }],
        //边框设置
        //...
        //阴影设置
        //...
        //滚动模式的图例组件的翻页控件的样式设置
        scrollDataIndex: 0,//legend.type 为 'scroll' 时有效。 图例当前最左上显示项的 dataIndex
        pageButtonItemGap: 5,//图例控制块中，按钮和页信息之间的间隔。
        //...
    },
    //直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。
    grid: {
        left: '10%',//可以是数值像素值,可以是字符百分比值,也可以是'left', 'center', 'right'其中之一
        top: '10%',//可以是数值像素值,可以是字符百分比值,也可以是'top', 'middle', 'bottom'其中之一
        right: '20%',//可以是数值像素值,可以是字符百分比值
        bottom: '20%',//可以是数值像素值,可以是字符百分比值
        width: 'auto',//number表示像素值,string表示0%
        height: 'auto',//
        containLabel: true,//grid 区域是否包括坐标的占位
        backgroundColor: '#666',//看不出效果
        borderColor: 'rgba(232, 37, 37, 1)',//看不出效果
        borderWidth: 1,//看不出效果
        //阴影设置
        //..
        //提示器设置
        tooltip: {}
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}