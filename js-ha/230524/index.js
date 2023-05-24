"use strict";
// class 문법 => 오브젝트 뽑아내는 기계
// 비슷한 오브젝트 많이 만들일 있으면 class 만들어쓰면 됨
//
function 기계(a, b) {
    this.q = a; // this는 기계로부터 생성되는 오브젝트 (인스턴스)
    this.w = b;
}
var Hero = /** @class */ (function () {
    function Hero(a, b) {
        this.q = a;
        this.w = b;
    }
    return Hero;
}());
var nunu2 = new Hero('hi', 'hello'); // 오브젝트 뿅 나옴
var nunu = new 기계('consume', 'snowball');
var garen = new 기계('strike', 'courage');
// const nunu = {
//   q: 'consume',
//   w: 'snowball',
// };
// const garen = {
//   q: 'strike',
//   w: 'courage',
// };
// prototype => 유전자
기계.prototype.name = 'ha'; // 오브젝트에 자료 추가했음
// 부모의 유전자에 있으면 자식이 가져다가 사용할 수 있음
// 유전자에 추가해주면 부모만 가지고 있음
//
var Person = /** @class */ (function () {
    function Person(a) {
        // Person에서 생성되는 자료형은 전부 오브젝트니까 타입지정 필요없음
        this.name = a;
    }
    Person.prototype.함수 = function (b) {
        console.log('hello' + b);
    };
    return Person;
}());
var 사람1 = new Person('ha');
var 사람2 = new Person('shin');
사람1.함수('lalala');
//
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function (b) {
        return b / 10;
    };
    return Car;
}());
var test = new Car('몰라', 3000);
test.tax(3000);
//
var Word = /** @class */ (function () {
    function Word() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var arr1 = [];
        var arr2 = [];
        params.forEach(function (a) {
            if (typeof a === 'number') {
                arr1.push(a);
            }
            else {
                arr2.push(a);
            }
        });
        this.num = arr1;
        this.str = arr2;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
//
var 네모 = {
    color: 'orange',
    width: 200,
};
// interface Teacher {
//   name: string;
//   age: number;
// }
var 학생 = { name: 'kim' };
var 선생님 = { name: 'ha', age: 20 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var 장바구니 = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
];
var aaa = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
