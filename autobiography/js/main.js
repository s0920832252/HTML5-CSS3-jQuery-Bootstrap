// 當畫面元素載入完成後，執行以下...
$(function () {
    // item被點時 切換內容.
    /*
    $('.navList1').click(function () {
        $("section.content").load("personalData.html");
    });
    $('.navList2').click(function () {
        $("section.content").load("experience.html");
    });
    $('.navList3').click(function () {
        $("section.content").load("jobRequess.html");
    });
    $('.navList4').click(function () {
        $("section.content").load("skill.html");
    });
    $('.navList5').click(function () {
        $("section.content").load("autobigography.html");
    });
    $('.navList6').click(function () {
        $("section.content").load("recommend.html");
    });
    */

    $('.col-List').click(function () {
        /*修改點到的data-target元素的值為1223*/
        //        var target = $(this).attr('data-target', 1223);

        var target = $(this).attr('data-target');
        console.log('現在的target是:' + target);


        $('.page').hide();
        $(target).fadeIn(500);
    });

});
