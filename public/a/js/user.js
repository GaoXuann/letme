$(function() {
    //获取用户信息
    $.ajax({
        type: 'get',
        url: '/user/queryUser',
        data: {
            page: 1,
            pageSize: 10
        },
        success: function(res) {
            console.log(res.rows);
            var html = template('userTpl', res);
            console.log(html);
            $('tbody').html(html);
        }
    })


    //改变用户状态
    $('tbody').on('click', '.editBtn', function() {
        var id = $(this).data('id');
        var isDelete = parseInt($(this).data('delete'));
        // alert(id);
        $.ajax({
            type: 'post',
            url: '/user/updateUser',
            data: {
                id: id,
                isDelete: isDelete ? 0 : 1
            },
            success: function(response) {
                // console.log(response);
                if (response.success) {

                    location.reload();

                }
            }
        })
    })

})