"use strict";
// never 타입
// 리턴 값이 없어야 함, 엔드포인트가 없어야 함
// 뭔가를 리턴하기 싫어? => :void 쓰면 됨
// never타입 언제 등장해?
// => 뭔가 이상한 narrowing (있을 수 없는 일이야)
// never타입 보이면 코드가 뭔가 이상한거임. 수정해야됨.
function 함수() {
    throw new Error('에러메세지'); // 강제로 에러내기
}
//
//
var User = /** @class */ (function () {
    function User() {
        this.name = 'ha';
    }
    return User;
}());
var User2 = /** @class */ (function () {
    function User2(a) {
        this.familyName = 'ha'; // class 안에서만 수정, 이용가능 =>  자식들이 못 써
        this.name = 'js';
        var hello = this.familyName + a; //가능
        console.log(hello);
    }
    return User2;
}());
var 유저1 = new User2('js');
console.log(유저1);
유저1.name = 'ha'; //가능
유저1.familyName = 456; //에러남
