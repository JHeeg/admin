// JavaScript Document
$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

$(document).ready(function() {
    menuToggle();
    myInfo();
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
// 내정보 토글
function myInfo() {
    $('#tnb > li.myinfo > a').on('click', function() {
        $(this).parent().toggleClass('on');
    });
}
// 테이블 프로젝트 상태에 따른 컬러 표시
function statusColor() {
    $('tbody tr').each(function() {
        var $selector = $(this).find('td.status > span')
        var colorCode = $selector.text();
        //console.log(colorCode);
        if (colorCode === 'Completed') {
            $selector.css({'background-color': '#3CFA58'});
        } else if (colorCode === 'Delayed') {
            $selector.css({'background-color': '#F74734'});
        } else if (colorCode === 'In Process') {
            $selector.css({'background-color': '#F7CA36'});
        }
    });
}
// iscroll
function scroller() {
    setTimeout(function() {
        var myScroll = new IScroll('#scroll-1', {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: false,
            interactiveScrollbars: true
        });
        var myScroll = new IScroll('#scroll-2', {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: false,
            interactiveScrollbars: true
        });
        var myScroll = new IScroll('#scroll-3', {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: false,
            interactiveScrollbars: true
        });
    }, 300);
}
// 구글차트 도넛형
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['sale', 'total'],
        ['Urgent', 2],
        ['Normal', 2],
        ['Completed', 6],
    ]);

    var options = {
        pieHole: 0.8,
        legend: {position: 'bottom', fontSize: 20},
        width: '100%',
        height: 260,
        chartArea: {width: 230, height: 220},
        pieSliceText: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
    window.addEventListener('resize', function() {chart.draw(data, options);}, false);
}
// 구글차트 세로막대형
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
    ]);

    var options = {
        legend: {position: 'none'},
        width: '100%',
        height: 260,
        hAxis: {title: ''},
        bar: {groupWidth: '50%'}
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
    window.addEventListener('resize', function() {chart.draw(data, options);}, false);
}