import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const seriesGraph: EChartOption.SeriesGraph = {
            type: 'graph',
            //coordinateSystem: 'none',//可选值:'cartesian2d','polar','geo','calendar','none'
            //xAxisIndex: 0,
            //yAxisIndex: 0,
            //polarIndex: 0,
            //geoIndex: 0,
            //calendarIndex: 0,
            //left: 'center',
            //top: 'center',
            //right: 'auto',
            //bottom: 'auto',
            //width: 'auto',
            //height: 'auto',
            //@ts-ignore
            //center: [],//当前视角的中心点
            //@ts-ignore
            //zooom: 1,//当前视角的缩放比例。
            //layout: 'none',//图的布局。可选：'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置。'circular' 采用环形布局,'force' 采用力引导布局
            //circular: {//环形布局相关配置

            //},
            /**    力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，
             * 每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，
             * 多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。
             *     力引导布局的结果有良好的对称性和局部聚合性，也比较美观。 */
            //force: {

            //},
            //roam: false,////是否开启鼠标缩放和平移漫游。
            //nodeScaleRatio: 0.6,//鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
            //draggable: false,//节点是否可拖拽，只在使用力引导布局的时候有用。
            //focusNodeAdjacency: false,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            //symbol: '',//关系图节点标记的图形。
            //symbolSize: 10,
            //symbolRotate: 0,
            //symbolKeepAspect: true,
            //symbolOffset: [0, 0],
            //edgeSymbol: ['none', 'none'],//边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
            //edgeSymbolSize: 10,
            //cursor: 'pointer',
            //itemStyle: {},
            lineStyle: { color: 'rgba(0,0,0,0.3)' },
            //label: {},
            //edgeLabel: {},
            //emphasis: {},
            categories: [//类目设置的集合,通过data[i].category(数据项所在类目的 index)给数据项分配类目
                { symbol: 'circle', itemStyle: { color: 'red' } },
                { symbol: 'roundRect', itemStyle: { color: 'green' } },
                { symbol: 'triangle', itemStyle: { color: 'blue' } },
            ],
            /**
             * 针对节点之间存在多边的情况，自动计算各边曲率。
             * 设置为 number 时，表示两点间边曲率数组的长度，由内部算法给出计算结果。
             * 设置为 Array 时，表示直接指定曲率数组，多边曲率会从数组中直接按顺序选取。
             * 注意： 如果设置 lineStyle.curveness 则此属性失效。
            */
            //autoCurveness: 20,
            data: [
                { name: 'a', x: 10, y: 10, value: 1, category: 0,/**数据项所在类目的 index。*/ },
                { name: 'b', x: 50, y: 40, value: 1, category: 1 },
                { name: 'c', x: 10, y: 70, value: 1, category: 2 },
            ],
            //nodes:[],//别名，同 data
            links: [//节点间的关系数据。
                { source: 'a', target: 'b' },
                { source: 'b', target: 'c' },
                { source: 'c', target: 'a' },
            ],
            //edges:[],//别名，同 links
            markPoint: { 
                //@ts-ignore
                data: [{ coord: [0, 80] }] 
            },
            //markLine: {},
            //markArea: {},
            silent: false,
            tooltip: {},
            //...

        }
        const option: EChartOption = {
            series: [seriesGraph]
        }
        return () => <Base option={option} style={css} />
    }
})