const color = {
    title: 'red',
    sample: 'apple',
    no: 123,
};
console.log(color);

//JSON.stringify()   : JSON화 할 때 (텍스트화)
//JSON.parse()   : 일반 객체화 할 때

// 일반적인 객체 -> JSON, TEXT화
const str = JSON.stringify(color);
console.log(str);
console.log(str.sample); // string 화가 되어서 undefined 가 뜸

// JSON -> 일반적인 값, 객체로 변경 -> javascript 매서드, 작업 가능
const obj = JSON.parse(str);
console.log(obj);
console.log(obj.sample); // 일반적인 값으로 변경되어서 값을 가져올 수 있음
