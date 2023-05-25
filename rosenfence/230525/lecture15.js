var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest parameter : 함수의 parameter가 몇개 들어올지 모를 때 사용
// type 설정은 array 타입 지정하는 법으로
function foo() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
foo(1, 2, 3, 4, 5, 6); // [1,2,3,4,5,6]
// spread operator
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true); // [1,2,3,4,5]
//destructuring : 구조분해할당
var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1];
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
var obj = { student: true, age: 20 };
function bar(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
bar({ student: true, age: 20 }); // true 20
/*
(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문이나 쓰셈
*/
function 최댓값() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    num.forEach(function (e) {
        if (e > result) {
            result = e;
        }
    });
    return result;
}
console.log(최댓값(6, 3, 7, 2));
function qux(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
qux({ user: 'kim', comment: [3, 5, 4], admin: false });
function baz(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
baz([40, 'wine', false]);
