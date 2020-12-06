export default {
    install(Vue) {
        Vue.prototype.get_Cookie = function() {
            return document.cookie.split(";")[0].split("=")[1]
        }
    }
}
