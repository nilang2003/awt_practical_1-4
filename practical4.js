// Write a function that calculates the factorial of a given number using recursion.
// Create a nested function that performs a specific task and invoke it within 
// another function.

function factorial(value) {
    function cal_factorial(value) {
        if (value === 0 || value === 1) {
            return 1;
        }
        else {
            return value * cal_factorial(value - 1);
        }
    }

    return cal_factorial(value);
}

const value = 8;
console.log("The value of the number and factorial is: " + value + " " + factorial(value));
