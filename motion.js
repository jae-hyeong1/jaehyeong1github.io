$('.gnb > li > h2').click(function() {
    var submenu = $(this).next('.submenu');

    // 현재 클릭한 메뉴의 하위 메뉴를 천천히 토글
    submenu.slideToggle(300); // 300ms 애니메이션 시간 설정

    // active 클래스 토글로 라인을 보이게/숨기게 설정
    submenu.toggleClass('active');

    // 다른 메뉴의 하위 메뉴는 숨기기
    $('.gnb > li > .submenu').not(submenu).slideUp(300).removeClass('active'); // 300ms 애니메이션 시간 설정
});

// 하위 메뉴가 클릭되지 않았을 때도 사라지지 않도록
$('.gnb > li > .submenu').click(function(event) {
    event.stopPropagation(); // 클릭 이벤트가 부모 요소로 전파되지 않도록 방지
});

$(document).ready(function() {
    // .user 요소를 클릭하면 drop_down이 토글됨
    $('.user').click(function() {
        var dropDown = $(this).siblings('.drop_down');
        dropDown.toggle(); // drop_down 보이기/숨기기 토글
    });
});










