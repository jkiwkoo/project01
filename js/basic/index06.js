import num from './index08';

// import { ram, color } from './index07';
import * as main from './index07';

num('welcome');
//구조분해 할당 -> * 인 경우, 기존 이름으로는 값이 나오지 않는다.
//ram('javascript');
//console.log(color.name);

console.log(main);
console.log(main.color.name);
console.log(main.default); // * 썻을 땐, default 가 속성의 이름으로 된다.
main.ram(10);
