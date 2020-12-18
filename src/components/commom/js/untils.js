function debounce(fn, wait) {
    let timeout = null
    if (timeout !== null) {
        clearTimeout(timeout)
        timeout = null
    }
    console.log(timeout)
    timeout = setTimeout(fn, wait)
}
// 没有扩展性
function throttle(wait) {
    let time
    return function() {
        var [res, row] = arguments
        row.status = !res
        if (!time) {
            //当time为undefined时  setTimeout赋值给time   之后的一秒钟的点击不做任何事
            time = setTimeout(() => {
                console.log(res, row)
                time = null
                var msg = res ? "启用成功" : "禁用成功"
                row.status = res
                // 为什么this指向没有变
                this.swithMessage(msg, "success")
            }, wait)
        }
    }
}

// 最终解决方案
function throttleText(fn, wait) {
    let time
    return function() {
        var that = this
        if (!time) {
            //当time为undefined时  setTimeout赋值给time   之后的一秒钟的点击不做任何事
            time = setTimeout(() => {
                // 使用call 改变this指向为vue 为什么没用
                // fn.call(that, arguments)
                fn(that, arguments)
                time = null
            }, wait)
        }
    }
}
module.exports = {
    throttle,
    debounce,
    throttleText
}
