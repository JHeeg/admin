// JavaScript Document
$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

$(document).ready(function() {
    showDown();
    menuToggle();
    // multiScroll();

    // 윈도우 화면이 1550px보다 작을 경우 gnb가 자동으로 줄어들도록 설정
    $(window).on('resize', function() {
        windowWidth = $(window).width();
        if (windowWidth < 1550) {
            $('#header').addClass('on');
            $('#gnb').addClass('on');
            $('#main').addClass('on');
        }
    });
});

// activity 영역의 다운 화살표를 누르면 해당 내용이 보여지는 함수
function showDown() {
    $('a.slide-down').on('click', function() {
        $(this).parent().next('.content').stop().slideToggle('fast');
    });
}
// 메뉴버튼 토글
function menuToggle() {
    $('#header a.menu').on('click', function() {
        $(this).parent().toggleClass('on');
        $('#gnb').toggleClass('on');
        $('#main').toggleClass('on');
    });

}
