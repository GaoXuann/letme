$(function() {
    //将地址页面的数据渲染到添加地址页面
    if (localStorage.getItem('editAddress')) {
        var address = JSON.parse(localStorage.getItem('editAddress'));
        console.log(address);
        var html = template('editTpl', address);
        console.log(html);
        $('#editForm').html(html);
    }

    var picker = new mui.PopPicker({
        layer: 3
    });
    picker.setData(cityData)
    $('#selectCity').on('tap', function() {
        // alert(1);
        picker.show(function(selectItems) {
            console.log(selectItems);
            $('#selectCity').val(selectItems[0].text + selectItems[1].text + selectItems[2].text);
        })
    })

    //点击确认按钮将添加的地址添加到页面
    $('#addAddress').on('tap', function() {
        var userName = $('#username').val();
        var postCode = $('#postCode').val();
        var selectCity = $('#selectCity').val();
        var detail = selectCity + $('#detail').val();
        if (!userName.trim()) {
            mui.toast('请输入收件人');
            return;
        }
        if (!postCode.trim()) {
            mui.toast("请输入邮政编码");
            return;
        }
        var data = {
            address: selectCity,
            addressDetail: detail,
            recipients: userName,
            postcode: postCode
        };
        //地址添加
        $.ajax({
                type: 'post',
                url: '/address/addAddress',
                data: data,
                success: function(res) {
                    console.log(res);
                    if (res.success) {
                        mui.toast('添加地址成功');
                        location.href = 'address.html';
                    }
                }
            })
            //修改地址
        $.ajax({
            type: 'post',
            url: '/address/updateAddress',
            data: data,
            success: function(res) {
                console.log(res);
                if (res.success) {
                    mui.toast('修改添加地址成功');
                    location.href = 'address.html';
                }
            }
        })
    })


})