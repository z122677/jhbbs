// 登录 - 验证逻辑


function login() {
    let stu_code = $("#username").val();
    let password = $("#password").val();
    let check_code = $("#check_code").val();
    $.ajax({
        url: back_host + "login/",
        data: {
            "stu_code": stu_code,
            "password": password,
            "check_code": check_code
        },
        type: "POST",
        dataType: "json",
        async: false,
        success: data => {
            console.log(data);
            if( data.code === 400)
            {
                alert(data.msg);
                return;
            }
            localStorage.setItem("token", data.token);
            top.location = 'index.html';
        },
    });

}

function getCode() {
    $.ajax({
        type: "GET",
        url: back_host + "login/",
        success: data => {
            $(".field img").attr("src", data)
        }
    })
}

function auth() {
    let token = localStorage.getItem("token");
    if (token === "") {
        top.location = 'login.html';
    }
    else {
        $.ajax({
            type: "POST",
            data: {
                "token": token
            },
            dataType: "json",
            url: back_host + "auth/",
            async: false,
            success: data => {
                if (data.code === 400) {
                    alert(data.msg);
                    top.location = "login.html"
                }
                $(".menu img").attr("src", data.user.avatar_url);
                $(".item span").text(data.user.username);
            }
        })
    }
}



