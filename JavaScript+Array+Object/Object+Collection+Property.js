// CREATE OBJECT
const person = {
    name: "Peter",
    age: 25,
    taskcompleted: 2,
    session_hours: 8,
    work_or_study: "work",
};

// ACCESS PROPERTIES
console.log (person.name);
console.log (person.age);
console.log (person["session_hours"]); // [8]
console.log (person["taskcompleted"]);
console.log (person["work_or_study"]);

// ADD/MODIFY PROPERTIES
person.email = "peter@bgsu.edu"; // add new property
person.phone_numer = "4193799360"; // add new property
person.age = 20; // modify property

console.log (`The latest version of object:`,person);

// DELETE PROPERTY
delete person.age;
delete person.email;
console.log (`The object after age and email delete:`, person);

// OBJECT WITH METHODS (FUNCTIONS inside objects)
const calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
};

console.log (`Sum of 5 and 3:`, calculator.add(5,3));
console.log (`Subtract of 5 and 3:`, calculator.subtract(5,3));




