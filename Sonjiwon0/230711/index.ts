// lecture 1 : 타입스크립트 기본 타입 정리 (primitive types)

// 타입스크립트는 자동으로 타입 지정을 해주기 떄문에 간단한 변수들은 타입 지정 문법 생략 가능
let 이름: string = "kim";
let 나이: number = 123;
let 불리언: boolean = true;
let 회원들: string[] = ["kim", "park"];
let 회원들2: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let userName: string = "Jiwon Son";
let userAge: number = 31;
let userAddress: string = "seoul";

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let favorite: { singer: string; song: string } = {
  singer: "cheese",
  song: "only you",
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// lecture2 : 	타입을 미리 정하기 애매할 때 (union type, any, unknown)

/* 
* Union Type : 타입 2개이상 합친 새로운 타입 만들기
이 변수엔 string 또는 number가 들어올 수 있다 라고 타입정의(OR 연산자)를 하고 싶을 때 사용
변수에 정이된 Union 타입은 할당과 동시에 OR 역할이 사라짐
array, object에 정의된 Union 타입은 OR 연산자가 유지
 */

// 아래 예시 둘 다 사용 가능
let 회원: number | string = 123;
let 회원2: number | string | boolean = 123;

// number 혹은 string 타입의 array가 들어올 수 있음
let user: number | string[] = ["1", "2", "3"];
// num 혹은 string 이 담긴 array
let user2: (number | string)[] = [1, "2", 3];
let users: (number | string)[] = [1, "2", 2, 3];
let obj: { a: string | number } = { a: "12" };

var 어레이: (string | number)[] = [1, "2", 3];
var 오브젝트: { data: number | string } = { data: "123" };

// * any : 모든 자료형 허용
// 타입실드 해제 문법으로 변수 타입체크 해제기능 용도로 사용
let 이름2: any;
이름2 = 123;
이름2 = [];

/*
* unkown
any와 똑같이 모든 타입을 집어넣을 수 있음
아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우 사용
*/
let unKnown: unknown;
unKnown = 123;

// 변경하려는 변수의 타입이 확실해야 연산을 수행
let age: string | number;
// age +1 uniontype 은 비허용
let age2: number | string;
// age2 -1;
let str: string;
str + 1; // 허용
let num: number;
num + 1; // 허용

// (숙제1) 다음 변수 4개에 타입을 지정해봅시다.

let user3: string = "kim";
let age3: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user3, age, married];

// (숙제2) 학교라는 변수에 타입지정해보십시오.
let 학교: {
  score: number[] | boolean;
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// * 함수에 타입 지정하는 법 & void 타입
function 함수(x: string) {
  return x;
}
function n(x: number): number {
  return x;
}

// return 이 없을 경우 void 사용
function 함수2(x: number): void {
  //   return x * x; => error
  x * x;
}
// 파라미터가 없을 수도 있을 때
function op(x?: number): void {
  console.log(x + 3);
}
function op2(x: number | undefined): void {}
function union(x: string | number) {
  // return x+1; => error (타입스크립트에선 변수의 타입이 number | string 이런 union type인 경우 자료 조작을 금지)
}

/* (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다. */
function sayName(name?: string): void {
  if (name) {
    console.log(name);
  } else console.log("이름이 없습니다");
}
sayName();

/* (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오. */
function countLength(x: string | number): number {
  return x.toString().length;
}

/* (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다. */
function percent(income: number, house: boolean, charming: string): string {
  let score;
  score += income * 1;
  house ? score + 500 : 0;
  charming === "상" ? (score += 100) : 0;

  return score >= 600 ? "결혼가능" : null;
}

percent(700, false, "중");
percent(100, false, "상");

function percent2(income: number, house: boolean, charming: string): string {
  let score: number = 0;
  score += income * 1;
  if (house) {
    score += 500;
  }
  if (charming === "상") {
    score += 100;
  }
  if (score >= 600) return "결혼가능";
  else return null;
}

// lecture 3: 타입 확정하기 Narrowing & Assertion
// * Narrowing : Type 이 하나로 확정되지 않았을 경우 if문 등으로 타입을 하나로 정해주는 것을 뜻한다.
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}
내함수(123);
내함수("123");
/* 
* assertion : 타입을 하나로 확정하고 싶을 때 사용
1. Narrowing 할 때
2. 무슨 타입이 들어올지 100% 확실할 떄 사용 => 그래서 보통 위의 Narrowing 으로 사용
*/
function 내함수2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

내함수2(123);
