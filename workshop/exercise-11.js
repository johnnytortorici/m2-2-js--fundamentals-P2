// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

let gradesSum = 0;

function calculateAverage(grades) {
    for (let i = 0; i < grades.length; i++) {
        gradesSum = gradesSum + grades[i];
    }
    
    return Math.round(gradesSum / grades.length);
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
