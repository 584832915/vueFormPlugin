import sfDemo from "./demo.vue"
sfDemo.install = function(Vue){
    Vue.component(sfDemo.name,sfDemo)
}
export default sfDemo