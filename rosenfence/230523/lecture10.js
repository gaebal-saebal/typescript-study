// 타입스크립트로 HTML 요소 변경과 조작
var title = document.querySelector('#title');
// title이 union type이기 때문에 narrowing이 필요함
// 첫번째 방법
if (title !== null) {
    title.innerHTML = '반가워요';
}
//! 두번째 방법(주로 쓰일거)
if (title instanceof HTMLElement) {
    title.innerHTML = '반가워요';
}
// 세번째 방법(잘안씀)
// 2번째 줄 맨 뒤에 as Element로 type을 Element로 고정시키는 방법
// 네번째 방법 : optional chaining
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined) {
    title.innerHTML = '반가워요';
}
// 다섯번째 방법 : tsconfig.json에서 "strictNullChecks": false 또는 지우기
var link = document.querySelector('.link');
// link가 union type이기 때문에 narrowing이 필요함
// if (link instanceof HTMLElement) {
//   link.href = 'https://kakao.com';
// }
// 이렇게 하면 HTMLElement에 href가 없어서 안됨
// a태그의 경우 HTMLAnchorElement 타입 안에 타입정의가 되어있음
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
// 이벤트리스너 붙이기
var button = document.querySelector('#button');
// button.addEventListener('click', function () {}); // 타입 에러
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () { }); // narrowing으로 인정됨
/*
(숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다.
이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
*/
var img = document.querySelector('#image');
var changeButton = document.querySelector('#imageChanger');
changeButton === null || changeButton === void 0 ? void 0 : changeButton.addEventListener('click', function () {
    if (img instanceof HTMLImageElement) {
        img.src = 'new.jpg';
    }
});
/*
(숙제2) 바꾸고 싶은 html 요소가 많습니다.
3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
자바스크립트 코드를 어떻게 짜야할까요?
*/
var links = document.querySelectorAll('.naver');
// console.log(links); // 해당 요소들을 전부 담고 있는 배열
links.forEach(function (link) {
    if (link instanceof HTMLAnchorElement) {
        link.href = 'https://kakao.com';
    }
});
