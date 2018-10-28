$(function() {
    // var picker = new mui.PopPicker({
    //     layer: 3
    // });
    // picker.setData(cityData)
    // picker.pickers[0].setSelectedIndex(1);
    // picker.pickers[1].setSelectedIndex(1);
    // picker.show(function(SelectedItem) {
    //     console.log(SelectedItem);
    // })  

    if (localStorage.getItem('editAddress')) {
        var address = localStorage.getItem('editAddress');
        console.log(address);
        var html = template('editTpl', address);
        console.log(html);
    }
})