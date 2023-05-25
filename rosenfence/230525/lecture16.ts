// typeof 연산자로 narrowing 할 수 없는 경우

// &&연산자로 undefined / null 타입체크
function wil(a: string | undefined) {
  if (a && typeof a === 'string') {
  }
}

// in
type Fish = { swim: string };
type Bird = { fly: string };
function scc(animal: Fish | Bird) {
  // typeof에 type alias만 직접 넣을 수 없음
  if ('swim' in animal) {
    // 속성명 in 오브젝트자료 = 여기선 Fish 타입인지 체크
  }
}

// instanceof
// object 두 개가 비슷하면 부모 class가 누군지 물어봐서 narrowing 가능
// 오브젝트 instanceof 부모class

// obj타입이 두개가 비슷하게 생겼을 때 narrowing
type Car = {
  wheel: '4개';
  color: string;
};

type Bike = {
  wheel: '2개';
  color: string;
};
// 비슷한 object type의 경우 literal type 만들어 두면 narrowing이 편해짐

function veh(x: Car | Bike) {
  if (x.wheel === '4개') {
    //Car type인지 확인 - '2개' 면 Bike type일 것
    console.log('x는 Car 타입이에요');
  }
}
