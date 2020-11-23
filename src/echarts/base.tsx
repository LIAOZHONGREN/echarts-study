
import { defineComponent, PropType, ref, CSSProperties, computed, DefineComponent } from 'vue'
import { EChartOption, EChartsResponsiveOption, ECharts } from 'echarts'
import { useECharts } from '../common/hooks/web/useECharts'

export interface BaseComponent extends DefineComponent {
    setOptions: (options: EChartOption<EChartOption.Series> | EChartsResponsiveOption | { baseOption: EChartOption, options: EChartOption[] }, clear: boolean) => void,
    chartInstance: ECharts
}

export default defineComponent({
    props: {
        option: { type: Object as PropType<EChartOption<EChartOption.Series> | EChartsResponsiveOption | { baseOption: EChartOption, options: EChartOption[] }>, required: true },
        theme: { type: String as PropType<"light" | "dark" | "default">, default: 'light' },
        className: { type: Object as PropType<String | Array<String>> },
        style: { type: Object as PropType<CSSProperties> }
    },
    setup(props) {
        const { option, theme, className, style } = props
        //const el = ref<HTMLDivElement>()
        //const { setOptions } = useECharts(el, theme)
        const class_ = computed(() => {
            if (typeof className === 'undefined') return ''
            return typeof className === 'string' ? className : (className as string[]).join(' ')
        })
        // setOptions(option)
        const setOptions = (options: EChartOption<EChartOption.Series> | EChartsResponsiveOption | { baseOption: EChartOption, options: EChartOption[] }, clear = true) => { }
        const chartInstance: any = null
        return { class_, setOptions, chartInstance }
        // return () => (
        //     <div ref={el} class={class_} style={style}></ div>
        // )
    },
    mounted() {
        const { theme, option } = this
        //@ts-ignore
        const { setOptions, getChartInstance } = useECharts(ref(this.$refs.el), theme)
        setOptions(option)
        this.setOptions = setOptions
        this.chartInstance = getChartInstance()
    },
    render() {
        const { class_, style } = this
        return (
            <div ref={'el'} class={class_} style={style}></ div>
        )
    }
})