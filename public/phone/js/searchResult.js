var html = "";
var page = 1;
var This = null;
$(function() {
    //获取从地址栏传过来的关键字
    var keyword = getUrl(location.href, 'keyword');
    console.log(keyword);
    // 实现页面上拉加载
    // 初始化
    mui.init({
        pullRefresh: {
            container: refreshContainer, //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up: {
                height: 50, //可选.默认50.触发上拉加载拖动距离
                auto: true, //可选,默认false.自动上拉加载一次
                contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });
    //从页面获取数据
    function getData() {
        if (!This) {
            This = this;
            console.log(This)
        }
        $.ajax({
            url: '/product/queryProduct',
            type: 'get',
            data: {
                'proName': keyword,
                // 'price': sortPrice,
                'page': page++,
                'pageSize': 3
            },
            success: function(res) {
                // console.log(res);
                if (res.data.length > 0) {
                    html += template('ListTmp', res);
                    $('#search-box').html(html);

                    // 告诉上拉加载组件当前数据加载完毕
                    This.endPullupToRefresh(false);
                    console.log(page);
                } else {
                    // 告诉上拉加载组件当前数据加载完毕
                    This.endPullupToRefresh(true);
                }
            }
        })
    }
})