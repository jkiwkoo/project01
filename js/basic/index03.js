const book = {
    title: 'javascript',
    type: 'it',
    level: 2,
};
const { title, level = 0 } = book;
console.log(title);
console.log(level); // 구조 분해 후 추가 하고 싶을 때, 없는 값을 넣어야한다, 이미 있는 값을 넣으면 이미 있는 값으로 뜸.

//키의 변경
const str = title;
console.log(str);
console.log(title);

const graphic = {
    no: 'paint',
    title2: 'photoshop',
};
const { no: art, title2 } = graphic;
console.log(art);
// console.log(no); //이름을 바꾸면, 기존에 쓰던 이름으로는 불러올 수 없음.
