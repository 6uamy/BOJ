const fs = require('fs');

let input = fs.readFileSync('./index.txt').toString();

input = input.split(' ');

const dice1 = +input[0];
const dice2 = +input[1];
const dice3 = +input[2];

let prize = 0;

if(dice1 == dice2 && dice2 == dice3 && dice1 == dice3) {
    prize = 10000 + dice1 * 1000;
} else if(dice1 == dice2 || dice2 == dice3 || dice1 == dice3) {
    if(dice1 == dice2 || dice1 == dice3) {
        prize = 1000 + dice1 * 100;
    } else {
        prize = 1000 + dice2 * 100;
    }
        
} else {
    prize = Math.max(dice1, dice2, dice3) * 100;
}

console.log(prize);
