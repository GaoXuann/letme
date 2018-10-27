//登录拦截
$.ajax({
    type: 'get',
    url: '/employee/checkRootLogin',
    async: false,
    success: function(res) {
        if (res.error && res.error == 400) {
            location.href = 'login.html';
        }
        console.log(res);
    }
})
$(function() {
    //退出登录
    $('.login_out_bot').on('click', function() {
        alert(1);
        confirm('122');
        if (confirm('确认要退出吗?')) {
            $.ajax({
                type: 'get',
                url: '/employee/employeeLogout',
                success: function(res) {
                    console.log(res);
                    if (res.success) {
                        location.href = 'login.html';
                    } else {
                        console.log(res.message);
                    }
                }
            })
        }
    })

});