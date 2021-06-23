import SfDemo from "./demo/index"
const components = [
    SfDemo
]
const install = function (Vue) {
    if (install.installed) return
    install.installed = true
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install()
}
// 整体导出 用户全部引入
export default {
    install
}