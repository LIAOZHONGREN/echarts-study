import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//Candlestick 即我们常说的 K线图。在 ECharts3 中，同时支持 'candlestick' 和 'k'这两种 'series.type'（'k' 会被自动转为 'candlestick'）。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '900px', height: '300px', border: 'solid 1px #000' }

        //不支持dataset
        const seriesHeatmap: EChartOption.SeriesHeatmap = {
            type: 'heatmap',
            coordinateSystem: 'cartesian2d',//'cartesian2d'|'geo'
            xAxisIndex: 0,
            yAxisIndex: 0,
            //calendarIndex:0,
            //geoIndex:0,
            //@ts-ignore
            pointSize: 10,//每个点的大小，在地理坐标系(coordinateSystem: 'geo')上有效。
            blurSize: 20,//每个点模糊的大小，在地理坐标系(coordinateSystem: 'geo')上有效。
            minOpacity: 0,//最小的透明度，在地理坐标系(coordinateSystem: 'geo')上有效。
            maxOpacity: 1,//最大的透明度，在地理坐标系(coordinateSystem: 'geo')上有效。
            label: { show: true },
            itemStyle: { borderColor: 'rgba(0,0,0,0.2)', borderWidth: 1 },
            //emphasis: {},
            data: [
                ['一', 'A', 1],
                ['二', 'B', 2],
                ['三', 'C', 3],
                ['四', 'D', 4],
                ['五', 'E', 5],
                ['六', 'F', 6]
            ],
            markPoint: {
                //@ts-ignore
                data: [{ name: '最大值', type: 'max' }, { coord: ['五', 'E'] }]
            },
            markLine: {
                //@ts-ignore
                data: [[{ name: '最大值', type: 'max' }, { coord: ['五', 'E'] }]]
            },
            markArea: {
                //@ts-ignore
                data: [[{ name: '最大值', type: 'max' }, { coord: ['五', 'E'] }]]
            },
            tooltip: {}
        }

        const seriesHeatmap_calendar: EChartOption.SeriesHeatmap = {
            type: 'heatmap',
            coordinateSystem: "calendar",
            calendarIndex: 0,
            data: [
                ['2020-10-01', 3], ['2020-10-02', 5], ['2020-10-03', 3], ['2020-10-04', 8], ['2020-10-05', 6], ['2020-10-06', 7], ['2020-10-07', 9], ['2020-10-08', 10], ['2020-10-09', 4], ['2020-10-10', 3.6],
                ['2020-10-11', 8], ['2020-10-12', 9], ['2020-10-13', 9], ['2020-10-14', 8], ['2020-10-15', 8], ['2020-10-16', 7], ['2020-10-17', 10], ['2020-10-18', 5], ['2020-10-19', 5], ['2020-10-20', 2],
                ['2020-10-21', 1], ['2020-10-22', 0], ['2020-10-23', 5], ['2020-10-24', 3], ['2020-10-25', 3], ['2020-10-26', 0], ['2020-10-27', '-'], ['2020-10-28', 1], ['2020-10-29', 2], ['2020-10-30', 3],
                ['2020-10-31', 4],
            ],
        }

        const option: EChartOption = {
            tooltip: {},
            visualMap: [
                { min: 0, max: 10, calculable: true, itemWidth: 10, left: '5%', bottom: '3%', orient: 'horizontal', seriesIndex: 0 },
                { min: 0, max: 10, calculable: true, itemWidth: 10, left: '38%', bottom: '3%', orient: 'horizontal', seriesIndex: 1 }
            ],
            grid: { width: '30%', left: '1.5%', bottom: '15%', containLabel: true },
            xAxis: { type: 'category', splitArea: { show: true } },
            yAxis: { type: 'category', splitArea: { show: true } },
            calendar: { left: '34.5%', top: 'center', width: '25%', height: '60%', range: '2020-10', orient: 'vertical', yearLabel: { position: 'top', }, monthLabel: { nameMap: 'cn' }, dayLabel: { margin: 5, nameMap: 'cn' } },
            series: [seriesHeatmap, seriesHeatmap_calendar]
        }
        return () => < Base option={option} style={css} />
    }
})