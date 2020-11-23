import { defineComponent, CSSProperties, ref } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//Treemap 是一种常见的表达『层级数据』『树状数据』的可视化形式。它主要用面积的方式，便于突出展现出『树』的各层级中重要的节点。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const seriesTreemap: EChartOption.SeriesTreemap = {
            type: 'treemap',
            //id: '',
            //name: '',
            left: 'center',
            top: 'center',
            //right: '',
            //bottom: '',
            width: '80%',
            height: '80%',
            squareRatio: 0.5 * (1 + Math.sqrt(5)),//期望矩形长宽比率。布局计算时会尽量向这个比率靠近。默认为黄金比：0.5 * (1 + Math.sqrt(5))。
            leafDepth: 2,//设置子曾经过多时,最多展示几层,更深的曾经将被隐藏,点击drillDownIcon图标才展示对应隐藏的层级.(默认不设置,展示所有层级)
            drillDownIcon: '▶',//打开隐藏层级的按钮图标
            roam: true,//是否开启拖拽漫游（移动和缩放）。可取值有：false：关闭。'scale' 或 'zoom'：只能够缩放。'move' 或 'pan'：只能够平移。true：缩放和平移均可。
            nodeClick: 'link',//点击节点后的行为。可取值为：false：节点点击无反应。'zoomToNode'：点击节点后缩放到节点。'link'：如果节点数据中有 link 点击节点后会进行超链接跳转。
            zoomToNodeRatio: 0.32 * 0.32,//点击某个节点后放大和移动此节点到图表展示窗口的中央显示时的节点大小与图表展示窗口的占比
            //@ts-ignore
            levels: [//单独设置层级是表现样式
                { itemStyle: { borderColor: 'rgba(0,0,0,0.3)', borderWidth: 0, gapWidth: 1 }, upperLabel: { show: false } },//0层
                { itemStyle: { borderColor: 'rgba(0,0,0,0)', borderWidth: 2, gapWidth: 1 }, emphasis: { itemStyle: { borderColor: 'rgba(0,0,0,0.2)' } } },//1
                { colorSaturation: [0.35, 0.5], itemStyle: { borderWidth: 5, gapWidth: 1, borderColorSaturation: 0.6 } },//2
                { itemStyle: { borderColorSaturation: '0.6', borderWidth: 1 } },//3
            ],
            visualDimension: 0,
            visualMin: 0,//当前层级的最小 value 值。如果不设置则自动统计。
            // visualMax: 0,//当前层级的最大 value 值。如果不设置则自动统计。
            colorAlpha: [0.3, 1],//本系列默认的 颜色透明度 选取范围。数值范围 0 ~ 1。越深的层级颜色透明度越解决0.3
            colorSaturation: 1,//本系列默认的 颜色饱和度 选取范围。数值范围 0 ~ 1。
            colorMappingBy: 'index',//设置节点颜色是根据什么来映射,可选值有:value,index(索引),id(在data属性设置的)
            visibleMin: 10,//如果某个节点的矩形的面积，小于这个数值（单位：px平方），这个节点就不显示。
            //childrenVisibleMin: 10,//如果某个节点的矩形面积，小于这个数值（单位：px平方），则不显示这个节点的子节点。
            label: { color: 'rgba(0,0,0,0)', fontWeight: 'bold', textBorderColor: '#fff', textBorderWidth: 1, ellipsis: true/**设置的属性与基本的标签设置基本一样,只是多出ellipsis属性 */ },
            upperLabel: {//父节点标签设置(默认不显示父节点标签)
                height: 15,
                show: true,
                //设置的属性与基本的标签设置基本一样,只是多出ellipsis属性
                ellipsis: true//当文字超出的时候，是否超出部分替换为省略号。
            },
            itemStyle: {
                //colorAlpha:,//颜色的透明度
                //colorSaturation:,//颜色的饱和度
                //borderWidth: 1,
                //gapWidth: 1,//节点之间的间隙
                //borderColor: 'red',
                //borderColorSaturation: '0.6',//边框颜色包含度,.设置它后borderColor无效
                //其他设置
                //...
            },
            //emphasis: {},
            breadcrumb: {//面包屑，能够显示当前节点的路径。
                show: true,
                left: 'center',
                //top:,
                //right:,
                bottom: 20,
                height: 20,
                emptyItemWidth: 30,//当面包屑没有内容时候，设个最小宽度。
                itemStyle: {
                    color: 'rgba(0,0,0,0.3)',
                    textStyle: { color: '#fff' }
                },
                emphasis: {
                    itemStyle: { textStyle: { color: 'green' } }
                }
            },
            data: [//针对单个节点设置表现样式可以在此处设置
                {
                    name: '0',
                    value: 5,
                    children: [
                        { name: '1', value: 1, children: [{ name: '11', value: 2 }, { name: '12', value: 2 }, { name: '13', value: 2 }] },
                        { name: '2', value: 1, children: [{ name: '21', value: 2 }, { name: '22', value: 2 }, { name: '23', value: 2 }] },
                        { name: '3', value: 1, children: [{ name: '31', value: 2, children: [{ name: '311', value: 5 }, { name: '312', value: 6 }] }, { name: '32', value: 2 }, { name: '33', value: 2 }] },
                    ]
                },
                { name: '1', value: 3, itemStyle: { borderWidth: 0 }, },
                //@ts-ignore
                { name: 'go to baidu', value: 2, link: 'https://www.baidu.com', itemStyle: { borderWidth: 0 }, label: { textBorderWidth: 0, color: '#2f54eb' } }
            ],
            // silent: false,
            // animationDuration: 1500,
            // animationEasing: 'quinticInOut',
            // animationDelay: 0,
            // tooltip: {}
        }
        const option: EChartOption = {
            series: [seriesTreemap]
        }
        return () => <Base option={option} style={css} />
    }
})