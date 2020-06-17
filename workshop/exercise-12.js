// Q12
// Build on what you did for Q11.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function letterGrade(grades) {
    return grades.map(function (grade) {
        for (let i = 0; i < grades.length; i++) {
            if (grade < 60) {
                return grade.toString().replace(grade, 'F');
            } else if (grade < 70) {
                return grade.toString().replace(grade, 'D');
            } else if (grade < 80) {
                return grade.toString().replace(grade, 'C');
            } else if (grade < 90) {
                return grade.toString().replace(grade, 'B');
            } else if (grade <= 100) {
                return grade.toString().replace(grade, 'A');
            } else {
                return 'Not a valid grade!';
            }
        }
    })
}

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log(letterGrade([48, 95, 65, 48, 59, 78, 72, 65]));

// Try with other values as well
console.log(letterGrade([100, 'A', 0, -25, 59.999, 100.001]));