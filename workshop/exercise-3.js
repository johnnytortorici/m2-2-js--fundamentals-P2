// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp
function maxNum(num1, num2) {
    return Math.max(num1, num2);
}

console.log(maxNum(36, 27));

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

console.log(maxNum(maxNum(248, 321), maxNum(198, 322)));

// Q3.3
// Would this work with more integers?

let numbers = [248, 321, 198, 322, 426, 511, 379, 488];
let biggestNum = '';

for (let i = 0; i < numbers.length-1; i++) {
    biggestNum = maxNum(numbers[i], numbers[i+1]);
}

console.log(biggestNum);