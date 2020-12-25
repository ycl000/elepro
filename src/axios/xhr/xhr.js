var xhr = options => {
    var op = {
        methods: "get",
        url: "www.taobao.com",
        success: function(data) {
            console.log(data + "")
        }
    }
    Object.assign(op, options)
    var xhr = new XMLHttpRequest()

    // 绑定回调函数
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 成功回调
            op.success(JSON.parse(xhr.responseText))
        }
    }

    xhr.open(op.methods, op.url)
    xhr.send()
}

export default xhr
