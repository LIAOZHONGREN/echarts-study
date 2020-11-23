
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { GroupGraphic, ImageGraphic, RingGraphic, SectorGraphic, ArcGraphic, PolygonGraphic, PolylineGraphic, CircleGraphic, TextGraphic, RectGraphic } from '../../types/echarts'

//graphic 是原生图形元素组件。可以支持的图形元素包括:image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        const graphic: GroupGraphic = {
            type: 'group',
            // $action?: 'merge' | 'replace' | 'remove',
            position: [0, 0],
            rotation: Math.PI / 4,
            scale: [0.8, 0.8],
            origin: [0, 0],
            left: 30,
            top: 30,
            // right?: number | string,
            // bottom?: number | string,
            bounding: 'raw',
            z: 100,
            // zlevel?: number,
            info: 'any',
            silent: false,
            invisible: false,//不知道是什么作用
            ignore: false,//不知道是什么作用
            // cursor?: string,
            draggable: true,
            //progressive?: boolean,
            onclick: (p: any) => console.log(p),
            children: [
                {
                    type: 'rect',
                    left: 'center',
                    top: 'center',
                    shape: {
                        width: 50,
                        height: 50,
                        r: [3],
                    },
                    style: {
                        fill: 'rgba(0,0,0,0.3)'
                    }
                } as RectGraphic,
                {
                    type: 'circle',
                    left: 'center',
                    top: 'center',
                    shape: {
                        r: 30,
                    },
                    style: {
                        fill: 'rgba(0,0,0,0.5)'
                    }
                } as CircleGraphic,
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        fill: '#fff',
                        text: '好',
                        font: 'bold 15px Microsoft YaHei'
                    }
                } as TextGraphic,
            ]
        }
        const option: EChartOption = {
            graphic: [
                graphic,
                {
                    type: 'image',
                    left: 'center',
                    top: 20,
                    style: {
                        height: 30,
                        image: 'https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1'
                    }
                } as ImageGraphic,
                {
                    type: 'ring',
                    left: 10,
                    top: 70,
                    shape: {
                        r: 60,
                        r0: 20,
                    },
                    style: {
                        fill: '#1890ff'
                    }
                } as RingGraphic,
                {
                    type: 'sector',
                    shape: {
                        cx: 290,
                        cy: 290,
                        r: 30,
                        r0: 10,
                        startAngle: Math.PI,
                        endAngle: Math.PI / 2 * 3,
                        clockwise: true
                    },
                    style: { fill: '#95de64' }
                } as SectorGraphic,
                {
                    type: 'arc',
                    shape: {
                        cx: 10,
                        cy: 290,
                        r: 40,
                        startAngle: Math.PI / 2 * 3,
                        endAngle: 0,
                        clockwise: true
                    },
                    style: { stroke: '#95de64' }
                } as ArcGraphic,
                {
                    type: 'arc',
                    shape: {
                        cx: 10,
                        cy: 290,
                        r: 30,
                        startAngle: Math.PI / 2 * 3,
                        endAngle: 0,
                        clockwise: true
                    },
                    style: { fill: '#95de64', stroke: '#95de64' }
                } as ArcGraphic,
                {
                    type: 'polygon',
                    style: { stroke: '#36cfc9', fill: 'rgba(0,0,0,0)' },
                    shape: {
                        points: [[150, 100], [236.6, 200], [63.4, 200]],
                        smooth: 'spline',
                        smoothConstraint: true,
                    }
                } as PolygonGraphic,
                {
                    type: 'polyline',
                    style: { stroke: '#36cfc9' },
                    shape: {
                        points: [[150, 100], [236.6, 200], [63.4, 200], [150, 100]],
                    }
                } as PolylineGraphic,
            ],
        }
        return () => <Base option={option} style={css} />
    }
})