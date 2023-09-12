const fruit = {
    color: 'red',
    name: 'apple',
    price: 1000,
};

//로컬 스토리지에 등록
const str = JSON.stringify(fruit);
console.log(str);
localStorage.setItem('fruit', str);

//가져오기
const getItem = localStorage.getItem('fruit');
console.log(getItem);
const getItem2 = JSON.parse(getItem);
console.log(getItem2);
document.write(
    `
    <dl>
    <dt>${getItem2.name}</dt>
    <dd>${getItem2.color}</dd>
    <dd>${getItem2.price}</dd>
    </dl>
    `
);

localStorage.removeItem('color');
localStorage.clear();
