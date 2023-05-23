"use strict";
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
// Literal Types
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
function game(x) {
    return ['가위', '바위'];
}
// const 변수의 한계 => 오브젝트 안의 내용물은 바꿀 수 있잖아
var Doc;
Doc = 'ha';
//
var 자료 = {
    name: 'kim',
}; // 사용안하면 타입이 달라서 에러발생함
function 내함수(a) { }
내함수(자료.name);
var ABC = function (x, y) {
    return x + y;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    },
};
console.log(회원정보.plusOne(1));
console.log(회원정보.changeName()); // undefined
var cutZero = function (x) {
    return x.replace('0', '');
};
console.log(cutZero('03'));
var removeDash = function (z) {
    var ccc = z.replace(/\-/g, '');
    return Number(ccc);
};
console.log(removeDash('010-23'));
//
function 만들함수(x, y, z) {
    var C = y(x);
    var D = z(C);
    console.log(D);
}
만들함수('010-1111-2222', cutZero, removeDash);
//
var 제목 = document.querySelector('#title');
if (제목 !== null) {
    제목.innerHTML = '반갑소';
}
//
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
}
//
var 링크 = document.querySelectorAll('.naver');
링크.forEach(function (x) {
    if (x instanceof HTMLAnchorElement) {
        x.href = ' https://kakao.com';
    }
});
