$(function() {
    //   获取地址栏中的参数
    //   @param  {string} url 地址字符串
    //   @param  {string} name 要获取的参数名称
    //  @return {string}     参数名称对应的参数值

    function getUrl(url, name) {
        //找到?的位置，并从该位置截取
        // var parme = url.substr(indexOf(' ? '));
        var index = url.indexOf('?');
        var parmes = url.substr(index + 1);
        // console.log(parme);
        var parme = parmes.split('&');
        //将该数组进行遍历，将每一个用=进行分割
        // split将字符串分割成数组
        for (var i = 0; i < parme.length; i++) {
            var current = parme[i].split('=');
            if (current[0] == name) {

                return current[1];

            }
        }
        return null;
    }


    //恢复a的跳转
    mui('body').on('tap', 'a', function() {

        mui.openWindow({ url: this.href })

    });
})