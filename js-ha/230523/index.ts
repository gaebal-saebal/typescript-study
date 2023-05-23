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

// Literal Types
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입

function game(x: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return ['가위', '바위'];
}

// const 변수의 한계 => 오브젝트 안의 내용물은 바꿀 수 있잖아

let Doc: 'kim' | 'ha';

Doc = 'ha';

//
var 자료 = {
  name: 'kim',
} as const; // 사용안하면 타입이 달라서 에러발생함

function 내함수(a: 'kim') {}
내함수(자료.name);
// 자료.name은 string타입이지 'kim'타입이 아니잖아
// => as const 사용해봐

// 함수 타입지정은 () => {}
type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};

//
type Variable = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void; // 아무것도 리턴하면 안돼
};

let 회원정보: Variable = {
  name: 'kim',
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log('안녕');
  },
};
console.log(회원정보.plusOne(1));
console.log(회원정보.changeName()); // undefined

//

// type NumOut = (x: number, y: number) => number;
// let ABC: NumOut = function (x, y) {
//   return x + y;
// };

type AAA = (x: string) => string;
let cutZero: AAA = function (x) {
  return x.replace('0', '');
};
console.log(cutZero('03'));

type BBB = (z: string) => number;
let removeDash: BBB = function (z) {
  let ccc = z.replace(/\-/g, '');
  return Number(ccc);
};
console.log(removeDash('010-23'));

//

function 만들함수(x: string, y: AAA, z: BBB) {
  let C = y(x);
  let D = z(C);
  console.log(D);
}

만들함수('010-1111-2222', cutZero, removeDash);

//
let 제목 = document.querySelector('#title');

if (제목 !== null) {
  제목.innerHTML = '반갑소';
}

//
let 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
  이미지.src = 'new.jpg';
}

//
let 링크 = document.querySelectorAll('.naver');
링크.forEach((x) => {
  if (x instanceof HTMLAnchorElement) {
    x.href = ' https://kakao.com';
  }
});
