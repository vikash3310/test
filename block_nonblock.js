const fs=require('fs')
const a=fs.readFileSync('scratches','utf-8')
console.log(a);
for(var i=0; i<10;i++){
    console.log(i);
}
fs.readFile('scratches','utf-8',(e,d)=>{console.log(d)})
console.log('executed')