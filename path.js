const a=require('path');
u=a.join('a ','b','c');
console.log(u);
d=a.basename(u);
console.log(d);
console.log(a.resolve(__dirname,'a','b','k'));
