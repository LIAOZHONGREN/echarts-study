import { defineComponent, CSSProperties, ref } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//旭日图（Sunburst）由多层的环形图组成，在数据结构上，内圈是外圈的父节点。因此，它既能像饼图一样表现局部和整体的占比，又能像矩形树图一样表现层级关系。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const seriesSunburst: EChartOption.SeriesSunburst = {
            type: 'sunburst',
            center: ['50%', '50%'],
            radius: [20, 120],
            data: [
                { name: 'A', children: [{ name: 'Aa', value: 1 }] },
                { name: 'B', children: [{ name: 'Ba', value: 5 }, { name: 'Bb', value: 5, children: [{ name: 'Bba', value: 5 }] }] },
                { name: 'C', children: [{ name: 'Ca(go to baidu)', label: { rotate: 'tangential' }, link: 'https://www.baidu.com', value: 10, children: [{ name: 'Caa', value: 3 }, { name: 'Cab', value: 7 }] }] },
            ],
            label: {
                rotate: 'radial',//设置标签相对扇形块旋转的旋转方式.可选值:'radial' 表示径向旋转、'tangential' 表示切向旋转.默认径向旋转，如果不需要文字旋转，可以将其设为 0。
                align: 'center',//文字对齐方式，可取值为：'left'、 'center'、 'right'。注意，'left' 是指靠近内圈，而 'right' 是指靠近外圈。
                minAngle: 20,//当某个扇形块的角度小于该值（角度制）时，扇形块对应的文字不显示。该值用以隐藏过小扇形块中的文字。
                //其余设置属性与基本的label对象相同
                //...
            },
            //itemStyle: {},
            highlightPolicy: 'ancestor',//鼠标在扇形块上时,扇形块的高亮模式.可选值有:'descendant'(会高亮该扇形块和后代元素，其他元素将被淡化),'ancestor'(会高亮该扇形块和祖先元素),'self'(只高亮自身),'none'(不会淡化其他元素)
            nodeClick: 'link',
            sort: 'desc',//扇形块根据数据 value 的排序方式，如果未指定 value，则其值为子元素 value 之和。默认值 'desc' 表示降序排序；还可以设置为 'asc' 表示升序排序；null 表示不排序，使用原始数据的顺序；或者用回调函数进行排列
            renderLabelForZeroData: false,//如果数据没有 name，是否需要渲染文字。
            emphasis: {
                label: { rotate: 'none', },//无效果
                itemStyle: { borderColor: '#a0d911', borderWidth: 1 }
            },
            highlight: {//鼠标悬停后相关扇形块的配置项。
                label: { rotate: 'none', },
                itemStyle: { borderColor: '#a0d911', borderWidth: 1 }
            },
            downplay: {//鼠标悬停后不相关扇形块的配置项
                label: { show: false, textBorderColor: '#666', textBorderWidth: 1, color: 'red' },//样式无效果
                itemStyle: { color: 'rgba(0,0,0,0.3)' }
            },
            //@ts-ignore
            levels: [{}, {}, {}, { r0: 110, r: 120, label: { position: 'outside', padding: 3, silent: false }, itemStyle: { borderWidth: 3 } }],
            //动画相关设置
            //...
        }
        const option: EChartOption = {
            series: [seriesSunburst]
        }
        return () => <Base option={option} style={css} />
    }
})