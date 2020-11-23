
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption, EChartTitleOption } from 'echarts'
import Base from '../base'

//title:图表的标题组件

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        
        const textStyle: EChartOption.TextStyleWithRich = {
            color: 'transparent',//设置字体颜色//string;
            fontStyle: 'normal', //'normal' | 'italic' | 'oblique';//'正常'| '斜体'| '斜';
            fontWeight: 'bold',//设置字体粗细 //'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
            // fontFamily?://设置字体 //string;
            fontSize: 18,//设置字体大小 //number;
            lineHeight: 30,//设置行高 //number;
            textBorderColor: '#000',//设置字体描边色 //string;
            textBorderWidth: 1,//设置字体描边宽度// number;
            textShadowColor: '#000',//字体阴影颜色 //string;
            textShadowBlur: 15,//字体阴影模糊长度 //number;
            textShadowOffsetX: 5,//字体阴影x轴方向的偏移 //number;
            textShadowOffsetY: 5,//字体阴影y轴方向的偏移 //number;
            // align: 'center',//'left' 'center'  'right' 
            // verticalAlign: 'middle',//'top' 'middle' 'bottom' 
            rich: {
                a: {
                    fontSize: 25,
                    textBorderColor: '#ff4d4f',
                }
            }
        }
        const subtextStyle: EChartOption.TextStyleWithRich = {
            fontSize: 13,
            lineHeight: 20,
            //width:200,
            //align: 'right',
            //verticalAlign: 'middle',
        }

        const title: EChartTitleOption = {
            show: true,//显示控制
            text: '{a|学}习echarts的title组件',// string;
            link: 'link',//点击标题连接到http://localhost:8080/link// string;
            target: 'self',//如果设置了link,target可以设置link是:'self' 当前webWindow打开;'blank' 新webWindow打开// string;
            textStyle: textStyle,// EChartOption.TextStyleWithRich;
            textAlign: 'auto',//可选值：'auto'、'left'、'right'、'center'
            textVerticalAlign: 'auto',//可选值：'auto'、'top'、'bottom'、'middle'。
            triggerEvent: true,// boolean;

            subtext: '我是副标题',// string;
            //sublink:,// string;
            // subtarget:,// string;
            subtextStyle: subtextStyle,// EChartOption.TextStyleWithRich;

            //内容周围的标题空间。单位是“ px”。
            //每个位置的默认值为5。
            //并且可以使用左，右，上和下将它们设置为不同的值
            padding: 3,//3,[3,3],[3,3,3,3]// number | number[];
            itemGap: 5,//主标题和副标题之间的距离// number;
            // zlevel:,// number;
            // z:,// number;
            left: 'center',//可以是数值像素值,可以是字符百分比值,也可以是'left', 'center', 'right'其中之一 // string | number;
            top: 'center',//可以是数值像素值,可以是字符百分比值,也可以是'top', 'middle', 'bottom'其中之一 // string | number;
            right: 'auto',//可以是数值像素值,可以是字符百分比值 // string | number;
            bottom: 'auto',//可以是数值像素值,可以是字符百分比值 // string | number;
            backgroundColor: '#f6ffed',// string;
            borderColor: '#52c41a',// string;
            borderWidth: 1,// number;
            borderRadius: 3,// number | number[];
            shadowBlur: 15,// number;
            shadowColor: '#52c41a',// number;
            shadowOffsetX: 5,// number;
            shadowOffsetY: 5,// number;
        }
        const option: EChartOption = {
            title: title,
            xAxis: {
                show: false,
                type: 'category',
            },
            yAxis: {
                show: false,
                type: 'value'
            },
            series: [{ type: 'line' }]
        }
        return () => <Base option={option} style={css} />
    }
})