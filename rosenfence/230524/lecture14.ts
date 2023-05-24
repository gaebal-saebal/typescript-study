// interface : object에 타입 지정할 수 있는 방법 중 하나

// type alias를 사용하는 방법
type SquareType = { color: string; width: number };
let square: SquareType = { color: 'red', width: 100 };

// interface를 사용하는 방법
interface NemoType {
  color: string;
  width: number;
}
let nemo: NemoType = { color: 'blue', width: 200 };

// interface에서 extends 사용
interface StudentType {
  name: string;
}
interface TeacherType extends StudentType {
  age: number;
  // 안에 name:string(StudentType)도 포함됨
}
let student: StudentType = { name: 'kim' };
let teacher: TeacherType = { name: 'kim', age: 20 };

// type과 interface의 차이는?
interface intType {
  name: string;
}
interface intType {
  // name: number; // error : 중복해서 key 선언은 안됨, extend도 중복되는건 못넣음
  score: number;
}
// interface는 중복 선언 가능
// 미리 만들어진 interface에 이것저것 타입 추가지정하기 편함
// type은 중복 선언 불가능

/*
(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
무슨 타입일지는 알아서 기입합시다. 
*/
interface 상품Type {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: 상품Type = {
  brand: 'Samsung',
  serialNumber: 1360,
  model: ['TV', 'phone'],
};

/*
(숙제2) array 안에 object 여러개가 필요합니다.
쇼핑몰 장바구니를 구현하려고 하는데 
이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 
오늘 배운 interface 문법을 써봅시다.
*/
interface 장바구니Type {
  product: string;
  price: number;
}

let 장바구니: 장바구니Type[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
];

/*
(숙제3) 위에서 만든 타입을 extends 해봅시다.
갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
*/

interface Updated장바구니Type extends 장바구니Type {
  card: boolean;
}

let updated장바구니: Updated장바구니Type[] = [{ product: '청소기', price: 7000, card: false }];

/*
(숙제4) object 안에 함수를 2개 넣고 싶은데요 
1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며
plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며
minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
이 object 자료를 어떻게 만들면 될까요? 
interface를 이용해서 object에 타입지정도 해보십시오.
*/

interface CalculartorType {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let calculator: CalculartorType = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
