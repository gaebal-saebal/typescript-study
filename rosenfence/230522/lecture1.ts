// 변수에 type을 지정할 시 해당 type만 할당할 수 있음
let 이름: string = 'kim';
// error
// 이름=123;

// string을 받는 array의 경우
let arr: string[] = ['kim', 'park'];

// key: name이 value로 string을 받는 object의 경우
let obj: { name?: string } = { name: 'kim' };

// Union Type
// string과 number 둘 다 허용하는 타입의 경우
let stnu: string | number = 'hello';
stnu = 123;

// type alias : type은 변수에 담아서 쓸 수 있음 (첫글자는 대문자로 많이 씀)
type MyCustumType = [] | {};
let arob: MyCustumType = ['hello'];
arob = { key: 'hi' };

// 함수 : parameter는 바로 옆에 타입을 지정해 주고, return값은 함수 옆에 타입을 지정
function foo(x: number): number {
  return x * 2;
}
const bar = (y: number): number => {
  return y + 5;
};

// type tuple : array 자료 안에서 순서를 포함해 어떤 자료가 들어올지 확실히 명시
type Member = [number, boolean];
let john: Member = [123, true];

// object에 타입지정할 속성이 너무 많으면
// object에 들어가는 모든 속성을 지정해 타입지정 가능(index signature)
type Info = {
  [key: string]: string;
};
let Mary: Info = { name: 'kim', age: '123' };

// class의 경우
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
