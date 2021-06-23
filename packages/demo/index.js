import sfDemo from "./demo.vue"
const demoPlugin = {
    install:(Vue)=>{
        Vue.component(sfDemo.name,sfDemo)
    }
}
export default demoPlugin