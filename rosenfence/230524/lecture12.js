// prototype 문법에 대해서

function cafe(coffee, milk) {
  this.coffee = coffee;
  this.milk = milk;
}

console.log(cafe.prototype); // object [constructor: f] 어쩌고

cafe.prototype.dessert = 'madeleine';
// prototype에 뭔가를 추가하면 자식들이 사용 가능
const 창하카페 = new cafe('blue mountain', 'seoul milk');

console.log(창하카페.dessert); // madeleine :: 상속됨
console.log(창하카페); // {coffee: 'blue mountain', milk: 'seoul milk'} :: 보이진 않음

// class 선언에서 작성 시 자식요소가 key-value를 직접 가지고(coffee : 'blue mountain')
// prototype에다가 추가하면 부모요소만 key-value를 가집니다(dessert : 'madeleine')

// 아래 둘은 같은 결과
let arr1 = [4, 2, 1];
let arr2 = new Array(4, 2, 1); // class 사용법

// 문서에 array."prototype".무엇무엇 인 이유는 Array의 부모요소의 prototype에 기록되어있기 때문

// prototype에 함수 같은 것도 추가해서 사용 가능
Array.prototype.함수 = function () {
  console.log('특별 함수 실행됨');
};

let arr3 = [1, 2, 3];
console.log(arr3.함수);
