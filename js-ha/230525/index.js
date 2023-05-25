"use strict";
// rest parameter
// 다른 파라미터 있으면 맨 뒤에만 사용 가능
// 배열로 출력해줌
// destructuring
function max() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var maxNum = a[0];
    for (var i = 0; i < a.length; i++) {
        if (maxNum < a[i]) {
            maxNum = a[i];
        }
    }
    return maxNum;
}
console.log(max(4, 6, 3, 2));
function object(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
object({ user: 'kim', comment: [3, 5, 4], admin: false });
//
function arr(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
arr([40, 'wine', false]);
function 함수(animal) {
    if ('swim' in animal) {
        return animal.swim;
    }
    return animal.fly;
}
// instanceof로 부모 클래스 누군지 검사
var 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log('참이에요');
}
function 함수1(x) {
    if (x.wheel === '2개') {
        console.log('이 차는 ' + x.color);
    }
    else {
        console.log('이 바이크는 ' + x.color);
    }
}
