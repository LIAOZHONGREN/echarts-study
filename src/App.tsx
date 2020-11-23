

import { ref, defineComponent } from "vue";
import Line from "./echarts/line/line";
//import components from './echarts/echartsComponentStudy/components'
import components from './echarts/echartsSeriesStudy/components'

export default defineComponent({
  name: "App",
  components: { ...components },
  setup() {
    return () => (
      <div>
        <components.SeriesGauge />
      </div>
    )
  },
});
