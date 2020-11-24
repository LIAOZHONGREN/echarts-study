import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../../base'

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '300px', height: '300px', margin: '5px' }
        const option: EChartOption = {
            dataset: [
                {
                    source: [
                        ['A', 'B', 'C', 'D', 'E', 'F'],
                        [50, 50, 50, 50, 50, 50]
                    ]
                }
            ],
            grid: { width: '80%', height: '80%', left: 'center', top: 'center', containLabel: true },
            xAxis: { type: 'category', boundaryGap: false },
            yAxis: { type: 'value', min: 0, max: 100 },
            visualMap: [
                {
                    type: 'piecewise', show: false, dimension: 0, seriesIndex: 0,
                    pieces: [//gt:大于;lt:小于;数值可以是数值或索引
                        //@ts-ignore
                        { gt: 1, lt: 2, color: 'rgba(0,191,255,0.3)' }, { gt: 3, lt: 4, color: 'rgba(0,191,255,0.3)' }
                    ]
                },
            ],
            series: [
                {
                    type: 'line',
                    seriesLayoutBy: 'row',
                    encode: { x: 0, y: 1 },
                    lineStyle: { color: 'blue' },
                    markLine: {
                        data: [
                            //@ts-ignore
                            //{ xAxis: 'B' }, { xAxis: 'C' }, { xAxis: 'D' }, { xAxis: 'E' },
                            { xAxis: 1 }, { xAxis: 2 }, { xAxis: 3 }, { xAxis: 4 }
                        ],
                        symbol: ['none', 'none'],
                        label: { show: false }
                    },
                    areaStyle: {},
                } as EChartOption.SeriesLine
            ]
        }

        const option2: EChartOption = {
            dataset: [
                {
                    source: [
                        ['A', 'B', 'C', 'D', 'E', 'F'],
                        [10, 20, 30, 40, 50, 60]
                    ]
                }
            ],
            grid: { width: '80%', height: '80%', left: 'center', top: 'center', containLabel: true },
            xAxis: { type: 'category', boundaryGap: false, },
            yAxis: { type: 'value', },
            visualMap: [
                {
                    type: 'piecewise',
                    left: 'center',
                    top: 5,
                    showLabel: false,
                    orient: 'horizontal',
                    dimension: 1,
                    pieces: [
                        //@ts-ignore
                        { gt: 10, lt: 20 }, { gt: 20, lt: 30 }, { gt: 30, lt: 40 }, { gt: 40, lt: 50 }, { gt: 50, lt: 60 },
                    ],
                    inRange: {
                        color: ['#bae7ff', '#91d5ff', '#69c0ff', '#40a9ff', '#1890ff']
                    }
                }
            ],
            tooltip: { trigger: 'axis' },
            series: [
                {
                    type: 'line',
                    seriesLayoutBy: 'row',
                    encode: { x: 0, y: 1 },
                    markLine: {
                        silent: true,
                        //@ts-ignore
                        data: [{ yAxis: 20 }, { yAxis: 30 }, { yAxis: 40 }, { yAxis: 50 }]
                    }
                } as EChartOption.SeriesLine
            ]
        }

        const option3: EChartOption = {
            dataset: [
                {
                    source: [
                        ['A', 'B', 'C', 'D', 'E', 'F'],
                        [10, 20, 30, 40, 50, 60],
                        [1, 2, 3, 4, 5, 6],
                    ]
                },
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'cross' },
            },
            grid: { width: '80%', height: '80%', left: 'center', top: 'center' },
            xAxis: [{ type: 'category', boundaryGap: true }],
            yAxis: [{ type: 'value' }, { type: 'value', inverse: true }],
            series: [
                { type: 'line', seriesLayoutBy: 'row', encode: { x: 0, y: 1 } } as EChartOption.SeriesLine,
                { type: 'line', seriesLayoutBy: 'row', encode: { x: 0, y: 2 }, xAxisIndex: 0, yAxisIndex: 1 } as EChartOption.SeriesLine,
            ]

        }

        const option4: EChartOption = {
            dataset: [
                {
                    source: [
                        ['A', 'B', 'C', 'D', 'E', 'F'],
                        [0, 10, -10, 20, -20, 30]
                    ]
                }
            ],
            grid: { width: '80%', height: '80%', left: 'center', top: 'center', containLabel: true },
            xAxis: { type: 'category', boundaryGap: false, /**axisLine: { onZero: false } */ },
            yAxis: { type: 'value', },
            series: [
                {
                    type: 'line',
                    seriesLayoutBy: 'row',
                    encode: { x: 0, y: 1 },
                    areaStyle: {},
                } as EChartOption.SeriesLine
            ]
        }

        const option5: EChartOption = {
            dataset: [
                {
                    source: [
                        ['A', 'B', 'C', 'D', 'E', 'F'],
                        [10, 20, 30, 40, 50, 60],
                    ]
                },
                {
                    source: [
                        ['A', 'B', 'C', 'D', 'E', 'F'],
                        [1, 2, 3, 4, 5, 6],
                    ]
                }
            ],
            grid: [
                { width: '80%', height: '40%', left: 'center', top: '3%' },
                { width: '80%', height: '40%', left: 'center', bottom: '3%' }
            ],
            xAxis: [{ type: 'category' }, { type: 'category', gridIndex: 1,position:'top' }],
            yAxis: [{ type: 'value' }, { type: 'value', gridIndex: 1, inverse: true }],
            series: [
                { type: 'line', seriesLayoutBy: 'row', encode: { x: 0, y: 1 }, datasetIndex: 0 } as EChartOption.SeriesLine,
                { type: 'line', seriesLayoutBy: 'row', encode: { x: 0, y: 1 }, datasetIndex: 1, xAxisIndex: 1, yAxisIndex: 1 } as EChartOption.SeriesLine,
            ]
        }

        return () => (
            <div style={{ display: 'flex', flexFlow: 'row warp', }}>
                <Base option={option} style={css} />
                <Base option={option2} style={css} />
                <Base option={option3} style={css} />
                <Base option={option4} style={css} />
                <Base option={option5} style={css} />
            </div>
        )
    }
})