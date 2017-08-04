//當靜態元素載入完畢,執行...     |   document代表靜態元素

/*當靜態元素讀取完畢後   function(){}*/
//$(document).ready(function () {
//    /*當.toggle-chatroom 被點擊時 執行...*/
//    $('.toggle-chatroom').click(function () {
//        /*fadeIn可以有淡出的效果
//        fadeToggle可以有淡出淡入的效果*/
//        $('.chatroom').fadeToggle();
//    });
//});

/*似乎不用放在.ready()內  ????  */
$('.toggle-chatroom').click(function () {
    /*fadeIn可以有淡出的效果
    fadeToggle可以有淡出淡入的效果*/
    $('.chatroom').fadeToggle();
});
