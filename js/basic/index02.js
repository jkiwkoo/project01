const num = {
    a1: 10,
    a2: 20,
    a3: 30,
};
const { a1, a2, a3 } = num;
console.log(a2);
//console.log((a2 = 'b1')); // 다른 값을 넣을 수는 없음

const num2 = {
    b1: 10,
    b2: 20,
    b3: 30,
};
const { b1, b2, b3 } = num2;
console.log(b3);

const no = {
    c1: [0, 1, 2, 3, 4, 5],
    c2: [2, 3, 4, 5],
    c3: [0, 2, 3, 4],
    c4: [0, 1, 3, 4, 5],
    c5: [0, 1, 3, 4],
};
console.log(no['c1']);

const { c1, c4 } = no;
console.log(c1);
console.log(c1[2]);
