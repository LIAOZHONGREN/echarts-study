/*
 * @Author: your name
 * @Date: 2020-11-20 13:06:36
 * @LastEditTime: 2020-11-20 13:41:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-study\src\types\echarts.d.ts
 */
import { EChartOption } from 'echarts'

//AngleAxis属性与EChartOption.XAxis基本相同
export interface AngleAxis extends Omit<EChartOption.XAxis, 'gridIndex'> {
    polarIndex?: number,
    /**
     * @description: 起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方。
     */
    startAngle?: number,
    /**
     * @description: 刻度增长是否按顺时针，默认顺时针。
     */
    clockwise?: boolean,
}

/**区域选择组件接口 */
export interface Brush {
    id?: string,
    /**
     * @description:  使用在 toolbox 中的按钮。brush 相关的 toolbox 按钮有：'rect'：开启矩形选框选择功能。'polygon'：开启任意形状选框选择功能。'lineX'：开启横向选择功能。'lineY'：开启纵向选择功能。'keep'：切换『单选』和『多选』模式。后者可支持同时画多个选框。前者支持单击清除所有选框。'clear'：清空所有选框。
     */
    toolbox?: Array<'rect' | 'polygon' | 'keep' | 'clear' | 'lineX' | 'lineY'>,
    /**
     * @description: 不同系列间，选中的项可以联动。
     */
    brushLink?: string | string[],
    seriseIndex?: number | Array<number> | 'all',
    geoIndex?: number | Array<number> | 'all' | 'none',
    xAxisIndex?: number | Array<number> | 'all' | 'none',
    yAxisIndex?: number | Array<number> | 'all' | 'none',
    brushType?: 'rect' | 'polygon' | 'lineX' | 'lineY',
    brushMode?: 'single' | 'multiple',
    /**
     * @description:已经选好的选框是否可以被调整形状或平移。
     */
    transformable?: boolean,
    brushStyle?: {
        borderWidth?: number,
        color?: string,
        borderColor?: string
    },
    /**
     * @description: 默认情况，刷选或者移动选区的时候，会不断得发 brushSelected 事件，从而告诉外界选中的内容。但是频繁的事件可能导致性能问题，或者动画效果很差。所以 brush 组件提供了 brush.throttleType，brush.throttleDelay 来解决这个问题。
     */
    throttleType?: 'debounce' | 'fixRate',
    throttleDelay?: number,
    /**
     * @description: 在 brush.brushMode 为 'single' 的情况下，是否支持『单击清除所有选框』。
     */
    removeOnClick?: boolean,
    /**
     * @description: 定义 在选中范围中 的视觉元素。
     */
    inBrush?: Object,
    /**
     * @description: 定义 在选中范围外 的视觉元素。
     */
    outOfBrush?: Object,
    z?: number,
}

/**是原生图形元素组件相关接口 */

/**
 * @description: transform 中设定的坐标，都是相对于图形元素的父元素的（即 group 元素或者顶层画布）的 [0, 0] 点。也就是说，我们可以使用 group 来组织多个图形元素，并且 group 可以嵌套。
对于一个图形元素，transform 执行的顺序是：先缩放（scale），再旋转（rotation），再平移（position）
 */
export interface BaseGraphic {
    type?: 'image' | 'text' | 'circle' | 'sector' | 'ring' | 'polygon' | 'polyline' | 'rect' | 'line' | 'bezierCurve' | 'arc' | 'group',
    id?: string,
    /**
     * @description: setOption 时指定本次对该图形元素的操作行为。可取值：'merge'：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。'remove'：删除元素。
     */
    $action?: 'merge' | 'replace' | 'remove',
    /**
     * @description: 平移（position）：默认值是 [0, 0]。表示 [横向平移的距离, 纵向平移的距离]。右和下为正值。
     */
    position?: number[],
    /**
     * @description: 旋转（rotation）：默认值是 0。表示旋转的弧度值。正值表示逆时针旋转。
     */
    rotation?: number,
    /**
     * @description: 缩放（scale）：默认值是 [1, 1]。表示 [横向缩放的倍数, 纵向缩放的倍数]。
     */
    scale?: number[],
    /**
     * @description: origin 指定了旋转和缩放的中心点，默认值是 [0, 0]。
     */
    origin?: number[],
    /**
     * @description: 描述怎么根据父元素进行定位。
     */
    left?: number | string | 'left' | 'center' | 'right',
    top?: number | string | 'top' | 'middle' | 'bottom',
    right?: number | string,
    bottom?: number | string,
    /**
     * @description: 决定此图形元素在定位时，对自身的包围盒计算方式。
     */
    bounding?: 'all' | 'raw',
    z?: number,
    zlevel?: number,
    /**
     * @description: 用户定义的任意数据，可以在 event listener 中访问
     */
    info?: any,
    /**
     * @description: 是否不响应鼠标以及触摸事件。
     */
    silent?: boolean,
    /**
     * @description: 节点是否可见。
     */
    invisible?: boolean,
    /**
     * @description: 节点是否完全被忽略（既不渲染，也不响应事件）。
     */
    ignore?: boolean,
    /**
     * @description: 鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
     */
    cursor?: string,
    /**
     * @description: 图形元素是否可以被拖拽。
     */
    draggable?: boolean,
    /**
     * @description: 是否渐进式渲染。当图形元素过多时才使用。
     */
    progressive?: boolean,
    style?: {
        image?: string,
        width?: number,
        height?: number,
        text?: string,
        x?: number,
        y?: number,
        /**
         * @description: 格式参见 css font
         */
        font?: string,
        textAlign?: 'left' | 'center' | 'right',
        textVerticalAlign?: 'top' | 'middle' | 'bottom',
        fill?: string,
        stroke?: string,
        lineWidth?: number,
        shadowBlur?: number,
        shadowOffsetX?: number,
        shadowOffsetY?: number,
        shadowColor?: string
    },
    onclick?: Function,
    onmouseover?: Function,
    onmouseout?: Function,
    onmousemove?: Function,
    onmousewheel?: Function,
    onmousedown?: Function,
    onmouseup?: Function,
    ondrag?: Function,
    ondragstart?: Function,
    ondragend?: Function,
    ondragenter?: Function,
    ondragleave?: Function,
    ondragover?: Function,
    ondrop?: Function
}

export interface GroupGraphic extends Omit<BaseGraphic, 'style'> {
    type: 'group',
    width?: number,
    height?: number,
    diffChildrenByName?: boolean,
    children?: object[]
}

export interface ImageGraphic extends BaseGraphic {
    type: 'image',
}

export interface TextGraphic extends BaseGraphic {
    type: 'text',
}

export interface RectGraphic extends BaseGraphic {
    type: 'rect',
    shape: {
        x: number,
        y: number,
        width: number,
        height: number,
        r: number[],
    }
}

export interface CircleGraphic extends BaseGraphic {
    type: 'circle',
    shape: {
        cx: number,
        cy: number,
        r: number
    }
}

export interface RingGraphic extends BaseGraphic {
    type: 'ring',
    shape: {
        cx: number,
        cy: number,
        r: number,
        r0: number
    }
}

export interface SectorGraphic extends BaseGraphic {
    type: 'sector',
    shape: {
        cx: number,
        cy: number,
        r: number,
        r0: number,
        startAngle: number,
        endAngle: number,
        clockwise: boolean
    }
}

export interface ArcGraphic extends BaseGraphic {
    type: 'arc',
    shape: {
        cx: number,
        cy: number,
        r: number,
        r0: number,
        startAngle: number,
        endAngle: number,
        clockwise: boolean
    }
}

export interface PolygonGraphic extends BaseGraphic {
    type: 'polygon',
    shape: {
        points: number[][],
        smooth?: number | 'spline',
        smoothConstraint: boolean
    }
}

export interface PolylineGraphic extends BaseGraphic {
    type: 'polyline',
    shape: {
        points: number[][],
        smooth?: number | 'spline',
        smoothConstraint: boolean
    }
}

export interface LineGraphic extends BaseGraphic {
    type: 'line',
    shape: {
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        percent: number
    }
}

export interface BezierCurveGraphic extends BaseGraphic {
    type: 'bezierCurve',
    shape: {
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        cpx1: number,
        cpy1: number,
        cpx2: number,
        cpy2: number,
        percent: number
    }
}

type GraphicElement = GroupGraphic | ImageGraphic | TextGraphic | RectGraphic | CircleGraphic | RingGraphic | SectorGraphic | ArcGraphic | PolygonGraphic | PolylineGraphic | LineGraphic | BezierCurveGraphic

export interface Graphic {
    id?: string,
    elements: GraphicElement[]
}

/**平行轴坐标系相关接口 */

export interface ParallelAxisDefault {
    type?: 'value' | 'category' | 'time' | 'log',
    name?: string,
    nameLocation?: 'start' | 'center' | 'end',
    nameTextStyle?: EChartOption.TextStyleWithRich,
    nameGap?: number,
    nameRotate?: number,
    inverse?: boolean,
    boundaryGap?: number,
    min?: number | string | Function,
    max?: number | string | Function,
    scale?: boolean,
    splitNumber?: number,
    minInterval?: number,
    maxInterval?: number,
    interval?: number,
    logBase?: number,
    silent?: boolean,
    triggerEvent?: boolean,
    axisLine?: Omit<Omit<EChartOption.BasicComponents.Line, 'onZero'>, 'onZeroAxisIndex'>,
    axisTick?: EChartOption.BasicComponents.CartesianAxis.Tick,
    minorTick?: EChartOption.BasicComponents.CartesianAxis.MinorTick,
    axisLabel?: EChartOption.BasicComponents.CartesianAxis.Label,
    data?: (string | number | EChartOption.BasicComponents.CartesianAxis.DataObject)[]
}

export interface Parallel {
    id?: string,
    zlevel?: number,
    z?: number,
    left?: number | string | 'left' | 'center' | 'right',
    top?: number | string | 'top' | 'middle' | 'bottom',
    right?: number | string,
    bottom?: number | string,
    width?: number | string,
    height?: number | string,
    /**
     * @description: 平行轴坐标系的轴的排版方式,可选值:'horizontal'(横向排布),'vertical'(垂直排布),默认为'horizontal'
     */
    layout?: 'horizontal' | 'vertical',
    /**
     * @description: 维度比较多时，比如有 50+ 的维度，那么就会有 50+ 个轴。那么可能会页面显示不下。可以通过 parallel.axisExpandable 来改善显示效果。是否允许点击展开折叠 axis。
     */
    axisExpandable?: boolean,
    /**
     * @description: 初始时，以哪个轴为中心展开，这里给出轴的 index。没有默认值，需要手动指定。
     */
    axisExpandCenter?: number,
    /**
     * @description: 初始时，有多少个轴会处于展开状态。建议根据你的维度个数而手动指定。
     */
    axisExpandCount?: number,
    /**
     * @description: 在展开状态，轴的间距是多少，单位为像素。默认为50
     */
    axisExpandWidth?: number,
    /**
     * @description: 触发展开折叠的方式,可选值:'click','mousemove'.默认为'click'
     */
    axisExpandTriggerOn?: 'click' | 'mousemove',
    parallelAxisDefault?: ParallelAxisDefault,
}

export interface ParallelAxis extends ParallelAxisDefault {
    id?: string,
    /**
     * @description: 坐标轴的维度序号。
     */
    dim?: number,
    /**
     * @description: 用于定义『坐标轴』对应到哪个『坐标系』中。
     */
    parallelIndex?: number,
    /**
     * @description: 是否坐标轴刷选的时候，实时刷新视图。如果设为 false，则在刷选动作结束时候，才刷新视图。大数据量时，建议设置成 false，从而避免卡顿。
     */
    realtiom?: boolean,
    /**
     * @description: 在坐标轴上可以进行框选，这里是框选的样式设置。
     */
    areaSelectStyle?: {
        width?: number,
        borderWidth?: number,
        borderColor?: string,
        color?: string,
        opacity?: number
    }
}

/**极坐标系组件接口 */
export interface Polar {
    id?: string,
    zlevel?: number,
    z?: number,
    center?: (string | number)[],
    radius?: number | string | Array<number | string>,
    tooltip?: EChartOption.Tooltip
}

type formatterFunc = (value: string, indicator: { name: string, max?: number, min?: number, color?: string }) => string

/**雷达坐标系组件接口 */
export interface Radar {
    id?: string,
    zlevel?: number,
    z?: number,
    /**
     * @description: 雷达坐标系组件的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
     */
    center?: Array<string | number>,
    /**
     * @description: 雷达坐标系组件的中心的半径。可以为如下类型：number：直接指定外半径值。string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。 Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
     */
    radius?: string | number | Array<string | number>,
    /**
     * @description: 坐标系起始角度，也就是第一个指示器轴的角度。
     */
    startAngle?: number,
    /**
     * @description: 雷达图每个指示器名称的配置项。
     */
    name?: { show?: boolean, formatter?: string | formatterFunc, textStyle?: EChartOption.TextStyleWithRich, }
    /**
     * @description: 指示器名称和指示器轴的距离。
     */
    nameGap?: number,
    /**
     * @description: 指示器轴的分割段数。
     */
    splitNumber?: number,
    /**
     * @description: 雷达图绘制类型，支持 'polygon' 和 'circle'。
     */
    shape?: 'polygon' | 'circle',
    /**
     * @description: 是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。
     */
    scale?: boolean,
    /**
     * @description: 坐标轴是否是静态无法交互。
     */
    silent?: boolean,
    /**
     * @description: 坐标轴的标签是否响应和触发鼠标事件，默认不响应。
     */
    triggerEvent?: boolean,
    axisLine?: EChartOption.BasicComponents.Line,//轴线设置
    axisTick?: EChartOption.BasicComponents.CartesianAxis.Tick,//轴刻度设置
    axisLabel?: EChartOption.BasicComponents.CartesianAxis.Label,//轴标签设置
    splitLine?: EChartOption.BasicComponents.CartesianAxis.SplitLine,//坐标系分隔线设置
    splitArea?: EChartOption.BasicComponents.CartesianAxis.SplitArea,//坐标系分隔区设置
    /**
     * @description: 雷达图的指示器，用来指定雷达图中的多个变量（维度）
     */
    indicator?: Array<{ name: string, max?: number, min?: number, color?: string }>
}

/**RadiusAxis属性与EChartOption.XAxis基本相同 */
export interface RadiusAxis extends Omit<EChartOption.XAxis, 'gridIndex'> {
    polarIndex?: number,
}

/**时间线组件接口 */
export interface Timeline {
    show?: boolean,
    /**
     * @description: 这个属性目前只支持为 slider，不需要更改。
     */
    type?: 'slider',
    axisType?: 'value' | 'category' | 'time',
    /**
     * @description: 表示当前选中项是哪项。比如，currentIndex 为 0 时，表示当前选中项为 timeline.data[0]（即使用 options[0]）。
     */
    currentIndex?: number,
    /**
     * @description: 是否自动播放。
     */
    autoPlay?: boolean,
    /**
     * @description: 是否反向播放。
     */
    rewind?: boolean,
    /**
     * @description: 是否循环播放。
     */
    loop?: boolean,
    /**
     * @description: 表示播放的速度（跳动的间隔），单位毫秒（ms）。
     */
    playInterval?: number,
    /**
     * @description: 拖动圆点的时候，是否实时更新视图。
     */
    realtime?: boolean,
    /**
     * @description: 『播放』按钮的位置。可选值：'left'、'right'。
     */
    controlPosition?: 'left' | 'right',
    zlevel?: number,
    z?: number,
    left?: number | string | 'left' | 'center' | 'right',
    top?: number | string | 'top' | 'middle' | 'bottom',
    right?: number | string,
    bottom?: number | string,
    padding?: number | number[],
    orient?: 'horizontal' | 'vertical',
    inverse?: number,
    /**
     * @description: timeline的时间节点的图形。
     */
    symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none' | string,
    symbolSize?: number | number[],
    symbolRotate?: number,
    symbolKeepAspect?: boolean,
    symbolOffset?: Array<number | string>,
    /**
     * @description: timeline组件的时间轴线的样式设置和显示控制(具有show属性)
     */
    lineStyle?: {
        show?: boolean
        color?: string | string[];
        width?: number;
        type?: 'solid' | 'dashed' | 'dotted';
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
        opacity?: number;
    },
    /**
     * @description: timeline组件的时间标签的设置对象
     */
    label?: EChartOption.BasicComponents.CartesianAxis.Label,
    /**
     * @description: timeline的时间节点的图形的样式设置对象
     */
    itemStyle?: {
        color?: any,
        borderColor?: string,
        borderWidth?: number,
        borderType?: 'solid' | 'dashed' | 'dotted',
        shadowBlur?: number,
        shadowColor?: string,
        shadowOffsetX?: number,
        shadowOffsetY?: number,
        opacity?: number
    },
    /**
     * @description: 标记当前到达的时间节点的图形标记和切换时间节点时的动画控制的设置对象
     */
    checkpointStyle?: {
        symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none' | string,
        symbolSize?: number | number[],
        symbolRotate?: number,
        symbolKeepAspect?: boolean,
        symbolOffset?: Array<number | string>,
        color?: any,
        borderColor?: string,
        borderWidth?: number,
        animation?: boolean,
        animationDuration?: number,
        animationEasing?: string
    },
    /**
     * @description: 『控制按钮』的样式。『控制按钮』包括：『播放按钮』、『前进按钮』、『后退按钮』。
     */
    controlStyle?: {
        show?: boolean,
        showPlayBtn?: boolean,
        showPrevBtn?: boolean,
        showNextBtn?: boolean,
        itemSize?: number,
        itemGap?: number,
        position?: 'left' | 'right' | 'top' | 'bottom',
        playIcon?: string,
        stopIcon?: string,
        prevIcon?: string,
        nextIcon?: string,
        color?: string,
        borderColor?: string,
        borderWidth?: number
    },
    /**
     * @description: 设置鼠标在控件上时的样式对象
     */
    emphasis?: {
        label?: object,
        itemStyle?: object,
        checkpointStyle?: object,
        controlStyle?: object,
    },
    data?: (string | number | {
        value: string | number,
        tooltip?: EChartOption.Tooltip,
        symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none' | string,
        symbolSize?: number | number[],
        symbolRotate?: number,
        symbolKeepAspect?: boolean,
        symbolOffset?: Array<number | string>,
    })[],
}

/**工具箱组件相关接口 */

interface Tool {
    show?: boolean,
    title?: string,
    icon?: string,
    iconStyle?: {
        color?: any,
        borderColor?: string,
        borderWidth?: number,
        borderType?: 'solid' | 'dashed' | 'dotted',
        shadowBlur?: number,
        shadowColor?: string,
        shadowOffsetX?: number,
        shadowOffsetY?: number,
        opacity?: number
    },
    emphasis?: {
        iconStyle: {
            color?: any,
            borderColor?: string,
            borderWidth?: number,
            borderType?: 'solid' | 'dashed' | 'dotted',
            shadowBlur?: number,
            shadowColor?: string,
            shadowOffsetX?: number,
            shadowOffsetY?: number,
            opacity?: number
        }
    }
}

interface SaveAsImageTool extends Tool {
    type?: 'png' | 'jpeg' | 'svg',//图表的渲染模式是'canvas'时可选值为:'png','jpeg';渲染模式是'svg'时,可选值为:'svg'
    name?: string,//保存的文件名称，默认使用 Tool.title作为名称。
    backgroundColor?: string,
    connectedBackgroundColor?: string,//如果图表使用了 echarts.connect 对多个图表进行联动，则在导出图片时会导出这些联动的图表。该配置项决定了图表与图表之间间隙处的填充色。
    excludeComponents?: Array<string>,//保存为图片时忽略的组件列表，默认忽略工具栏。
    pixelRatio?: number//保存图片的分辨率比例，默认跟容器相同大小，如果需要保存更高分辨率的，可以设置为大于 1 的值，例如 2。
}

type RestoreTool = Tool

interface DataZoomTool extends Tool {
    filterMode?: 'filter' | 'weakFilter' | 'empty' | 'none',
    xAxisIndex?: number | boolean | Array<number> | 'none',//指定哪些 xAxis 被控制。
    yAxisIndex?: number | boolean | Array<number> | 'none',//指定哪些 yAxis 被控制。
    brushStyle?: {//刷选框样式
        color?: any,
        borderColor?: any,
        borderWidth?: number,
        borderType?: 'solid' | 'dashed' | 'dotted',
        shadowBlur?: number,
        shadowColor?: string,
        shadowOffsetX?: number,
        shadowOffsetY?: number,
        opacity?: number
    }
}

/**数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。 */
interface DataViewTool extends Tool {
    readOnly?: boolean,//是否不可编辑（只读）。
    optionToContent?: (option: Object) => Element | string,//自定义 dataView 展现函数，用以取代默认的 textarea 使用更丰富的数据编辑。可以返回 dom 对象或者 html 字符串。
    contentToOption?: (container: Element, option: Object) => Object,//在使用 optionToContent 的情况下，如果支持数据编辑后的刷新，需要自行通过该函数实现组装 option 的逻辑。
    lang?: Array<'数据视图' | '关闭' | '刷新'>,//数据视图上有三个话术，默认是['数据视图', '关闭', '刷新']。
    backgroundColor?: string,
    textareaColor?: string,
    textareaBorderColor?: string,
    textColor?: string,
    buttonColor?: string,
    buttonTextColor?: string
}

interface MagicTypeTool extends Tool {
    type: Array<'line' | 'bar' | 'stack' | 'tiled'>,
    option?: {//各个类型的专有配置项。在切换到某类型的时候会合并相应的配置项。
        line?: EChartOption.BasicComponents.Line,
        bar?: EChartOption.SeriesBar,
        stack?: Object,
        tiled?: Object
    },
    seriesIndex?: {//各个类型对应的系列的列表。
        line?: Array<number>,
        bar?: Array<number>,
        stack?: Array<number>,
        tiled?: Array<number>
    }
}

export interface Toolbox {
    id?: string,
    show?: boolean,
    orient?: 'horizontal' | 'vertical',
    itemSize?: number,
    itemGap?: number,
    showTitle?: boolean,
    feature?: {
        saveAsImage?: SaveAsImageTool,
        dataZoom?: DataZoomTool,
        dataView?: DataViewTool,
        magicType?: MagicTypeTool,
        restore?: RestoreTool,
        brush?: Object,
    },
    iconStyle?: {
        color?: any,
        borderColor?: string,
        borderWidth?: number,
        borderType?: 'solid' | 'dashed' | 'dotted',
        shadowBlur?: number,
        shadowColor?: string,
        shadowOffsetX?: number,
        shadowOffsetY?: number,
        opacity?: number
    },
    emphasis?: {
        iconStyle: {
            color?: any,
            borderColor?: string,
            borderWidth?: number,
            borderType?: 'solid' | 'dashed' | 'dotted',
            shadowBlur?: number,
            shadowColor?: string,
            shadowOffsetX?: number,
            shadowOffsetY?: number,
            opacity?: number
        }
    },
    zlevel?: number,
    z?: number,
    left?: number | string | 'left' | 'center' | 'right',
    top?: number | string | 'top' | 'middle' | 'bottom',
    right?: number | string,
    bottom?: number | string,
    width?: number | string,
    height?: number | string,
    tooltip?: EChartOption.Tooltip,
}