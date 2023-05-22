// type: string, number, boolean
let familyName: string = 'kim';
let age: number = 50;
let married: boolean = false;

// array, object
let peoples: string[] = ['kim', 'park'];
let contents: { mouse: string; keyboard: string } = { mouse: 'razer', keyboard: 'realforce' };

// 타입지정은 자동으로 가능
let arr1 = ['abc', 'def'];
let arr2: string[];
// arr1과 arr2의 type은 같음

// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let myName: string = '창하';
let myAge: number = 33;
let myBirthplace: string = '대구';

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let favSong: { [key: string]: string } = {
  name: '어느덧대전하이웨이',
  artist: 'Eagles',
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

let projectAnswer: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};
