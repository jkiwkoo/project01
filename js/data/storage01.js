//localStorage.setItem('키','데이터') => 키에다가 데이터를 넣는 것
//localStorage.getItem('키') => 키값을 가져오는 것
//localStorage.removeItem('키') => 키 데이터를 삭제
//localStorage.clear() => 모든 데이터를 삭제

localStorage.setItem('book', 'javascript');

const color = {
    title: 'red',
    sample: 'apple',
    no: ['no01', 'no02'],
};

//color -> 'color'
//localStorage.setItem('color', color);
const str = JSON.stringify(color);
console.log(str);
localStorage.setItem('color', str);

//get 활용하기
const obj = localStorage.getItem('book');
console.log(obj);

const obj2 = localStorage.getItem('color');
const obj3 = JSON.parse(obj2);
console.log(obj3);
console.log(obj3.sample);
