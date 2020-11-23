import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//桑基图是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const seriesSankey: EChartOption.SeriesSankey = {
            type: 'sankey',
            left: '5%',
            top: '5%',
            right: '20%',
            bottom: '5%',
            //width:,
            //height:,
            nodeWidth: 20,//桑基图中每个矩形节点的宽度。
            nodeGap: 8,//桑基图中每一列相邻两个矩形节点之间的间隔。
            /**
             * 桑基图中节点的对齐方式，默认是双端对齐，可以设置为左对齐或右对齐，
             * 对应的值分别是：justify: 节点双端对齐。left: 节点左对齐。right: 节点右对齐。
             */
            nodeAlign: 'justify',
            layoutIterations: 32,//布局的迭代次数，目的是不断迭代优化图中节点和边的位置
            orient: 'horizontal',
            draggable: true,//控制节点拖拽的交互，默认开启。开启后，用户可以将图中任意节点拖拽到任意位置。
            /**
             * 鼠标 hover 到节点或边上，相邻接的节点和边高亮的交互，默认关闭，可手动开启。 
             * 可选值为： 
             * false：hover 到节点或边时，只有被 hover 的节点或边高亮。 
             * true：同 'allEdges'。 
             * 'allEdges'：hover 到节点时，与节点邻接的所有边以及边对应的节点全部高亮。hover 到边时，边和相邻节点高亮。 
             * 'outEdges'：hover 的节点、节点的出边、出边邻接的另一节点 会被高亮。hover 到边时，边和相邻节点高亮。 
             * 'inEdges'：hover 的节点、节点的入边、入边邻接的另一节点 会被高亮。hover 到边时，边和相邻节点高亮。
             */
            focusNodeAdjacency: 'allEdges',
            //@ts-ignore
            levels: [
                { depth: 1, itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.3)' } },//depth:设置样式设置属于那个层级
                { depth: 2, lineStyle: { color: 'rgba(0,0,0,0.4)' }, label: { color: 'rgba(0,0,0,0)', fontWeight: 'bold', textBorderColor: '#722ed1', textBorderWidth: 1 } }
            ],
            //label: {},
            itemStyle: {//桑基图节点矩形的样式。
                borderWidth: 0,
            },
            lineStyle: {
                color: 'target',//可以设置:'source'(取源节点的颜色作为自己的颜色)或'target'(目标节点的颜色作为自己的颜色)
                curveness: 0.5,//桑基图边的曲度。
            },
            emphasis: { lineStyle: { color: '#eaff8f' } },
            data: [
                { name: 'a', },
                { name: 'b', },
                { name: 'c', },
                { name: 'd', },
                { name: 'e', },
                { name: 'f', },
                { name: 'g', },
                { name: 'h', },
            ],
            links: [
                { source: 'a', target: 'b', value: 3 },
                { source: 'a', target: 'c', value: 5 },
                { source: 'a', target: 'd', value: 2 },
                { source: 'b', target: 'e', value: 1 },
                { source: 'b', target: 'f', value: 1 },
                { source: 'b', target: 'g', value: 1 },
                { source: 'c', target: 'h', value: 5 },
                { source: 'd', target: 'h', value: 5 },

            ],
            tooltip: {},
            //...
        }
        const option: EChartOption = {
            tooltip: {},
            series: [seriesSankey]
        }
        return () => <Base option={option} style={css} />
    }
})