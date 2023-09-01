const fruit = ['apple', 'orange', 'banana'];
console.log(fruit);
console.log(fruit[0], fruit[1], fruit[2]);
console.log(...fruit);

function obj(a, b, c) {
    return { a, b, c };
}
//console.log(obj(fruit)); // 이렇게 하면 a 에 과일 3개가 다 들어감
console.log(obj(...fruit)); // 이게 정답 ; a: apple, b: orange, c: banana
