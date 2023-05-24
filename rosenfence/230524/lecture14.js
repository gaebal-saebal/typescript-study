// interface : object에 타입 지정할 수 있는 방법 중 하나
var square = { color: 'red', width: 100 };
var nemo = { color: 'blue', width: 200 };
var student = { name: 'kim' };
var teacher = { name: 'kim', age: 20 };
var 상품 = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone'],
};
var 장바구니 = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
];
var updated장바구니 = [{ product: '청소기', price: 7000, card: false }];
var calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
