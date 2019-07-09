// JavaScript Document
$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

$(document).ready(function() {
    showDown();
    menuToggle();
    myInfo();

    // 윈도우 화면이 1550px보다 작을 경우 gnb가 자동으로 줄어들도록 설정
/*     $(window).on('resize', function() {
        windowWidth = $(window).width();
        if (windowWidth < 1200) {
            $('#header').addClass('on');
            $('#gnb').addClass('on');
            $('#main').addClass('on');
        }
    }); */
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
        width: 260,
        height: 260,
        chartArea: {width: 230, height: 220},
        pieSliceText: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
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
      height: 260,
      width: 600,
      hAxis: {title: ''},
      bar: {groupWidth: '50%'}
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }