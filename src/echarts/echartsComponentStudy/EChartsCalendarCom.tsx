
import { defineComponent, CSSProperties } from 'vue'
import { EChartOption } from 'echarts'
import Base from '../base'

//calendar:日历坐标系组件。

export default defineComponent({
    components: { Base },
    setup() {
        const css: CSSProperties = { width: '600px', height: '300px', border: 'solid 1px #000' }
        const calendar: EChartOption.Calendar = {
            left: 30,
            top: 120,
            right: 30,
            //bottom:'',
            //width:'',
            //height:'',
            range: "2016",//必填，日历坐标的范围 支持多种格式 使用示例： // 某一年 range: 2017 // 某个月 range: '2017-02' // 某个区间 range: ['2017-01-02', '2017-02-23'] // 注意 此写法会识别为['2017-01-01', '2017-02-01'] range: ['2017-01', '2017-02']
            cellSize: ["auto", 13],//日历每格框的大小，可设置单值 或数组 第一个元素是宽 第二个元素是高。 支持设置自适应：auto, 默认为高宽均为20
            orient: 'horizontal',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'red',
                    width: 2,
                }
            },
            itemStyle: {
                //color?: string;
                borderColor: '#fff',
                borderWidth: 1.5,
                //borderType:'dashed',
                // shadowBlur?: number;
                // shadowColor?: string;
                // shadowOffsetX?: number;
                // shadowOffsetY?: number;
                // opacity?: number;
            },
            yearLabel: {
                show: true,
                //formatter: '2016',
                position: 'bottom',
                margin: 10,
                // nameMap: ['二零一六'],无效果
            },
            monthLabel: {
                color: 'rgba(0,0,0,0)',
                textBorderColor: 'green',
                textBorderWidth: 1,
                fontWeight: 'bold',
                //nameMap: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],//设置月份标签,默认为英文的月份的前三个字母(首字母大写的)
            },
            dayLabel: {
                show: true,//默认为true
                firstDay: 0,//设置从星期几开始,默认从星期天开始
                position: 'start',//设置星期标签摆放在日历图的开始处还是结束处
                margin: 10,//星期标签组与日历图的间距
                nameMap: ['日', '一', '二', '三', '四', '五', '六'],//设置星期标签,默认为英文的星期的首字母大写
                color: 'rgba(0,0,0,0)',
                fontSize: 10,
                textBorderColor: 'blue',
                textBorderWidth: 1,
                fontWeight: 'bold',
            },
            //silent: false,//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
        }
        const option: EChartOption = {
            tooltip: {},
            visualMap: [{
                min: 0,
                max: 10000,
                type: "piecewise",
                orient: "horizontal",
                left: "center",
                top: 65,
                textStyle: {
                    color: "#000"
                }
            }],
            calendar: calendar,
            series: [{
                type: "heatmap",
                coordinateSystem: "calendar",
                data: [
                    [1451606400000, 7721],
                    [1451692800000, 4010],
                    [1451779200000, 8753],
                    [1451865600000, 5817],
                    [1451952000000, 7649],
                    [1452038400000, 3607],
                    [1452124800000, 5874],
                    [1452211200000, 722],
                    [1452297600000, 5190],
                    [1452384000000, 7727],
                    [1452470400000, 9974],
                    [1452556800000, 8780],
                    [1452643200000, 2172],
                    [1452729600000, 4414],
                    [1452816000000, 6789],
                    [1452902400000, 6517],
                    [1452988800000, 3018],
                    [1453075200000, 2669],
                    [1453161600000, 6476],
                    [1453248000000, 5254],
                    [1453334400000, 5950],
                    [1453420800000, 4559],
                    [1453507200000, 6017],
                    [1453593600000, 9036],
                    [1453680000000, 7531],
                    [1453766400000, 9477],
                    [1453852800000, 4244],
                    [1453939200000, 8865],
                    [1454025600000, 8705],
                    [1454112000000, 7762],
                    [1454198400000, 1963],
                    [1454284800000, 1580],
                    [1454371200000, 2919],
                    [1454457600000, 4598],
                    [1454544000000, 2217],
                    [1454630400000, 4049],
                    [1454716800000, 3894],
                    [1454803200000, 2],
                    [1454889600000, 4254],
                    [1454976000000, 1982],
                    [1455062400000, 5849],
                    [1455148800000, 1011],
                    [1455235200000, 7048],
                    [1455321600000, 307],
                    [1455408000000, 824],
                    [1455494400000, 3573],
                    [1455580800000, 818],
                    [1455667200000, 3219],
                    [1455753600000, 2207],
                    [1455840000000, 1848],
                    [1455926400000, 6166],
                    [1456012800000, 7194],
                    [1456099200000, 7008],
                    [1456185600000, 8391],
                    [1456272000000, 571],
                    [1456358400000, 8644],
                    [1456444800000, 4733],
                    [1456531200000, 3292],
                    [1456617600000, 7555],
                    [1456704000000, 829],
                    [1456790400000, 9361],
                    [1456876800000, 402],
                    [1456963200000, 64],
                    [1457049600000, 5163],
                    [1457136000000, 5838],
                    [1457222400000, 480],
                    [1457308800000, 3725],
                    [1457395200000, 3602],
                    [1457481600000, 2457],
                    [1457568000000, 8969],
                    [1457654400000, 778],
                    [1457740800000, 9021],
                    [1457827200000, 7867],
                    [1457913600000, 9461],
                    [1458000000000, 112],
                    [1458086400000, 7600],
                    [1458172800000, 3016],
                    [1458259200000, 679],
                    [1458345600000, 1115],
                    [1458432000000, 3918],
                    [1458518400000, 2318],
                    [1458604800000, 7178],
                    [1458691200000, 7506],
                    [1458777600000, 4666],
                    [1458864000000, 4996],
                    [1458950400000, 8995],
                    [1459036800000, 9145],
                    [1459123200000, 5277],
                    [1459209600000, 9705],
                    [1459296000000, 9037],
                    [1459382400000, 4852],
                    [1459468800000, 6554],
                    [1459555200000, 5246],
                    [1459641600000, 889],
                    [1459728000000, 3938],
                    [1459814400000, 4036],
                    [1459900800000, 2559],
                    [1459987200000, 6241],
                    [1460073600000, 8515],
                    [1460160000000, 6201],
                    [1460246400000, 6452],
                    [1460332800000, 2886],
                    [1460419200000, 3027],
                    [1460505600000, 8308],
                    [1460592000000, 7132],
                    [1460678400000, 1647],
                    [1460764800000, 3081],
                    [1460851200000, 3616],
                    [1460937600000, 4570],
                    [1461024000000, 6233],
                    [1461110400000, 8170],
                    [1461196800000, 7374],
                    [1461283200000, 3670],
                    [1461369600000, 9141],
                    [1461456000000, 6748],
                    [1461542400000, 5889],
                    [1461628800000, 6160],
                    [1461715200000, 230],
                    [1461801600000, 3313],
                    [1461888000000, 7310],
                    [1461974400000, 7441],
                    [1462060800000, 9383],
                    [1462147200000, 2931],
                    [1462233600000, 9124],
                    [1462320000000, 4131],
                    [1462406400000, 6319],
                    [1462492800000, 4205],
                    [1462579200000, 8068],
                    [1462665600000, 249],
                    [1462752000000, 7882],
                    [1462838400000, 3967],
                    [1462924800000, 7016],
                    [1463011200000, 7109],
                    [1463097600000, 4517],
                    [1463184000000, 6843],
                    [1463270400000, 8019],
                    [1463356800000, 8864],
                    [1463443200000, 5161],
                    [1463529600000, 5048],
                    [1463616000000, 3090],
                    [1463702400000, 6441],
                    [1463788800000, 6469],
                    [1463875200000, 1859],
                    [1463961600000, 1742],
                    [1464048000000, 6356],
                    [1464134400000, 4832],
                    [1464220800000, 5062],
                    [1464307200000, 3288],
                    [1464393600000, 7706],
                    [1464480000000, 4413],
                    [1464566400000, 7537],
                    [1464652800000, 7409],
                    [1464739200000, 4098],
                    [1464825600000, 5211],
                    [1464912000000, 4051],
                    [1464998400000, 3201],
                    [1465084800000, 7791],
                    [1465171200000, 8524],
                    [1465257600000, 3836],
                    [1465344000000, 3517],
                    [1465430400000, 9743],
                    [1465516800000, 1461],
                    [1465603200000, 3082],
                    [1465689600000, 1194],
                    [1465776000000, 7093],
                    [1465862400000, 2406],
                    [1465948800000, 9260],
                    [1466035200000, 5673],
                    [1466121600000, 7496],
                    [1466208000000, 9043],
                    [1466294400000, 8354],
                    [1466380800000, 9931],
                    [1466467200000, 1583],
                    [1466553600000, 7286],
                    [1466640000000, 8945],
                    [1466726400000, 9648],
                    [1466812800000, 7244],
                    [1466899200000, 8393],
                    [1466985600000, 2390],
                    [1467072000000, 8292],
                    [1467158400000, 7557],
                    [1467244800000, 3240],
                    [1467331200000, 796],
                    [1467417600000, 9713],
                    [1467504000000, 8938],
                    [1467590400000, 8887],
                    [1467676800000, 7904],
                    [1467763200000, 4421],
                    [1467849600000, 9893],
                    [1467936000000, 5778],
                    [1468022400000, 168],
                    [1468108800000, 2821],
                    [1468195200000, 36],
                    [1468281600000, 7605],
                    [1468368000000, 5205],
                    [1468454400000, 3467],
                    [1468540800000, 3303],
                    [1468627200000, 3315],
                    [1468713600000, 8540],
                    [1468800000000, 2420],
                    [1468886400000, 8757],
                    [1468972800000, 1877],
                    [1469059200000, 8460],
                    [1469145600000, 9397],
                    [1469232000000, 3629],
                    [1469318400000, 4912],
                    [1469404800000, 4706],
                    [1469491200000, 9197],
                    [1469577600000, 6703],
                    [1469664000000, 9824],
                    [1469750400000, 8183],
                    [1469836800000, 1029],
                    [1469923200000, 8493],
                    [1470009600000, 4104],
                    [1470096000000, 8130],
                    [1470182400000, 7592],
                    [1470268800000, 3324],
                    [1470355200000, 4268],
                    [1470441600000, 7802],
                    [1470528000000, 5832],
                    [1470614400000, 7808],
                    [1470700800000, 3400],
                    [1470787200000, 9977],
                    [1470873600000, 7054],
                    [1470960000000, 1768],
                    [1471046400000, 745],
                    [1471132800000, 9784],
                    [1471219200000, 620],
                    [1471305600000, 2316],
                    [1471392000000, 2573],
                    [1471478400000, 1806],
                    [1471564800000, 877],
                    [1471651200000, 1395],
                    [1471737600000, 2266],
                    [1471824000000, 3893],
                    [1471910400000, 2018],
                    [1471996800000, 3452],
                    [1472083200000, 2459],
                    [1472169600000, 2752],
                    [1472256000000, 8573],
                    [1472342400000, 1998],
                    [1472428800000, 3826],
                    [1472515200000, 4395],
                    [1472601600000, 3091],
                    [1472688000000, 4784],
                    [1472774400000, 1662],
                    [1472860800000, 7966],
                    [1472947200000, 6102],
                    [1473033600000, 1641],
                    [1473120000000, 5426],
                    [1473206400000, 4700],
                    [1473292800000, 8826],
                    [1473379200000, 5051],
                    [1473465600000, 7928],
                    [1473552000000, 7784],
                    [1473638400000, 1099],
                    [1473724800000, 6929],
                    [1473811200000, 4532],
                    [1473897600000, 4698],
                    [1473984000000, 2328],
                    [1474070400000, 2169],
                    [1474156800000, 2642],
                    [1474243200000, 921],
                    [1474329600000, 9090],
                    [1474416000000, 1730],
                    [1474502400000, 2116],
                    [1474588800000, 2761],
                    [1474675200000, 3339],
                    [1474761600000, 4006],
                    [1474848000000, 9511],
                    [1474934400000, 2245],
                    [1475020800000, 95],
                    [1475107200000, 2551],
                    [1475193600000, 1596],
                    [1475280000000, 4947],
                    [1475366400000, 7259],
                    [1475452800000, 4769],
                    [1475539200000, 2730],
                    [1475625600000, 1790],
                    [1475712000000, 9289],
                    [1475798400000, 7449],
                    [1475884800000, 4418],
                    [1475971200000, 6045],
                    [1476057600000, 8819],
                    [1476144000000, 9854],
                    [1476230400000, 9556],
                    [1476316800000, 4724],
                    [1476403200000, 6788],
                    [1476489600000, 675],
                    [1476576000000, 6254],
                    [1476662400000, 9122],
                    [1476748800000, 3360],
                    [1476835200000, 9734],
                    [1476921600000, 7144],
                    [1477008000000, 3762],
                    [1477094400000, 8880],
                    [1477180800000, 2939],
                    [1477267200000, 9647],
                    [1477353600000, 2191],
                    [1477440000000, 2379],
                    [1477526400000, 8138],
                    [1477612800000, 9386],
                    [1477699200000, 3083],
                    [1477785600000, 6513],
                    [1477872000000, 2941],
                    [1477958400000, 3495],
                    [1478044800000, 9137],
                    [1478131200000, 120],
                    [1478217600000, 9062],
                    [1478304000000, 1383],
                    [1478390400000, 6795],
                    [1478476800000, 7618],
                    [1478563200000, 7431],
                    [1478649600000, 9300],
                    [1478736000000, 8366],
                    [1478822400000, 4741],
                    [1478908800000, 1400],
                    [1478995200000, 5450],
                    [1479081600000, 546],
                    [1479168000000, 3218],
                    [1479254400000, 4854],
                    [1479340800000, 9698],
                    [1479427200000, 484],
                    [1479513600000, 341],
                    [1479600000000, 6960],
                    [1479686400000, 5495],
                    [1479772800000, 2244],
                    [1479859200000, 8602],
                    [1479945600000, 3292],
                    [1480032000000, 6929],
                    [1480118400000, 1804],
                    [1480204800000, 1218],
                    [1480291200000, 5811],
                    [1480377600000, 1422],
                    [1480464000000, 1969],
                    [1480550400000, 9005],
                    [1480636800000, 3291],
                    [1480723200000, 415],
                    [1480809600000, 9837],
                    [1480896000000, 1079],
                    [1480982400000, 4289],
                    [1481068800000, 7787],
                    [1481155200000, 3913],
                    [1481241600000, 1243],
                    [1481328000000, 4418],
                    [1481414400000, 7280],
                    [1481500800000, 7776],
                    [1481587200000, 1862],
                    [1481673600000, 8028],
                    [1481760000000, 4222],
                    [1481846400000, 5010],
                    [1481932800000, 6618],
                    [1482019200000, 3095],
                    [1482105600000, 6861],
                    [1482192000000, 4606],
                    [1482278400000, 3273],
                    [1482364800000, 2737],
                    [1482451200000, 5787],
                    [1482537600000, 9597],
                    [1482624000000, 1078],
                    [1482710400000, 3578],
                    [1482796800000, 2302],
                    [1482883200000, 8463],
                    [1482969600000, 4020],
                    [1483056000000, 8599],
                    [1483142400000, 737]
                ]
            }]
        }
        return () => <Base option={option} style={css} />
    }
})