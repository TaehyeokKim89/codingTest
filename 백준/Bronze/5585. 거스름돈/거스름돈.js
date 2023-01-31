let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

function solution(num) {
    let a = 1000 - num;
    let coin = [500, 100, 50, 10, 5, 1];
    let count = 0;
    for (let i = 0; i < coin.length; i++) {
        count += parseInt(a / coin[i]);
        a = a % coin[i];
    }
    return count;
}

console.log(solution(num));