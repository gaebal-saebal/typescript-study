// Type Narrowing : 함수 내에서 parameter의 type이 하나로 확정되지 않았을 경우
function foo(x: number | string) {
  if (typeof x === 'string') {
    return x + '1';
  } else {
    return x + 1; // if문 사용했으면 else, else if 끝까지 작성해줘야 에러 방지 가능
  }
}
// Narrowing으로 판정해주는 문법 : typeof / in / instanceof 등 변수의 타입을 확정해주는 문법

// Type assertion(타입 덮어쓰기) : 'as' keyword
function bar(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}
// assertion 문법의 용도 :
// Narrowing 할 때 사용(타입 변경하는 용도가 아님) ,어떤 타입을 입력받을지 확실할 때 사용 => 디버깅에 주로 사용

/*
(숙제1) 숫자여러개를 array 자료에 저장해놨는데 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다.
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
모르는 부분은 구글검색해도 봐드림
*/

function cleaner(arr: (number | string)[]) {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = Number(arr[i]);
  }
  return result;
}

console.log(cleaner(['1', 2, '3']));

/*
(숙제2) 다음과 같은 함수를 만들어보십시오.
지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 

철수쌤같은 선생님 object 자료를 집어넣으면 
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
그리고 타입지정도 엄격하게 해보도록 합시다.

(동작예시)
*/
console.log(getLastSubject({ subject: 'math' })); //이 경우 'math'를 return
console.log(getLastSubject({ subject: ['science', 'art', 'korean'] })); //이 경우 'korean'을 return
// getLastSubject({ hello: 'hi' }); //이 경우 타입에러 나면 됩니다

function getLastSubject(subjects: { subject: string | string[] }): string {
  if (Array.isArray(subjects.subject)) {
    return subjects.subject[subjects.subject.length - 1];
  } else return subjects.subject;
}
