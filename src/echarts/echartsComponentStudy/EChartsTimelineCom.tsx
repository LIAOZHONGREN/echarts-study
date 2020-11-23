
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { Timeline } from '../../types/echarts'

//timeline 组件，提供了在多个 ECharts option 间进行切换、播放等操作的功能。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const timeline: Timeline = {
            show: true,//控制时间线组件的控件的显示控制
            type: 'slider',
            axisType: 'category',
            currentIndex: 0,//初始化从那个时间节点开始
            autoPlay: true,
            rewind: false,
            loop: false,//开启自动播放后默认循环播放.设置循环播放为false,播放到最后一个时间节点后自动停止播放
            playInterval: 1000,//自动播放时播放到下一个时间节点所需要的时间,单位毫秒
            realtime: false,
            controlPosition: 'left',
            // zlevel?: number,
            // z?: number,
            //left: '5%',//默认居中
            //top: 'bottom',
            // right?: number | string,
            //bottom?: number | string,
            // padding?: number | number[],
            orient: 'horizontal',//'vertical'排布控件混乱
            inverse: 0,
            symbol: 'roundRect',
            symbolSize: [8, 8],
            symbolRotate: -45,
            // symbolKeepAspect?: boolean,
            symbolOffset: [0, 0],
            lineStyle: {
                show: true,
                color: '#91d5ff',
                width: 1,
                type: 'dashed',
                shadowBlur: 10,
                shadowColor: '#1890ff',
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                opacity: 0.88,
            },
            label: {
                color: '#fadb14'
            },
            itemStyle: {
                color: '#fff',
                borderColor: '#87e8de',
                borderWidth: 1,
                borderType: 'solid',
                // shadowBlur?: number,
                // shadowColor?: string,
                // shadowOffsetX?: number,
                // shadowOffsetY?: number,
                // opacity?: number
            },
            checkpointStyle: {
                symbol: 'roundRect',
                symbolSize: [15, 15],
                symbolRotate: -45,
                // symbolKeepAspect?: boolean,
                // symbolOffset?: Array < number | string >,
                color: '#ff7875',
                borderColor: '#ffa39e',
                borderWidth: 1,
                animation: true,
                animationDuration: 300,
                animationEasing: 'elasticInOut'
            },
            controlStyle: {
                show: true,
                showPlayBtn: true,
                showPrevBtn: true,
                showNextBtn: true,
                itemSize: 15,
                itemGap: 10,
                //position?: 'left' | 'right' | 'top' | 'bottom',
                //playIcon?: string,
                //stopIcon?: string,
                //prevIcon?: string,
                //nextIcon?: string,
                color: '#8c8c8c',
                borderColor: '#595959',
                borderWidth: 1
            },
            emphasis: {
                label: { color: '#a0d911' },
                itemStyle: { color: '#a0d911' },
                // checkpointStyle: { color: '#a0d911', borderColor: '#a0d911' },//无效果
                controlStyle: { color: '#a0d911', borderColor: '#a0d911' },
            },
            data: [{ value: 1, symbolSize: [13, 13], tooltip: { formatter: '我是特殊的' } }, 2, 3],
        }
        const option: { baseOption: EChartOption, options: EChartOption[] } = {
            baseOption: {
                timeline: timeline,
                grid: {
                    containLabel: true,
                },
                xAxis: { type: 'category', data: ['一', '二', '三'] },
                yAxis: { type: 'value' },
                series: [{
                    type: 'bar'
                }],
                tooltip: {}
            },
            options: [
                { series: [{ data: [30, 60, 90] }] },
                { series: [{ data: [60, 90, 120] }] },
                { series: [{ data: [90, 120, 150] }] },
            ]
        }
        return () => <Base option={option} style={css} />
    }
})