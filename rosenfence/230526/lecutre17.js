// 함수의 return 타입에 넣을 수 있는 never type
// 1. return 값이 없고 2. endpoint가 없으면 never type 지정 가능
// endpoint가 없는 함수
function foo() {
    throw new Error();
}
function bar() {
    while (true) { }
}
// never type은 코드에 이상이 있을 때 알려주는 type과 같은 느낌
