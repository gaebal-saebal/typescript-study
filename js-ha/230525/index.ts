// rest parameter
// 다른 파라미터 있으면 맨 뒤에만 사용 가능
// 배열로 출력해줌

// destructuring

function max(...a: number[]) {
  let maxNum = a[0];
  for (let i = 0; i < a.length; i++) {
    if (maxNum < a[i]) {
      maxNum = a[i];
    }
  }
  return maxNum;
}
console.log(max(4, 6, 3, 2));

//
type AA = {
  user: string;
  comment: number[];
  admin: boolean;
};

function object({ user, comment, admin }: AA) {
  console.log(user, comment, admin);
}
object({ user: 'kim', comment: [3, 5, 4], admin: false });

//
function arr([a, b, c]: (number | string | boolean)[]) {
  console.log(a, b, c);
}

arr([40, 'wine', false]);

// 속성명 in 오브젝트
// 서로 배타적인 속성이 있어야만 사용할 수 있음
type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim;
  }
  return animal.fly;
}

// instanceof로 부모 클래스 누군지 검사
let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log('참이에요');
}

// 가지고 있는 속성이 같네?
// object들 구분할 일이 많을 때 literal type을 만들어두면 편리함

type Car = {
  wheel: '4개';
  color: string;
};
type Bike = {
  wheel: '2개';
  color: string;
};

function 함수1(x: Car | Bike) {
  if (x.wheel === '2개') {
    console.log('이 차는 ' + x.color);
  } else {
    console.log('이 바이크는 ' + x.color);
  }
}
