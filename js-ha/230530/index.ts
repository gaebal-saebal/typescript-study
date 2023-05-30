// extends -> 기존 class 있던 것 전부 복사 가능

// protected -> 1. private 이거랑 똑같은데 2. extends 된 class 안에서도 사용가능

//  class 여러개 만들 때 class 끼리 공유할 수 있는 속성을 만들고 싶으면 protected, class 하나 안에서만 쓸 수 있는 속성을 만들고 싶으면 private

class User {
  private static x = 10; // class 안에서만 수정가능해, 자식들도 사용할 수 없어
  public static y = 20; // class 안, 밖 모두 수정가능해. public 지워도 똑같이 작동함
  protected z = 30; // private랑 비슷해. extends로 복사한 class에서도 사용 가능
}

//
class User2 {
  private static x = 10;
  public static y = 20;

  static addOne(p: number) {
    // 리턴 안해주면 void 타입이라 undefined 뜸
    return (User2.x = User2.x + p);
  }

  static show() {
    console.log(User2.x);
  }
}

console.log(User2.addOne(3)); //이렇게 하면 x가 3 더해져야함
User2.addOne(4); //이렇게 하면 x가 4 더해져야함

//
// 다시해보기

class Square {
  constructor(public width: number, public height: number, public color: string) {}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
    top:${a * 400}px; 
    left:${a * 400}px; 
    width:${this.width}px; 
    height : ${this.height}px; 
    background:${this.color}"></div>`;
    document.body.insertAdjacentHTML('beforeend', square);
  }
}

let 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
