
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//dataZoom:数据过多不好一下全展示到图表上时用于控制展示一部分数据,且提供切换展示的数据的范围

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const dataZoom_inside: EChartOption.DataZoom = {
            type: 'inside',
            // id?: string;
            disabled: false,//是否停止组件的功能。
            xAxisIndex: 0,//设置组件控制的x轴。不指定时，当orient 为 'horizontal'时，默认控制和 dataZoom 平行的第一个 xAxis。但是不建议使用默认值，建议显式指定。如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
            //yAxisIndex: 0,//设置组件控制的y轴。不指定时，当orient 为 'vertical'时，默认控制和 dataZoom 平行的第一个 xAxis。但是不建议使用默认值，建议显式指定。如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
            //radiusAxisIndex: 0,//组件控制的 radius 轴（即radiusAxis）.如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
            //angleAxisIndex: 0,//设置组件控制的 angle 轴（即angleAxis)
            // singleAxisIndex?: number | number[];
            filterMode: 'filter',//dataZoom 的运行原理是通过 数据过滤 以及在内部设置轴的显示窗口来达到 数据窗口缩放 的效果。数据过滤模式（dataZoom.filterMode）的设置不同，效果也不同。 //'filter' | 'weakFilter' | 'empty' | 'none';
            start: 30,//数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。
            end: 60,//数据窗口范围的结束百分比。范围是：0 ~ 100。
            //startValue: '2015-01-01',//数据窗口范围的起始数值。如果设置了start 则 startValue 失效。//number | string | Date;
            //endValue: '2015-02-24',//数据窗口范围的结束数值。如果设置了 end 则 endValue 失效。//number | string | Date;
            //minSpan: 30,//用于限制窗口最小显示的数据量(总数据量的百分比)，取值范围是 0 ~ 100。
            //maxSpan: 60,//用于限制窗口最大显示的数据量(总数据量的百分比)，取值范围是 0 ~ 100。
            //minValueSpan: 3,//用于限制窗口大小的最小值（实际数值）。如在时间轴上可以设置为：3600 * 24 * 1000 * 5 表示 5 天。 在类目轴上可以设置为 5 表示 5 个类目。//number | string | Date; 
            //maxValueSpan: 5, //number | string | Date;
            orient: 'horizontal',//组件的摆放方式(横向摆放或垂直摆放),当控制的是直角坐标系时,且未配置组件控制的是那个轴组件,那么orient的值是'horizontal'时表示控制x轴;是'vertical'时表示控制y轴//'horizontal'|'vertical'
            zoomLock: false,//是否锁定选择区域（或叫做数据窗口）的大小。如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
            throttle: 100,//设置触发视图刷新的频率。单位为毫秒（ms）
            // rangeMode?: string[],//用于设置坐标组件展示数据的起始范围是start还是startValue控制,和结束范围是end控制还是endValue,可选值:'value'|'percent'
            zoomOnMouseWheel: true,//如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。
            moveOnMouseMove: true,//如何触发数据窗口平移。可选值为： true：表示不按任何功能键，鼠标移动能触发数据窗口平移。 false：表示鼠标移动不能触发平移。'shift'：表示按住 shift 和鼠标移动能触发数据窗口平移。 'ctrl'：表示按住 ctrl 和鼠标移动能触发数据窗口平移。'alt'：表示按住 alt 和鼠标移动能触发数据窗口平移。
            moveOnMouseWheel: true,//如何触发数据窗口平移。可选值为： true：表示不按任何功能键，鼠标滚轮能触发数据窗口平移。false：表示鼠标滚轮不能触发平移。'shift'：表示按住 shift 和鼠标滚轮能触发数据窗口平移。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发数据窗口平移。'alt'：表示按住 alt 和鼠标滚轮能触发数据窗口平移。
            preventDefaultMouseMove: true//是否阻止 mousemove 事件的默认行为。
        }

        const dataZoom_slider: EChartOption.DataZoom = {
            type: 'slider',
            // id?: string;
            show: true,
            backgroundColor: '#bae7ff',
            dataBackground: {
                lineStyle: {
                    color: '#40a9ff',
                    width: 1,
                    type: 'solid',//可选值:'solid' | 'dashed' | 'dotted'
                    shadowBlur: 10,
                    shadowColor: '#40a9ff',
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    opacity: 0.66
                },
                areaStyle: {
                    color: '#91d5ff',
                    shadowBlur: 10,
                    shadowColor: '#91d5ff',
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    opacity: 0.66
                }
            },
            fillerColor: '#87e8de',//选中范围的填充颜色
            borderColor: '#e6f7ff',
            //handleIcon: '',//滑条手柄的 icon 形状，支持路径字符串:'path://...';可以通过 'image://url' 设置为图片
            handleSize: '100%',//控制手柄的尺寸，可以是像素大小，也可以是相对于 dataZoom 组件宽度的百分比，默认跟 dataZoom 宽度相同。
            handleStyle: {
                color: '#096dd9',//可以使用渐变色
                borderColor: '#9254de',
                borderWidth: 1,
                borderType: 'solid',//可选值:'solid', 'dashed', 'dotted'
                shadowBlur: 10,
                shadowColor: '#9254de',
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                opacity: 1,
            },
            //labelPrecision: 2,//显示label的小数精度。默认根据数据自动决定。
            // labelFormatter?: string | Function;
            showDetail: true,//是否显示detail，即拖拽时候显示详细数值信息。
            //showDataShadow: 'auto',//是否在 dataZoom-silder 组件中显示数据阴影。数据阴影可以简单地反应数据走势。
            realtime: false,//拖动时，是否实时更新系列的视图。如果设置为 false，则只在拖拽结束的时候更新。
            textStyle: {
                color: '#ff7a45',
                // color: 'rgba(0,0,0,0)',
                //textBorderColor: '#000',//无效果
                //textBorderWidth: 1,
                //textShadowColor: '#ff7a45',//无效果
                //textShadowBlur: 10,
                //textShadowOffsetX: 3,
                //textShadowOffsetY: 3,
                fontWeight: 'bold',
            },
            xAxisIndex: 0,//设置组件控制的x轴。不指定时，当orient 为 'horizontal'时，默认控制和 dataZoom 平行的第一个 xAxis。但是不建议使用默认值，建议显式指定。如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
            //yAxisIndex: 0,//设置组件控制的y轴。不指定时，当orient 为 'vertical'时，默认控制和 dataZoom 平行的第一个 xAxis。但是不建议使用默认值，建议显式指定。如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
            //radiusAxisIndex: 0,//组件控制的 radius 轴（即radiusAxis）.如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴。
            //angleAxisIndex: 0,//设置组件控制的 angle 轴（即angleAxis)
            // singleAxisIndex?: number | number[];
            filterMode: 'filter',//dataZoom 的运行原理是通过 数据过滤 以及在内部设置轴的显示窗口来达到 数据窗口缩放 的效果。数据过滤模式（dataZoom.filterMode）的设置不同，效果也不同。 //'filter' | 'weakFilter' | 'empty' | 'none';
            //start: 30,//数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。
            //end: 60,//数据窗口范围的结束百分比。范围是：0 ~ 100。
            //startValue: '2015-01-01',//数据窗口范围的起始数值。如果设置了start 则 startValue 失效。//number | string | Date;
            //endValue: '2015-02-24',//数据窗口范围的结束数值。如果设置了 end 则 endValue 失效。//number | string | Date;
            //minSpan: 30,//用于限制窗口最小显示的数据量(总数据量的百分比)，取值范围是 0 ~ 100。
            //maxSpan: 60,//用于限制窗口最大显示的数据量(总数据量的百分比)，取值范围是 0 ~ 100。
            //minValueSpan: 3,//用于限制窗口大小的最小值（实际数值）。如在时间轴上可以设置为：3600 * 24 * 1000 * 5 表示 5 天。 在类目轴上可以设置为 5 表示 5 个类目。//number | string | Date; 
            //maxValueSpan: 5, //number | string | Date;
            orient: 'horizontal',//组件的摆放方式(横向摆放或垂直摆放),当控制的是直角坐标系时,且未配置组件控制的是那个轴组件,那么orient的值是'horizontal'时表示控制x轴;是'vertical'时表示控制y轴//'horizontal'|'vertical'
            zoomLock: false,//是否锁定选择区域（或叫做数据窗口）的大小。如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
            throttle: 100,//设置触发视图刷新的频率。单位为毫秒（ms）
            // rangeMode?: string[],//用于设置坐标组件展示数据的起始范围是start还是startValue控制,和结束范围是end控制还是endValue,可选值:'value'|'percent'
            // zlevel?: number;
            // z?: number;
            // left?: string | number;
            // top?: string | number;
            // right?: string | number;
            // bottom?: string | number;
        }

        const option: EChartOption = {
            color: ["#3398DB"],
            xAxis: {
                data: ["2014-07-14", "2014-07-15", "2014-07-16", "2014-07-17", "2014-07-18", "2014-07-19", "2014-07-20", "2014-07-21", "2014-07-22", "2014-07-23", "2014-07-24", "2014-07-25", "2014-07-26", "2014-07-27", "2014-07-28", "2014-07-29", "2014-07-30", "2014-07-31", "2014-08-01", "2014-08-02", "2014-08-03", "2014-08-05", "2014-08-06", "2014-08-07", "2014-08-08", "2014-08-09", "2014-08-10", "2014-08-11", "2014-08-12", "2014-08-13", "2014-08-14", "2014-08-15", "2014-08-16", "2014-08-17", "2014-08-18", "2014-08-19", "2014-08-20", "2014-08-21", "2014-08-22", "2014-08-23", "2014-08-24", "2014-08-25", "2014-08-26", "2014-08-27", "2014-08-28", "2014-08-29", "2014-08-30", "2014-08-31", "2014-09-01", "2014-09-03", "2014-09-04", "2014-09-05", "2014-09-06", "2014-09-07", "2014-09-08", "2014-09-09", "2014-09-10", "2014-09-11", "2014-09-12", "2014-09-13", "2014-09-14", "2014-09-15", "2014-09-16", "2014-09-17", "2014-09-18", "2014-09-19", "2014-09-20", "2014-09-21", "2014-09-22", "2014-09-23", "2014-09-24", "2014-09-25", "2014-09-26", "2014-09-27", "2014-09-28", "2014-09-29", "2014-09-30", "2014-10-01", "2014-10-02", "2014-10-03", "2014-10-04", "2014-10-05", "2014-10-06", "2014-10-07", "2014-10-08", "2014-10-09", "2014-10-10", "2014-10-11", "2014-10-14", "2014-10-15", "2014-10-16", "2014-10-17", "2014-10-18", "2014-10-19", "2014-10-20", "2014-10-21", "2014-10-22", "2014-10-23", "2014-10-24", "2014-10-25", "2014-10-26", "2014-10-27", "2014-10-28", "2014-10-29", "2014-10-30", "2014-10-31", "2014-11-01", "2014-11-03", "2014-11-04", "2014-11-05", "2014-11-07", "2014-11-08", "2014-11-09", "2014-11-10", "2014-11-11", "2014-11-13", "2014-11-14", "2014-11-15", "2014-11-16", "2014-11-17", "2014-11-18", "2014-11-19", "2014-11-23", "2014-11-24", "2014-11-25", "2014-11-26", "2014-11-27", "2014-11-28", "2014-11-29", "2014-12-01", "2014-12-02", "2014-12-03", "2014-12-05", "2014-12-06", "2014-12-07", "2014-12-08", "2014-12-09", "2014-12-10", "2014-12-11", "2014-12-13", "2014-12-14", "2014-12-15", "2014-12-17", "2014-12-19", "2014-12-22", "2014-12-23", "2014-12-25", "2014-12-26", "2014-12-27", "2014-12-28", "2014-12-29", "2014-12-30", "2015-01-01", "2015-01-02", "2015-01-03", "2015-01-04", "2015-01-05", "2015-01-06", "2015-01-07", "2015-01-08", "2015-01-09", "2015-01-10", "2015-01-11", "2015-01-12", "2015-01-13", "2015-01-14", "2015-01-15", "2015-01-16", "2015-01-17", "2015-01-18", "2015-01-19", "2015-01-20", "2015-01-22", "2015-01-23", "2015-01-24", "2015-01-25", "2015-01-26", "2015-01-28", "2015-01-29", "2015-01-31", "2015-02-01", "2015-02-02", "2015-02-03", "2015-02-05", "2015-02-06", "2015-02-09", "2015-02-10", "2015-02-11", "2015-02-12", "2015-02-13", "2015-02-14", "2015-02-15", "2015-02-16", "2015-02-18", "2015-02-19", "2015-02-20", "2015-02-21", "2015-02-22", "2015-02-23", "2015-02-24"]
            },
            yAxis: {},
            dataZoom: [dataZoom_inside, dataZoom_slider],
            series: [
                {
                    name: "Beijing AQI",
                    type: "bar",
                    data: [156, 140, 133, 186, 182, 106, 119, 68, 54, 82, 90, 134, 188, 194, 159, 159, 169, 244, 199, 163, 149, 80, 67, 162, 140, 143, 125, 76, 119, 70, 104, 109, 159, 124, 135, 150, 164, 169, 83, 155, 75, 59, 78, 136, 103, 104, 176, 89, 127, 54, 100, 140, 186, 200, 61, 109, 111, 114, 97, 94, 66, 54, 87, 80, 84, 117, 168, 129, 127, 64, 60, 144, 170, 58, 87, 70, 53, 92, 78, 123, 95, 54, 68, 200, 314, 379, 346, 233, 80, 73, 76, 132, 211, 289, 250, 82, 99, 163, 267, 353, 78, 72, 88, 140, 206, 204, 65, 59, 150, 79, 63, 93, 80, 95, 59, 65, 77, 143, 98, 64, 93, 282, 155, 94, 196, 293, 83, 114, 276, 54, 65, 51, 62, 89, 65, 82, 276, 153, 52, 69, 113, 82, 99, 53, 103, 100, 73, 155, 243, 155, 125, 65, 65, 79, 200, 226, 122, 60, 85, 190, 105, 208, 59, 160, 211, 265, 386, 118, 89, 94, 77, 113, 143, 257, 117, 185, 119, 65, 87, 60, 108, 188, 143, 62, 100, 152, 166, 55, 59, 175, 293, 326, 153, 73, 267, 183, 394, 158, 86, 207]
                }
            ]
        }
        return () => <Base option={option} style={css} />
    }
})