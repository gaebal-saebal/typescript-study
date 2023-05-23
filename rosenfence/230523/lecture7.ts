// type alias : type은 변수에 담아서 쓸 수 있음 (type 변수명 = 타입들)
type AnimalType = string | number | undefined;

let animals: AnimalType = 123;
animals = '고양이';
// object도, arr도 모든 type은 type alias 가능
// 작명할 때는 맨 앞이 영어대문자, ~~~Type와 같이 사용

// 읽기 전용(쓰기/변경 불가)으로 만들어주는 readonly
type ProhibitedType = { readonly country: string };
const prohibited: ProhibitedType = { country: 'China' };

// prohibited.country = 'Japan' // error => 근데 에디터/터미널에서만 에러가 나고 실행은 됨에 주의

// alias type 내에는 optional chaining 가능
type ContentType = { name?: string };

// alias type 끼리 union type 합치기도 가능
type NameType = string;
type AgeType = number;
type PersonType = NameType | AgeType;

// & 연산자로 object 타입 합칠 수 있음 => type extend
type PositionXType = { x: number };
type PositionYType = { y: number };
type PositionType = PositionXType & PositionYType; // { x: number, y: number }

let position: PositionType = { x: 10, y: 20 };

// type 변수 재정의 불가능
type exType = string;
// type exType = number; // error

//(숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type Type1 = { a: string };
type Type2 = { a: number };
type Type1and2 = Type1 & Type2; // { a: never }

// let objP:Type1and2 = {a: '123'} // error

/*
(숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야 합니다.  
type alias로 만들어보셈
*/

type AnswerType = {
  color?: string;
  size: number;
  readonly position: number[];
};

/*
(숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/

type testObjectType = {
  name: string;
  phone: number;
  email: string;
};

/*
(숙제4) 다음을 만족하는 type alias를 만들어보십시오.
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.
*/

type ValidType = testObjectType & { isAdult: boolean };
const people: ValidType = {
  name: 'John',
  phone: 101010101,
  email: 'ab@c.d',
  isAdult: true,
};
