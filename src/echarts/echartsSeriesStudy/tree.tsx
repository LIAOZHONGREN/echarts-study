import { defineComponent, CSSProperties, ref } from 'vue'
import { EChartOption } from 'echarts'
import Base, { BaseComponent } from '../base'

//树图主要用来可视化树形数据结构，是一种特殊的层次类型，具有唯一的根节点，左子树，和右子树。
//注意：目前不支持在单个 series 中直接绘制森林，可以通过在一个 option 中配置多个 series 实现森林

export default defineComponent({
    components: { Base },
    setup() {
        const base = ref<BaseComponent>()
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const seriesTree: EChartOption.SeriesTree = {
            type: 'tree',
            id: 'test',
            left: '10%',
            top: 'center',
            //right: '',
            //bottom: '',
            width: '80%',
            height: '80%',
            layout: 'orthogonal',//树图的布局，有 正交 和 径向 两种。这里的 正交布局 就是我们通常所说的 水平 和 垂直 方向，对应的参数取值为 'orthogonal' 。而 径向布局 是指以根节点为圆心，每一层节点为环，一层层向外发散绘制而成的布局，对应的参数取值为 'radial' 。
            orient: 'LR',//树图中 正交布局 的方向，也就是说只有在 layout = 'orthogonal' 的时候，该配置项才生效。对应有 水平 方向的 从左到右，从右到左；以及垂直方向的 从上到下，从下到上。取值分别为 'LR' , 'RL', 'TB', 'BT'。注意，之前的配置项值 'horizontal' 等同于 'LR'， 'vertical' 等同于 'TB'。
            symbol: 'emptyCircle',
            symbolSize: 8,
            symbolRotate: 0,
            symbolOffset: [0, 0],
            symbolKeepAspect: true,
            //@ts-ignore
            edgeShape: 'curve',//树图在 正交布局 下，边的形状。分别有曲线和折线两种，对应的取值是 curve 和 polyline.注意：该配置项只在 正交布局 下有效，在经向布局下的开发环境中会报错。
            //@ts-ignore
            edgeForkPosition: '50%',//正交布局下当边的形状是折线时，子树中折线段分叉的位置。这里的位置指的是分叉点与子树父节点的距离占整个子树高度的百分比。默认取值是 '50%'，可以是 ['0', '100%'] 之间。注意：该配置项只有在 edgeShape = 'polyline' 时才有效。
            roam: true,//是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            expandAndCollapse: true,//是否开启子树可折叠
            initialTreeDepth: 2,//树图初始展开的层级（深度）。该配置项主要和 折叠展开 交互一起使用，目的还是为了防止一次展示过多节点，节点之间发生遮盖。如果设置为 -1 或者 null 或者 undefined，所有节点都将展开。
            //itemStyle: {},
            label: { position: 'left' },
            lineStyle: {
                curveness: 0.5,//树图边的曲度。
            },
            emphasis: {
                label: { color: 'green' },
                lineStyle: { color: 'green' },//无效果
            },
            leaves: {//设置节点是子节点,且它没有子节点或它的子节点是折叠状态时的节点样式
                label: { position: 'right' },
                itemStyle: { borderColor: '#40a9ff' },
                emphasis: {
                    itemStyle: { borderColor: '#a0d911' }
                }
            },
            data: [
                {
                    name: '0',
                    children: [
                        { name: '1', children: [{ name: '11' }, { name: '12' }, { name: '13' }] },
                        { name: '2', children: [{ name: '21' }, { name: '22' }, { name: '23' }] },
                        { name: '3', children: [{ name: '31' }, { name: '32' }, { name: '33' }] },
                    ]
                }
            ],
            tooltip: {}
        }

        const option: EChartOption = {
            series: [seriesTree]
        }

        const onChange = (series: EChartOption.SeriesTree) => {
            if (!base.value) return
            const option_ = base.value.chartInstance.getOption()
            Object.keys(series).forEach(key => {
                //@ts-ignore
                option_.series[0][key] = series[key]
            })
            base.value.setOptions(option_, true)
        }

        return () => (
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4 style={{ margin: '5px 0' }}>layout:</h4>
                    <form action="">
                        <input type="radio" name="layout" checked={true} onChange={() => { onChange({ layout: 'orthogonal' }) }} />
                        <span>orthogonal</span>
                        <input type="radio" name="layout" onChange={() => { onChange({ layout: 'radial' }) }} />
                        <span>radial</span>
                    </form>
                </div >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4 style={{ margin: '5px 0' }}>orient:</h4>
                    <form action="">
                        <input type="radio" name="orient" checked={true} onChange={() => { onChange({ orient: 'LR' }) }} />
                        <span>LR</span>
                        <input type="radio" name="orient" onChange={() => { onChange({ orient: 'TB' }) }} />
                        <span>TB</span>
                        <input type="radio" name="orient" onChange={() => { onChange({ orient: 'RL' }) }} />
                        <span>RL</span>
                        <input type="radio" name="orient" onChange={() => { onChange({ orient: 'BT' }) }} />
                        <span>BT</span>
                    </form>
                </div >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4 style={{ margin: '5px 0' }}>edgeShape:</h4>
                    <form action="">
                        <input type="radio" name="edgeShape" checked={true} onChange={() => {
                            //@ts-ignore
                            onChange({ edgeShape: 'curve' })
                        }} />
                        <span>curve</span>
                        <input type="radio" name="edgeShape" onChange={() => {
                            //@ts-ignore
                            onChange({ edgeShape: 'polyline' })
                        }} />
                        <span>polyline</span>
                    </form>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px' }}>
                        <h4 style={{ margin: '5px 0' }}>edgeForkPosition:</h4>
                        <input type="range" value="50" min="0" max="100" step="1" onChange={(e) => {
                            //@ts-ignore
                            onChange({ edgeForkPosition: e.target.value + '%' })
                        }}></input>
                    </div >
                </div >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4 style={{ margin: '5px 0' }}>curveness:</h4>
                    <input type="range" value="0.5" min="0.5" max="20" step="0.5" onChange={(e) => {
                        //@ts-ignore
                        onChange({ lineStyle: { curveness: e.target.value } })
                    }}></input>
                </div >
                <Base ref={base} option={option} style={css} />
            </div >
        )
    }
})