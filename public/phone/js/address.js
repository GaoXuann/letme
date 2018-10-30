$(function() {

    //存储收货地址
    var address = null;
    $.ajax({
        type: 'get',
        url: '/address/queryAddress',
        success: function(res) {
            // console.log(res);
            address = res;
            var html = template('addressTpl', { result: res });
            // console.log(html);
            $('#address-box').html(html);

        }
    })

    //删除收获地址
    $('#address-box').on('tap', '.delete-btn', function() {
        //获取当前的删除的id
        var id = $(this).data('id');
        // console.log(id);
        mui.confirm('确定要删除吗?', function(message) {
            if (message.index == 1) {
                $.ajax({
                    type: 'post',
                    url: '/address/deleteAddress',
                    data: {
                        id: id
                    },
                    success: function(res) {
                        // console.log(res);
                        if (res.success) {
                            location.reload();
                        } else {

                            // 取消删除
                            // 关闭列表滑出效果
                            mui.swipeoutClose(li);

                        }
                    }
                })
            }
        })
    })

    //修改收货地址
    $('#address-box').on('tap', '.edit-btn', function() {
        //获取编辑按钮上的id
        var id = $(this).data('id');
        // alert(1);
        console.log(address);
        for (var i = 0; i < address.length; i++) {
            if (address[i].id == id) {
                localStorage.setItem('editAddress', JSON.stringify(address[i]));
                break;
            }
        }
        // 进入编辑页面
        location.href = "addAddress.html?isEdit=1"
    })
})