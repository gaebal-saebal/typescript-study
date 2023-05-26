// class에서 사용하는 public, private
// public : public 붙으면 모든 자식들이 이용가능
var User = /** @class */ (function () {
    function User(a) {
        this.name = 'kim';
        this.name = a;
    }
    return User;
}());
var user1 = new User('park');
user1.name = '안뇽';
// public은 생략되어 있어도 자동추가
// private : private면 수정이 불가능
var Person = /** @class */ (function () {
    function Person(a) {
        this.familyName = 'Kim'; // 수정 못하게 고정 -> class 내에서만 수정 가능
        this.name = a + this.familyName;
    }
    Person.prototype.familyNameChanger = function (b) {
        this.familyName = b;
    }; // class 외부에서 private을 수정하기 위해서 작성된 함수
    return Person;
}());
var user2 = new Person('민수');
console.log(user2);
// user2.familyName = 'park'; // 일반적인 방법으론 불가능
user2.familyNameChanger('park'); // 외부에서 변경 가능
// public 키워드 쓰면 this. 생략 가능
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
var human1 = new Human('kim');
