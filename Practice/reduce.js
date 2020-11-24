// const numbers = [1, -1, 2, 3];

// let sum = 0
// for (let n of numbers)
//     sum =+ n;


const numbers = [1, -1, 2, 3];

// first round: a = 0, c = 1
// second round: a = 1, c = -1 => a = 0
// third round: a = 0, c = 2 => a = 2
// fourth round: a = 2, c = 3 => a = 5

// const sum = numbers.reduce((accumulator, currentValue) => {
//     // stores accumulator in currentValue
//     return accumulator + currentValue;
// }, 0);
    // '0' starts accumularot at '0' in first call

// console.log(sum);


const numbers = [1, -1, 2, 3];
// first round: a = 1, c = -1 => a = 0
// second round: a = 0, c = 2 => a = 2
// third round: a = 2, c = 3 => a = 5

const sum = numbers.reduce((accumulator, currentValue) => {
    // stores accumulator in currentValue
    return accumulator + currentValue;
});


// To make simpler:

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
