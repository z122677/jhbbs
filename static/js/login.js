function login() {
    $.post({
        url:"/login",
        data:$('#login').serialize(),
        success:function (data) {
            alert("你获取的数据为"+data)
        }
    })
}
