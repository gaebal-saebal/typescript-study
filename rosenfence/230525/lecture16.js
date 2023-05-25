// typeof 연산자로 narrowing 할 수 없는 경우
// &&연산자로 undefined / null 타입체크
function wil(a) {
    if (a && typeof a === 'string') {
    }
}
function scc(animal) {
    // typeof에 type alias만 직접 넣을 수 없음
    if ('swim' in animal) {
        // 속성명 in 오브젝트자료 = 여기선 Fish 타입인지 체크
    }
}
// 비슷한 object type의 경우 literal type 만들어 두면 narrowing이 편해짐
function veh(x) {
    if (x.wheel === '4개') {
        //Car type인지 확인 - '2개' 면 Bike type일 것
        console.log('x는 Car 타입이에요');
    }
}
