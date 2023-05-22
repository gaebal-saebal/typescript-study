// Union type : |(or)를 사용해 타입 2개 이상 합쳐 새로운 타입을 만들 수 있음
var member = 123;
member = '하잉';
var members = [1, '2', 3];
var object = { a: '123' };
// any type
var anyType;
anyType = 123;
anyType = '하이용';
anyType = [];
// unknown type
var unknownType;
unknownType = 123;
unknownType = {};
// any와 unknown의 차이?
// let sample1:string = anyType; // no error
// let sample2:stirng = unknownType // error
// anyType -1 // no error
// unknownType -1 // error
var age1;
// age1-3 // error => number는 number와 연산, union type과도 연산이 안됨
// (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
// (조건) ageQ 변수엔 undefined 말고 숫자도 들어올 수 있습니다.
var userQ = 'kim';
var ageQ = undefined;
var marriedQ = false;
var 철수 = [userQ, ageQ, marriedQ];
//(숙제2) 학교라는 변수에 타입지정해보십시오.
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
