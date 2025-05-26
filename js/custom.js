$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on')
        /*active를 붙여도 된다. 일반적으로는 on 사용한다.*/
        $('#header .hd_wrap h1').toggleClass('on')
    })
});
