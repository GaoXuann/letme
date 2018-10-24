$(function() {
    //页面滚动条
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005,
    })

    //左侧数据获取
    $.ajax({
        type: 'get',
        url: '/category/queryTopCategory',
        success: function(result) {
            // console.log(result);
            // console.log(result.rows);
            // var html = template('leftTpl', { data: result.rows });
            var html = template('leftTpl', result);
            // console.log(html);
            $('#left').html(html);

            // 判断左侧是否有数据
            if (result.rows.length > 0) {
                // 获取第一个的id,默认显示第一个
                var id = result.rows[0].id;

                //右侧数据获取
                $.ajax({
                    type: 'get',
                    url: '/category/querySecondCategory',
                    data: {
                        id: id
                    },
                    success: function(result) {
                        // console.log(result);
                        var html = template('rightTmp', result);
                        $('#right').html(html);
                    }
                })
            }
        }
    })


    //点击左侧的a获取对应的id，在二级导航中显示相应的内容
    $('#left').on('tap', 'a', function() {
        //获取点击事件的id
        var id = $(this).data('id');
        // 左侧的a点谁谁高亮
        $(this).addClass('active').siblings().removeClass('active');
        //右侧数据获取
        $.ajax({
            type: 'get',
            url: '/category/querySecondCategory',
            data: {
                id: id
            },
            success: function(result) {
                console.log(result);
                var html = template('rightTmp', result);
                console.log(html);
                $('#right').html(html);
            }
        })

    })


})