$(function() {
    //截取Edit后面的数字判断是编辑还是添加
    var isEdit = Number(getUrl(location.href, 'isEdit'));
    //进入编辑界面
    if (isEdit) {
        //将地址页面的数据渲染到添加地址页面
        if (localStorage.getItem('editAddress')) {
            var address = JSON.parse(localStorage.getItem('editAddress'));
            console.log(address);
            var html = template('editTpl', address);
            console.log(html);
            $('#editForm').html(html);
        }
    } else {
        var html = template('editTpl', {});
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
        //修改页面
        if (isEdit) {
            var url = "/address/updateAddress"
            data.id = address.id;
        } else {
            //添加页面
            var url = "/address/addAddress"
        }
        $.ajax({
            type: 'post',
            url: url,
            data: data,
            success: function(res) {
                console.log(res);
                if (res.success) {
                    if (isEdit) {
                        mui.toast('修改地址成功');
                        location.href = 'address.html';
                    } else {
                        mui.toast('添加地址成功');
                        location.href = 'address.html';
                    }
                }
            }
        })
    })


})