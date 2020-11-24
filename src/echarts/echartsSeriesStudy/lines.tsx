
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const seriesLines: EChartOption.SeriesLines = {
            type: 'lines',
            coordinateSystem: 'cartesian2d',//'cartesian2d'|'geo'
            //xAxisIndex: 0,
            //yAxisIndex: 0,
            //geoIndex: 0,
            /**
             * 默认为 false，只能用于绘制只有两个端点的线段，线段可以通过 lineStyle.curveness 配置为曲线。
             * 如果该配置项为 true，则可以在 data.coords 中设置多于 2 个的顶点用来绘制多段线，在绘制路线轨迹的时候比较有用，见示例 北京公交路线，设置为多段线后 lineStyle.curveness 无效。 
             * */
            polyline: true,
            //线特效的配置，
            effect: {
                show: true,
                period: 4,//特效动画的时间，单位为 s。
                delay: 0,//特效动画的延时，支持设置成数字或者回调。单位ms
                constantSpeed: 50,//配置特效图形的移动动画是否是固定速度，单位像素/秒，设置为大于 0 的值后会忽略 period 配置项。
                symbol: 'arrow',//特效图形的标记。
                symbolSize: 10,
                color: 'blue',
                trailLength: 0.2,//特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
                loop: true
            },
            /**是否启用大规模路径图的优化，在数据图形特别多的时候（>=5k）可以开启。
             * 开启后配合 largeThreshold 在数据量大于指定阈值的时候对绘制进行优化。
             * 缺点：优化后不能自定义设置单个数据项的样式，不能启用 effect。 
             * */
            large: false,
            largeThreshold: 2000,
            //symbol: '',//线两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。
            //symbolSize:,
            //lineStyle: {},
            //label: {},
            //emphasis: {},
            //progressive: 400,
            //progressiveThreshold: 3000,
            data: [{ coords: [[0, 0], [30, 200], [150, 0]] }, { coords: [[0, 0], [100, 240]], lineStyle: { curveness: 0.5 } }],
            //markPoint: {},
            //markLine: {},
            //markArea: {},
            silent: false,
            //...
        }

        const option: EChartOption = {
            grid: { width: '80%', height: '80%', left: 'center', top: 'center' },
            xAxis: { type: 'value', min: 0, max: 240 },
            yAxis: { type: 'value', min: 0, max: 240 },
            series: [seriesLines]
        }
        return () => < Base option={option} style={css} />
    }
})