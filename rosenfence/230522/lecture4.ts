// Union type : |(or)를 사용해 타입 2개 이상 합쳐 새로운 타입을 만들 수 있음
let member: number | string = 123;
member = '하잉';

let members: (number | string)[] = [1, '2', 3];
let object: { a: string | number } = { a: '123' };

// any type
let anyType: any;
anyType = 123;
anyType = '하이용';
anyType = [];

// unknown type
let unknownType: unknown;
unknownType = 123;
unknownType = {};

// any와 unknown의 차이?
// let sample1:string = anyType; // no error
// let sample2:stirng = unknownType // error
// anyType -1 // no error
// unknownType -1 // error

let age1: string | number;
// age1-3 // error => number는 number와 연산, union type과도 연산이 안됨

// (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
// (조건) ageQ 변수엔 undefined 말고 숫자도 들어올 수 있습니다.
let userQ: string = 'kim';
let ageQ: number | undefined = undefined;
let marriedQ: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [userQ, ageQ, marriedQ];

//(숙제2) 학교라는 변수에 타입지정해보십시오.
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
