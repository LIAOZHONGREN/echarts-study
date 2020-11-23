import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//带有涟漪特效动画的散点（气泡）图。利用动画特效可以将某些想要突出的数据进行视觉突出。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '600px', height: '300px', border: 'solid 1px #000' }
        const seriesEffectScatter: EChartOption.SeriesEffectScatter = {
            type: 'effectScatter',
            encode: { x: 0, y: 1 },
            effectType: 'ripple',//特效类型，目前只支持涟漪特效'ripple'。
            showEffectOn: 'render',//配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
            rippleEffect: {//涟漪特效相关配置。
                //@ts-ignore
                color: 'blue',
                period: 5,//动画的周期，秒数。
                scale: 3,//动画中波纹的最大缩放比例。
                brushType: 'stroke',//波纹的绘制方式，可选 'stroke' 和 'fill'。
            },
        }

        const seriesEffectScatter_polar: EChartOption.SeriesEffectScatter = {
            type: 'effectScatter',
            coordinateSystem: 'polar',
            encode: { angle: 0, radius: 1 },
            showEffectOn:'emphasis',
            rippleEffect:{
                scale:5,
            }
        }

        const option: EChartOption = {
            dataset: {
                source: [
                    [10, 10], [20, 20], [30, 30], [40, 40], [50, 50], [60, 60],
                ]
            },
            grid: { containLabel: true, width: '40%', height: '80%', left: '5%', top: 'center' },
            xAxis: { type: 'value' },
            yAxis: { type: 'value' },
            polar: { center: ['75%', '50%'], radius: 120, },
            angleAxis: { type: 'value', max: 70 },
            radiusAxis: { type: 'value', },
            series: [seriesEffectScatter, seriesEffectScatter_polar]
        }
        return () => <Base option={option} style={css} />
    }
})