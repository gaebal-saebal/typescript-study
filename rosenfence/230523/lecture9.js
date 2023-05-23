// 함수 type은 함수 표현식에만 사용 가능
var qux = function (a) {
    return 10;
};
// object 안에 함수 타입 지정
var info = {
    name: 'park',
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('앙용');
    },
};
info.plusOne(1);
// 콜백함수
function fun1(a) {
    a();
}
function fun2() { } // 얘가 콜백함수
var infoAssign = {
    name: 'park',
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('앙용');
    },
};
var cutZero = function (str) {
    if (str.slice(0, 1) === '0') {
        return str.slice(1, str.length);
    }
    else
        return str;
};
console.log(cutZero('0120340123023013'));
var removeDash = function (str) {
    var resultArr = str.split('-');
    return Number(resultArr.join(''));
};
console.log(removeDash('13-123-1313-1313'));
console.log(removeDash('13-123'));
/*
(숙제3) 함수에 함수를 집어넣고 싶습니다.
숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다.
이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
이 함수는 어떻게 만들면 될까요?
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게
파라미터의 타입도 지정해봅시다.
*/
function getNumber(a, b, c) {
    console.log(c(b(a)));
}
getNumber('010-1111-2222', cutZero, removeDash);
