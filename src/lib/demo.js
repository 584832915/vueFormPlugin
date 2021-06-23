import sfDemo from "./demo.vue"
const demoPlugin = {
    install:(Vue)=>{
        Vue.component("sfDemo",sfDemo)
    }
}
export default demoPlugin