

import { ref, defineComponent } from "vue";
//import Line from "./echarts/line/line";
//import components from './echarts/echartsComponentStudy/components'
import components from './echarts/echartsSeriesStudy/components'
//import Line from './echarts/examples/line/line'

export default defineComponent({
  name: "App",
  components: { ...components },
  setup() {
    return () => (
      <div>
        <components.SeriesCustom />
      </div>
    )
  },
});
