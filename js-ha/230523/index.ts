// 유니언 타입은 Narrowing 해줘야 조작가능함.
// if문 썼으면 끝까지 써야 안전, 아니면 에러발생 할 수도 있음

// assertion(타입 덮어쓰기)
// as string => 변수명 as string => 이 변수를 string이라고 주장하겠다
// as는 그냥 주장만 하는거지 실제로 타입을 바꿔주는건 아니다.
// 1. Narrowing 할 때 사용
// 2. 무슨 타입이 들어올지 100% 확실할 때 사용
// => as number로 넘버 설정해두면 문자가 들어와도 버그 캐치를 못함
// 그냥 if문 써라...

// 남이 짠 코드 수정할 때, 왜 타입에러가 나는지 모르겠을 때 => 비상용으로나 써라

function clean(x: (string | number)[]) {
  let complete: number[] = [];
  x.forEach((a) => {
    if (typeof a === 'string') {
      complete.push(Number(a));
    } else {
      complete.push(a);
    }
  });
  return complete;
}
console.log(clean([1, '2', 3]));

//
function lastSubject(x: { subject: string | string[] }) {
  // 맨 뒤에 1개 return
  // 문자열 1개면 바로 리턴
  // 배열이면 x.length-1
  if (typeof x.subject === 'string') {
    return x.subject;
  } else {
    return x.subject[x.subject.length - 1];
  }
}
console.log(lastSubject({ subject: ['science', 'english'] }));

// 타입 변수
// 남이 봤을 때 읽기 쉬운 코드로 작성해
// type변수 작명 관습 => 영어 대문자로 시작, 뒤에 Type을 붙이는 방법도 // type 타입변수명 = 타입종류
// readonly => object 자료 수정 막을 수 있음
// 타입스크립트 에러는 에디터&터미널에서만 존재함 =>  그 행위를 막아주지는 않음
// &연산자를 사용하면 object를 extend 할 수 있음
// type 키워드는 재정의 불가능

type 사람 = {
  name: string;
  age: number;
};

type 동물 = {
  name: string;
  character: string;
};

type New = 사람 & 동물;

let Test: New = {
  name: 'test',
  age: 11,
  character: 'cute',
};

//

type One = { color?: string; size: number; readonly position: number[] };

let Test2: One = {
  size: 22,
  position: [1, 2, 3],
};

//

type New2 = {
  name: string;
  phone: number;
  email: string;
};

let Test3: New2 = {
  name: '123',
  phone: 123,
  email: '123',
};

//

type New3 = {
  adult: boolean;
};

type NewType = New2 & New3;

let New4: NewType = {
  name: 'dd',
  phone: 123,
  email: '123',
  adult: false,
};
