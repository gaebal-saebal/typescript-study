// 변수에 type을 지정할 시 해당 type만 할당할 수 있음
var 이름 = 'kim';
// error
// 이름=123;
// string을 받는 array의 경우
var arr = ['kim', 'park'];
// key: name이 value로 string을 받는 object의 경우
var obj = { name: 'kim' };
// Union Type
// string과 number 둘 다 허용하는 타입의 경우
var stnu = 'hello';
stnu = 123;
var arob = ['hello'];
arob = { key: 'hi' };
// 함수 : parameter는 바로 옆에 타입을 지정해 주고, return값은 함수 옆에 타입을 지정
function foo(x) {
    return x * 2;
}
var bar = function (y) {
    return y + 5;
};
var john = [123, true];
var Mary = { name: 'kim', age: '123' };
// class의 경우
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
