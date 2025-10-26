// TRADITIONAL FUNCTION
function multiply(a,b) {
    return a * b;
}

// ARROW FUNCTION (same use, shorter)
const multiply = (a,b) => {
    return a * b;
};

// EVEN SHORTER (1 expression only)
const muliply_1 = (a, b) => a * b;
multiply_1(2,3); // calculate 2*3 = 6 keep in memory without output

// MORE EXAMPLES
const greet = (name) => (`Hello ${name}`);
const square = (x) => x*x;
const isAdult = (age) => age >= 18;

console.log (greet ("Ben")); // Hello Ben
console.log (square (2)); // 4
console.log (isAdult (17)); // false

// ARROW FUNCTION NO PARAMETERS
const greet_1 = () => console.log("Hello");
greet_1();

// ARROW FUNCTION WITH ONE PARAMETER (parentheses optional)
const double = x => console.log(x*2);
double(4); // 8


