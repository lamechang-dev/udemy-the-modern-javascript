let num = 103.941

console.log(num.toFixed(1));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 12;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

// Challenge area
let makeGuess = function (min, max, guessNum) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum === guessNum;
}

console.log(makeGuess(1, 5, 2));