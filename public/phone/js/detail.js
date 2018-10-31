$(function() {
    var allNum = 0;
    //截取从查询页面传过来的id
    var id = getUrl(location.href, 'id');
    // console.log(id);
    $.ajax({
        type: 'get',
        url: '/product/queryProductDetail',
        data: {
            id: id
        },
        success: function(res) {
            console.log(res);
            var html = template('detailTpl', res);
            $('#product-box').html(html);
            allNum = res.num;
            var gallery = mui('.mui-slider');
            gallery.slider();
        }
    })


    //尺码
    $('#product-box').on('tap', '.size span', function() {
        //选择的尺码颜色高亮
        $(this).addClass('active').siblings().removeClass('active');
    })



    //给件数中的-做绑定事件
    $('#product-box').on('tap', '#reduce', function() {
            var num = $('#inp').val();
            // alert(1);
            num--;
            console.log(num);
            if (num < 1) {
                num = 1;
            }
            $('#inp').val(num);
        })
        //给件数中的+做绑定事件
    $('#product-box').on('tap', '#increase', function() {
        var num = $('#inp').val();
        // console.log(num);
        num++;
        console.log(num)
        if (num > allNum) {
            num = allNum;
        }
        $('#inp').val(num);
    })

})