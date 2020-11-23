import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'
import { Radar } from '../../types/echarts'

//radar:雷达坐标系

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', border: 'solid 1px #000' }
        //雷达坐标系组件默认不显示轴刻度和轴标签,(一个指示器对应一个轴)
        const radar: Radar = {
            center: ['50%', '50%'],
            radius: '80%',
            startAngle: 90,
            splitNumber: 5,
            shape: 'polygon',
            axisLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisTick: {
                show: true,
                length: 3,
                lineStyle: {
                    color: '#391085',
                    opacity: 0.66
                }
            },
            axisLabel: {
                color: '#000',
                lineHeight: 18,
                show: true,
                borderColor: '#666',
                borderWidth: 1,
                borderRadius: 3
            },
            splitLine: {
                lineStyle: {
                    color: ['#ffccc7', '#ffa39e', '#ff7875', '#ff4d4f', '#f5222d'],
                    type: 'dotted'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['#e6fffb', '#b5f5ec', '#87e8de', '#5cdbd3', '#36cfc9']
                }
            },
            name: {
                formatter: (v, ind) => {
                    const map = new Map([['一', 'a'], ['二', 'b'], ['三', 'c'], ['四', 'd'], ['五', 'e'], ['六', 'f']])
                    return `{${map.get(ind.name)}|${v}}`
                },
                textStyle: {
                    color: 'rgba(0,0,0,0)',
                    textBorderWidth: 1,
                    rich: {
                        a: { textBorderColor: '#ffccc7', fontWeight: 'bold' },
                        b: { textBorderColor: '#ffa39e', fontWeight: 'bold' },
                        c: { textBorderColor: '#ff7875', fontWeight: 'bold' },
                        d: { textBorderColor: '#ff4d4f', fontWeight: 'bold' },
                        e: { textBorderColor: '#f5222d', fontWeight: 'bold' },
                        f: { textBorderColor: '#cf1322', fontWeight: 'bold' },
                    }
                }
            },
            indicator: [{ name: '一', max: 10 }, { name: '二' }, { name: '三' }, { name: '四' }, { name: '五' }, { name: '六' }]
        }
        const option: EChartOption = {
            radar: radar
        }
        return () => <Base option={option} style={css} />
    }
})