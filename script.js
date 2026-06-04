// 최소 스크립트: 푸터의 연도를 자동으로 표시합니다.
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

function recalc() { // 가격 계산 함수
    var total = 0;
    var checks = document.getElementsByClassName("menu -check");
    var qtys = document.getElementsByClassName("menu -qty");
    for (var i = 0; i < checks.length; i++) {
        if (checks[i].checked) { // 체크된 항목만 계산
            var price = parseInt(checks[i].value);
            var quantity = parseInt(qtys[i].value);
            total += price * quantity;
        }
    }
    document.getElementById("total").value = total;
}

function validate(e) { // 전송 제어 (onsubmit)
    var total = parseInt(document.getElementById("total").value);
    if (total == 0) alert("메뉴를 선택해주세요.");
    else alert("주문 완료! 총액: " + total + "원");
    e.preventDefault(); // 페이지 이동 막기 공통()
    return false;
}

// 1. 초기 좌표 설정
var x = 100, y = 100;
// 2. 페이지 로딩이 완료되면(onload) 실행
window.onload = function () {
    // 3. 키보드를 누를 때마다(onkeydown) 실행
    window.onkeydown = function (e) {
        // 37:Left , 38:Up, 39:Right , 40:Down
        switch (e.keyCode) {
            case 37: x -= 10; break; // 왼쪽
            case 38: y -= 10; break; // 위쪽
            case 39: x += 10; break; // 오른쪽
            case 40: y += 10; break; // 아래쪽
        }
        // 변경된 좌표를 자동차(DOM)에 반영
        var car = document.getElementById("car");
        car.style.left = x + "px";
        car.style.top = y + "px";
    };
};
