$(function() {
    //保存用户信息
    var userInfo = null;
    $.ajax({
        type: 'get',
        url: '/user/queryUserMessage',
        success: function(res) {
            console.log(res);

            //判断用户是否登录
            if (res.error && res.error == 400) {
                // location.href = 'login.html';
            }
            userInfo = res;
            console.log(userInfo);
            var html = template('userTpl', userInfo);
            $('#userInfoBox').html(html);
        }
    })



    //退出登录
    $('#logout').on('tap', function() {
        $.ajax({
            type: 'get',
            url: '/employee/employeeLogout',
            success: function(response) {
                console.log(response);
                if (response.success) {
                    mui.toast("退出登录成功");
                    setTimeout(function() {
                        location.href = "index.html";
                    }, 2000)
                }
            }
        })
    })


})