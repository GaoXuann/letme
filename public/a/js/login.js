//登录拦截
$.ajax({
    type: 'get',
    url: '/employee/checkRootLogin',
    async: false,
    success: function(res) {
        if (res.success) {
            location.href = 'user.html';
        }
        console.log(res);
    }
})
$(function() {
    $('.btn-login').on('click', function() {

        var userName = $('.form-username').val();
        var passWord = $('.form-password').val();
        // alert(userName);
        if (!userName) {
            alert('请输入用户名');
            return;
        }
        if (!passWord) {
            alert('请输入密码');
            return;
        }
        $.ajax({
            type: 'post',
            url: '/employee/employeeLogin',
            data: {
                username: userName,
                password: passWord
            },
            success: function(res) {
                if (res.success) {
                    alert('登录成功');
                    location.href = "user.html";
                } else {
                    console.log(res.message);
                }
            }
        })
    })
})