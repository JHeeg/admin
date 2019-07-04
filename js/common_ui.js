// JavaScript Document
$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

$(document).ready(function() {
    showDown();
    menuToggle();
});

// activity 영역의 다운 화살표를 누르면 해당 내용이 보여지는 함수
function showDown() {
    $('a.slide-down').on('click', function() {
        $(this).parent().next('.content').stop().slideToggle('fast');
    });

}
function menuToggle() {
    $('#header a.menu').on('click', function() {
        $(this).toggleClass('toggle');
        $('#gnb').toggleClass('on');
    });
}