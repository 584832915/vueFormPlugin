import sfDemo from "./demo.vue"
const demoPlugin = {
    install:function(Vue){
        Vue.component("sfDemo",sfDemo)
    }
}
export default demoPlugin