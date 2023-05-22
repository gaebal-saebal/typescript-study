var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 이름입력(x) {
    if (x) {
        console.log('안녕하세요' + x);
    }
    else {
        console.log('이름이 없습니다');
    }
}
function 자릿수(x) {
    return x.toString().length;
}
function 결혼가능(월소득, 집보유, 매력) {
    var score = 0;
    score = 월소득 + score;
    if (집보유 === true) {
        score = score + 500;
    }
    if (매력 === '상') {
        score = score + 100;
    }
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(결혼가능(100, true, '상'));
