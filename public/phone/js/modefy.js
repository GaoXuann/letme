$(function() {


    //获取验证码
    $('#getCode').on('tap', function() {
        $.ajax({
            type: 'get',
            url: '/user/vCodeForUpdatePassword',
            success: function(response) {
                console.log(response);
            }
        })
    })

    $('#modify-btn').on('tap', function() {
        var originPass = $('#originPass').val();
        var newPass = $('#newPass').val();
        var confirmNewPass = $('#confirmNewPass').val();
        var vCode = $('#vCode').val();
        // console.log(vCode);
        if (!originPass) {
            mui.toast('请输入密码');
            return;
        }
        if (newPass != confirmNewPass) {
            mui.toast('两次密码输入不一样');
            return;
        }
        $.ajax({
            type: 'post',
            url: '/user/updatePassword',
            data: {
                oldPassword: originPass,
                newPassword: newPass,
                vCode: vCode
            },
            success: function(res) {
                // console.log(res);
                if (res.success) {
                    mui.toast('密码修改成功');
                    localtion.href = 'login.html';
                } else {
                    mui.toast(res.message);
                }
            }
        })
    })
})