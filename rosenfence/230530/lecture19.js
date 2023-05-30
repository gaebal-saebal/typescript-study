var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// protected keyword : private처럼 class{}안에서 사용할 수 있음 + extends된 class{}안에서 사용가능
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
    }
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User));
// protected : extends된 class는 사용가능, 자식 class는 사용불가능
// private : extends된 class, 자식 class 모두 사용불가능
// static keyword : 자식 class에게 상속되지 않고 부모 class에서만 사용 / extends 하면 잘 따라옴
var List = /** @class */ (function () {
    function List() {
        this.y = 20;
    }
    List.x = 10;
    return List;
}());
var childe = new List();
// static keyword는 private/protected/public과 같이 사용 가능하다
var People = /** @class */ (function () {
    function People() {
        this.intro = "".concat(People.skill, "\uC804\uBB38\uAC00\uC785\uB2C8\uB2E4"); // static으로 만든 경우엔 this 대신 해당 Class이름
    }
    People.skill = 'js'; // 자식 class에 상속 안되게 하기
    return People;
}());
var 철수 = new User(); // {intro: 'js전문가입니다'}
People.skill = 'ts'; // static 요소 변경
var 민수 = new User(); // {intro : 'ts전문가입니다'}
// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
var User2 = /** @class */ (function () {
    function User2() {
        this.z = 30;
    }
    User2.x = 10;
    User2.y = 20;
    return User2;
}());
/*
x(private + static) : 자식 class에 상속 안되고 사용불가능
y(public + static) : =static, extends된 class에는 그대로 복사됨, 자식 class는 상속 안되고 사용불가능
z(protected) : extends된 class는 사용가능, 자식 class는 사용불가능
*/
/*
(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class User {
  private static x = 10;
  public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
(조건) private static x = 10; 이 코드 수정금지
*/
var User3 = /** @class */ (function () {
    function User3() {
    }
    User3.addOne = function (a) {
        User3.x = User3.x + a;
    };
    User3.printX = function () {
        console.log(User3.x);
    };
    User3.x = 10;
    User3.y = 20;
    return User3;
}());
User3.printX();
/*
let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()

이렇게 네모.draw()를 할 때마다
index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
*/
var Printer = /** @class */ (function () {
    function Printer(width, height, bgc) {
        this.width = width;
        this.height = height;
        this.bgc = bgc;
    }
    Printer.prototype.draw = function () {
        var squareStyle = "position:absolute;\n            top:".concat(Math.random() * 400, "px;\n            left:").concat(Math.random() * 400, "px;\n            width:").concat(this.width, "px;\n            height:").concat(this.height, "px;\n            background:").concat(this.bgc, ";");
        var square = document.createElement('div');
        square.setAttribute('style', squareStyle);
        document.body.appendChild(square);
    };
    return Printer;
}());
var 네모 = new Printer(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
