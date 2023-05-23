// literal type : 조금 더 엄격한 타입 지정
let literal: '정해짐';
literal = '정해짐'; // no error
// literal = '정혜짐' // error

// literal type도 union type 사용 가능
let john: '대머리' | '솔로';
john = '대머리';
john = '솔로';

// 당연히 함수의 parameter나 return에도 union type 사용 가능
function rcp(go: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return [go]; // ['바위'], ['가위', '바위'] 등등
}
rcp('바위');

// 좀 더 엄격한 type 설정
let obj = {
  // obj에 type으로 {name:'kim'} 이라는 type 'kim' 정의도 가능
  name: 'kim',
} as const; // as const = type을 object의 value로 지정 + 모든 속성을 readonly로

function faz(param: 'kim') {} //! 얘는 type이 string이 아니고 'kim' 임에 유의
faz(obj.name); // as const를 안 쓰면 여기에 as 'kim' 으로 assertion
