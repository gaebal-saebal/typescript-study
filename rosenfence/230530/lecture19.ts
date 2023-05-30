// protected keyword : private처럼 class{}안에서 사용할 수 있음 + extends된 class{}안에서 사용가능
class User {
  protected x = 10;
}

class NewUser extends User {
  doThis() {
    this.x = 20;
  }
}
// protected : extends된 class는 사용가능, 자식 class는 사용불가능
// private : extends된 class, 자식 class 모두 사용불가능

// static keyword : 자식 class에게 상속되지 않고 부모 class에서만 사용 / extends 하면 잘 따라옴
class List {
  static x = 10;
  y = 20;
}

let childe = new List();

// static keyword는 private/protected/public과 같이 사용 가능하다

class People {
  static skill = 'js'; // 자식 class에 상속 안되게 하기
  intro = `${People.skill}전문가입니다`; // static으로 만든 경우엔 this 대신 해당 Class이름
}

let 철수 = new User(); // {intro: 'js전문가입니다'}
People.skill = 'ts'; // static 요소 변경
let 민수 = new User(); // {intro : 'ts전문가입니다'}

// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
class User2 {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

/*
x(private + static) : 자식 class에 상속 안되고 사용불가능
y(public + static) : =static, extends된 class에는 그대로 복사됨, 자식 class는 상속 안되고 사용불가능
z(protected) : extends된 class는 사용가능, 자식 class는 사용불가능
*/

/*
(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class User {
  private static x = 10;
  public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 
그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
(조건) private static x = 10; 이 코드 수정금지 
*/

class User3 {
  private static x = 10;
  public static y = 20;
  static addOne(a: number) {
    User3.x = User3.x + a;
  }
  static printX() {
    console.log(User3.x);
  }
}

User3.printX();

/*
let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()

이렇게 네모.draw()를 할 때마다
index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
*/

class Printer {
  constructor(public width: number, public height: number, public bgc: string) {}
  draw() {
    const squareStyle = `position:absolute;
            top:${Math.random() * 400}px;
            left:${Math.random() * 400}px;
            width:${this.width}px;
            height:${this.height}px;
            background:${this.bgc};`;
    let square = document.createElement('div');
    square.setAttribute('style', squareStyle);

    document.body.appendChild(square);
  }
}

let 네모 = new Printer(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
