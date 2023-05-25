// rest parameter : 함수의 parameter가 몇개 들어올지 모를 때 사용
// type 설정은 array 타입 지정하는 법으로
function foo(...a: number[]) {
  console.log(a);
}
foo(1, 2, 3, 4, 5, 6); // [1,2,3,4,5,6]

// spread operator
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2]; // [1,2,3,4,5]

//destructuring : 구조분해할당
let [변수1, 변수2] = ['안녕', 100];
let { student, age } = { student: true, age: 20 };
let obj = { student: true, age: 20 };

function bar({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
bar({ student: true, age: 20 }); // true 20

/*
(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문이나 쓰셈 
*/

function 최댓값(...num: number[]): number {
  let result = 0;
  num.forEach((e) => {
    if (e > result) {
      result = e;
    }
  });
  return result;
}

console.log(최댓값(6, 3, 7, 2));

/*
(숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
함수( { user : 'kim', comment : [3,5,4], admin : false } )
어떻게 코드를 짜야할까요?
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
*/

type QuxType = { user: string; comment: number[]; admin: boolean };
function qux({ user, comment, admin }: QuxType): void {
  console.log(user, comment, admin);
}
qux({ user: 'kim', comment: [3, 5, 4], admin: false });

/*
(숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
함수( [40, 'wine', false] )
어떻게 코드를 짜야할까요?
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/

type BazType = (number | string | boolean)[];
function baz([a, b, c]: BazType): void {
  console.log(a, b, c);
}
baz([40, 'wine', false]);
