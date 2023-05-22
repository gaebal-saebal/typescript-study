// 함수에 타입 지정 parameter랑, return에 타입 지정 가능
function baz(x) {
    return x * 2;
}
// void type : return이 없는 함수에 지정 - 실수로 값을 return하는걸 예방해줌
function qux(x) {
    2 + x;
}
// 함수 parameter에 타입이 지정되어 있으면 반드시 parameter를 받아야 함
// baz(3); // no error
// baz(); // error
// parameter를 옵션화 하기 위해서는 ?를 붙여서 optional chaining을 하면 됨
// 변수? : 타입은 해당 타입과 undefined의 union type과 같음
function foo1(x) {
    return x + 5;
}
//이거랑 같음
function foo2(x) {
    return x + 5;
}
// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
function printName(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log('이름이 없습니다');
    }
}
// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function counter(e) {
    return String(e).length;
}
// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
function canMarry(money, house, face) {
    var sum;
    var housePoint;
    house ? (housePoint = 500) : (housePoint = 0);
    var facePoint;
    face === '상' ? (facePoint = 100) : (facePoint = 0);
    sum = money + housePoint + facePoint;
    if (sum >= 600) {
        return '결혼가능';
    }
}
console.log(canMarry(700, false, '중'));
console.log(canMarry(100, false, '상'));
