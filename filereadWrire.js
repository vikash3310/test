const fs=require('fs')
var text="vikash writes this file"
fs.writeFileSync('abba.txt',text)
let xt=fs.readFileSync('abba.txt','utf-8')
console.log(xt)