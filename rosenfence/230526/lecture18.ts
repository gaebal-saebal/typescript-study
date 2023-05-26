// class에서 사용하는 public, private

// public : public 붙으면 모든 자식들이 이용가능
class User {
  public name = 'kim';
  constructor(a) {
    this.name = a;
  }
}

let user1 = new User('park');
user1.name = '안뇽';
// public은 생략되어 있어도 자동추가

// private : private면 수정이 불가능
class Person {
  name: string;
  private familyName: string = 'Kim'; // 수정 못하게 고정 -> class 내에서만 수정 가능
  constructor(a) {
    this.name = a + this.familyName;
  }
  familyNameChanger(b) {
    this.familyName = b;
  } // class 외부에서 private을 수정하기 위해서 작성된 함수
}

let user2 = new Person('민수');
console.log(user2);
// user2.familyName = 'park'; // 일반적인 방법으론 불가능
user2.familyNameChanger('park'); // 외부에서 변경 가능

// public 키워드 쓰면 this. 생략 가능
class Human {
  constructor(public name) {}
}
let human1 = new Human('kim');
