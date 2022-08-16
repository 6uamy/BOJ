const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

input = +input;

let result = 0;

for(let i=1; i<10; i++){
    result = input * i;
    console.log(`${input} * ${i} = ${result}`);
}
