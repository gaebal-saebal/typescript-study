// class 문법 => 오브젝트 뽑아내는 기계
// 비슷한 오브젝트 많이 만들일 있으면 class 만들어쓰면 됨
//

function 기계(a, b) {
  this.q = a; // this는 기계로부터 생성되는 오브젝트 (인스턴스)
  this.w = b;
}

class Hero {
  constructor(a, b) {
    this.q = a;
    this.w = b;
  }
}

const nunu2 = new Hero('hi', 'hello'); // 오브젝트 뿅 나옴

const nunu = new 기계('consume', 'snowball');
const garen = new 기계('strike', 'courage');

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
class Person {
  name;
  constructor(a: string) {
    // Person에서 생성되는 자료형은 전부 오브젝트니까 타입지정 필요없음
    this.name = a;
  }
  함수(b: string) {
    console.log('hello' + b);
  }
}

let 사람1 = new Person('ha');
let 사람2 = new Person('shin');

사람1.함수('lalala');

//
class Car {
  model;
  price;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(b: number) {
    return b / 10;
  }
}

let test = new Car('몰라', 3000);
test.tax(3000);

//
class Word {
  num;
  str;
  constructor(...params: (string | number)[]) {
    let arr1: number[] = [];
    let arr2: string[] = [];
    params.forEach((a) => {
      if (typeof a === 'number') {
        arr1.push(a);
      } else {
        arr2.push(a);
      }
    });
    this.num = arr1;
    this.str = arr2;
  }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']

//
// type Square = { color: string; width: number };
interface Square {
  color: string;
  width: number;
}
//

let 네모: Square = {
  color: 'orange',
  width: 200,
};

//
interface Student {
  name: string;
}

// interface Teacher {
//   name: string;
//   age: number;
// }

let 학생: Student = { name: 'kim' };
let 선생님: Teacher = { name: 'ha', age: 20 };

// interface 장점 : extends로 복사가능
interface Teacher extends Student {
  age: number;
}

type Animal = { name: string };
type Cat = { age: number } & Animal;

// 타입은 & , 중복선언 허용하지 않음
// interface는 extends, 중복선언 허용(외부라이브러리에서 자주 사용 =>  덮어쓰면 되니까 편리해서)

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };

interface Cart {
  product: string;
  price: number;
}

interface Card extends Cart {
  card: boolean;
}

let 장바구니: Cart[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
];

interface ObjType {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let aaa: ObjType = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
