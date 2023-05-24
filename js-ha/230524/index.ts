// class 문법 => 오브젝트 뽑아내는 기계
// 비슷한 오브젝트 많이 만들일 있으면 class 만들어쓰면 됨
//

function 기계(a, b) {
  this.q = a; // this는 기계로부터 생성되는 오브젝트 (인스턴스)
  this.w = b;
}

class Hero {
  constructor(a, b) {
    this.q = a;
    this.w = b;
  }
}

const nunu2 = new Hero('hi', 'hello'); // 오브젝트 뿅 나옴

const nunu = new 기계('consume', 'snowball');
const garen = new 기계('strike', 'courage');

// const nunu = {
//   q: 'consume',
//   w: 'snowball',
// };

// const garen = {
//   q: 'strike',
//   w: 'courage',
// };

// prototype => 유전자
기계.prototype.name = 'ha'; // 오브젝트에 자료 추가했음
// 부모의 유전자에 있으면 자식이 가져다가 사용할 수 있음
// 유전자에 추가해주면 부모만 가지고 있음
