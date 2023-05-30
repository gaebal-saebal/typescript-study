"use strict";
// extends -> 기존 class 있던 것 전부 복사 가능
// protected -> 1. private 이거랑 똑같은데 2. extends 된 class 안에서도 사용가능
//  class 여러개 만들 때 class 끼리 공유할 수 있는 속성을 만들고 싶으면 protected, class 하나 안에서만 쓸 수 있는 속성을 만들고 싶으면 private
var User = /** @class */ (function () {
    function User() {
        this.z = 30; // private랑 비슷해. extends로 복사한 class에서도 사용 가능
    }
    User.x = 10; // class 안에서만 수정가능해, 자식들도 사용할 수 없어
    User.y = 20; // class 안, 밖 모두 수정가능해. public 지워도 똑같이 작동함
    return User;
}());
//
var User2 = /** @class */ (function () {
    function User2() {
    }
    User2.addOne = function (p) {
        User2.x = User2.x + p;
    };
    User2.show = function () {
        console.log(User2.x);
    };
    User2.x = 10;
    User2.y = 20;
    return User2;
}());
console.log(User2.addOne(3)); //이렇게 하면 x가 3 더해져야함
User2.addOne(4); //이렇게 하면 x가 4 더해져야함
//
// 다시해보기
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n    top:".concat(a * 400, "px; \n    left:").concat(a * 400, "px; \n    width:").concat(this.width, "px; \n    height : ").concat(this.height, "px; \n    background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
