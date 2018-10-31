$(function() {
    // $.ajax({
    //     type: 'get',
    //     url: '/category/queryTopCategoryPaging',
    //     data: {
    //         page: 1,
    //         pageSize: 100
    //     },
    //     success: function(res) {
    //         console.log(res);
    //     }

    // })
    $.ajax({
        url: '/category/queryTopCategoryPaging',
        type: 'get',
        data: {
            page: 1,
            pageSize: 100
        },
        success: function(result) {

            // totalPage = Math.ceil(result.total/pagesize);
            console.log(result);
            $('#categoryBox').html(template('categoryTpl', { data: result }));

        }
    });
})