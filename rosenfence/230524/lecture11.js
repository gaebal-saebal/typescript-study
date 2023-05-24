// class 문법에 대해서
// class : object를 생성하기 위한 템플릿

// 예전 문법
function cafe(coffee, milk) {
  this.coffee = coffee;
  this.milk = milk;
}

const 창하카페 = new cafe('blue mountain', 'seoul milk');
console.log(창하카페); // cafe { coffee: 'blue mountain', milk: 'seoul milk' }
// 앞에 붙는 'cafe'는 부모요소 같은 느낌

// ES6 문법
class restaurant {
  constructor(menu1, menu2) {
    this.menu1 = menu1;
    this.menu2 = menu2;
  }
}

const 남자식당 = new restaurant('제육덮밥', '돈까스');
console.log(남자식당); // restaurant { menu1: '제육덮밥', menu2: '돈까스' }
