
import { ref, defineComponent, onMounted } from 'vue'
import VuexTest from "./VuexTest.vue";
import './tsx.scss'

const Tsx = defineComponent({
    props: { text: String },
    components: { VuexTest },
    setup(props, context) {
        const temp = ref(0);
        console.log(context.attrs);
       // context.attrs['on-func']()
        return { temp }
    },
    mounted() {
        this.$emit('func')
    },
    methods: {
        count() {
            this.temp += 1
        }
    },
    render() {
        const { temp, count, text } = this
        return (
            <div>
                <VuexTest />
                <div class='tsx'>{text}</div>
                <div>{temp}</div>
                <button onClick={count}>+</button>
            </div>
        )
    }
})

export default Tsx