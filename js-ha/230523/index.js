// 유니언 타입은 Narrowing 해줘야 조작가능함.
// if문 썼으면 끝까지 써야 안전, 아니면 에러발생 할 수도 있음
// assertion(타입 덮어쓰기)
// as string => 변수명 as string => 이 변수를 string이라고 주장하겠다
// as는 그냥 주장만 하는거지 실제로 타입을 바꿔주는건 아니다.
// 1. Narrowing 할 때 사용
// 2. 무슨 타입이 들어올지 100% 확실할 때 사용
// => as number로 넘버 설정해두면 문자가 들어와도 버그 캐치를 못함
// 그냥 if문 써라...
// 남이 짠 코드 수정할 때, 왜 타입에러가 나는지 모르겠을 때 => 비상용으로나 써라
function clean(x) {
    var complete = [];
    x.forEach(function (a) {
        if (typeof a === 'string') {
            complete.push(Number(a));
        }
        else {
            complete.push(a);
        }
    });
    return complete;
}
console.log(clean([1, '2', 3]));
//
function lastSubject(x) {
    // 맨 뒤에 1개 return
    // 문자열 1개면 바로 리턴
    // 배열이면 x.length-1
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else {
        return x.subject[x.subject.length - 1];
    }
}
console.log(lastSubject({ subject: ['science', 'english'] }));
var Test = {
    name: 'test',
    age: 11,
    character: 'cute',
};
var Test2 = {
    size: 22,
    position: [1, 2, 3],
};
var Test3 = {
    name: '123',
    phone: 123,
    email: '123',
};
var New4 = {
    name: 'dd',
    phone: 123,
    email: '123',
    adult: false,
};
