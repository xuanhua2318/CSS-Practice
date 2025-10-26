const a = 2;
const b = 3;

console.log(a === b); // false
console.log(a !== b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a <= b); // true
console.log(a >= b); //false

console.log(5 === "5") // used to check type

// Logic Operation
const isAccessed = true;
const isPremium = false;

console.log (isAccessed && isPremium); // false
console.log (isAccessed || isPremium); // true
console.log (!isPremium); // true

const member = true;

if (age >= 18 && member)
{
    console.log ("Allowed to enter");
}
else
{
    console.log ("Not allowed to enter");
}