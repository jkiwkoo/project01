const all = {
  type: 'it',
  title: 'javascript',
  'all-time': 300,
  num: [0, 1, 2],
  str: {
    a: 'no01',
    b: 'no02',
  },
};

console.log(all.type); // it
console.log(all['title']); // javascript
console.log(all['all-time']); // 300

console.log(all.num[0]); // 0
console.log(all['num'][0]); // 0

console.log(all.str['a']); // no01
console.log(all.str.a); // no01
console.log(all['str'].a); // no01
