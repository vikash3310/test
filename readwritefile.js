const fs=require('fs')
var a=fs.readFileSync('scratches','utf-8')
a=a.concat(a)
console.log('success')
fs.writeFileSync('abba.txt',a);
console.log('success')


