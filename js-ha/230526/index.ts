// never 타입
// 리턴 값이 없어야 함, 엔드포인트가 없어야 함
// 뭔가를 리턴하기 싫어? => :void 쓰면 됨
// never타입 언제 등장해?
// => 뭔가 이상한 narrowing (있을 수 없는 일이야)
// never타입 보이면 코드가 뭔가 이상한거임. 수정해야됨.

function 함수(): never {
  throw new Error('에러메세지'); // 강제로 에러내기
}

//
//
class User {
  public name; // 퍼블릭 붙으면 모든 자식들이 이용가능 =>원래도 그렇지 않나? => 생략해도 이미 부여되어 있음
  constructor() {
    this.name = 'ha';
  }
}

class User2 {
  public name: string;
  private familyName: string = 'ha'; // class 안에서만 수정, 이용가능 =>  자식들이 못 써

  constructor(a: string) {
    this.name = 'js';
    let hello = this.familyName + a; //가능
    console.log(hello);
  }
}

let 유저1 = new User2('js');
console.log(유저1);

유저1.name = 'ha'; //가능
유저1.familyName = 456; //에러남
