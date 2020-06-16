// Q2
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return 'Both numbers are equal!';
    }
}

// Call the function
console.log(max(12, 43));
