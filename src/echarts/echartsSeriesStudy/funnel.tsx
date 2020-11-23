import { defineComponent, CSSProperties, ref } from 'vue'
import { EChartOption } from 'echarts'
import Base, { BaseComponent } from '../base'

//桑基图是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。

export default defineComponent({
    components: { Base },
    setup() {
        const baseEl = ref<BaseComponent>()
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const seriesFunnel: EChartOption.SeriesFunnel = {
            type: 'funnel',
            //@ts-ignore
            left: 'center',
            //@ts-ignore
            top: 'center',
            //@ts-ignore
            //right:,
            //@ts-ignore
            //bottom:,
            //@ts-ignore
            width: '80%',
            //@ts-ignore
            height: '80%',
            seriesLayoutBy: 'row',
            //datasetIndex: 0,
            //@ts-ignore
            encode: {
                itemName: 0,
                value: 1
            },
            //data: [],
            min: 0,//指定的数据最小值。
            max: 100,//指定的数据最大值。
            minSize: '0%',//数据最小值 min 映射的宽度。
            maxSize: '100%',//数据最大值 max 映射的宽度。
            sort: 'descending',//数据排序， 可以取 'ascending'(升序)，'descending'(降序)，'none'（表示按 data 顺序），或者一个函数（即 Array.prototype.sort(function (a, b) { ... })）。
            gap: 0,//数据图形间距。
            funnelAlign: 'center',//水平方向对齐布局类型，默认居中对齐，可用选项还有：'left' | 'right' | 'center'
            label: {
                //position:'center',
            },
            //labelLine: {},
            //itemStyle: {},
            //emphasis: {},
            markPoint: {
                //@ts-ignore
                data: [{ x: 30, y: 100 }]
            },
            markLine: {
                symbol: ['circle', ''],
                data: [
                    //@ts-ignore
                    [{ x: 30, y: 100 }, { x: 30, y: 150 }]
                ]
            },
            //markArea: {},//报错
            //tooltip: {},
            //...

        }
        const option: EChartOption = {
            dataset: [
                {
                    source: [
                        ['一', '二', '三', '四', '五', '六'],
                        [100, 20, 60, 40, 80, 10]
                    ]
                }
            ],
            series: [seriesFunnel]
        }

        const onChange = (op: EChartOption.SeriesFunnel) => {
            // if (typeof op.gap != 'undefined') {
            //     const option_ = baseEl.value?.chartInstance.getOption()
            //     if (!option_?.series || !option.series) return
            //     //@ts-ignore
            //     option_.series[0]['gap'] = op.gap
            //     option.series[0] = option_.series[0]
            //     baseEl.value?.setOptions(option, true)
            //     return
            // }
            baseEl.value?.setOptions({ series: [op] }, false)
        }

        return () => (
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4 style={{ margin: '5px 0' }}>sort:</h4>
                    <input type="radio" name='sort' checked={true} onChange={() => { onChange({ sort: 'descending' }) }} />
                    <span>descending</span>
                    <input type="radio" name='sort' onChange={() => { onChange({ sort: 'ascending' }) }} />
                    <span>ascending</span>
                    <input type="radio" name='sort' onChange={() => { onChange({ sort: 'none' }) }} />
                    <span>none</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4 style={{ margin: '5px 0' }}>funnelAlign:</h4>
                    <input type="radio" name='funnelAlign' onChange={() => { onChange({ funnelAlign: 'left' }) }} />
                    <span>left</span>
                    <input type="radio" name='funnelAlign' checked={true} onChange={() => { onChange({ funnelAlign: 'center' }) }} />
                    <span>center</span>
                    <input type="radio" name='funnelAlign' onChange={() => { onChange({ funnelAlign: 'right' }) }} />
                    <span>right</span>
                </div>
                {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4 style={{ margin: '5px 0' }}>gap:</h4>
                    <input type="range" value={0} min={0} max={20} step={0.5} onChange={e => {
                        //@ts-ignore
                        onChange({ gap: e.target.value })
                    }} />
                </div> */}
                <Base ref={baseEl} option={option} style={css} />
            </div>
        )
    }
})