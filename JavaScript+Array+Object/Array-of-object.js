// ARRAY OF OBJECT
const users = [
    { id: 1, name: "Alice", email: "alice@bgsu.edu"},
    { id: 2, name: "Ben", email: "ben@bgsu.edu"},
    { id: 3, name: "Charlie", email: "charlie@bgsu.edu"},
];

// GET ALL NAMES
const names = users.map(user => user.name); // map is kind of like taking data and transform it into something else
console.log(names); // output an array

// GET ALL emails
const emails = users.map(user => user.email);
console.log(emails);

// FIND USER BY ID
const u = users.find(user => user.id === 3); // format would be: data in users => find the data in data user that match with the condition the data.id === 2
console.log(u);

// FILTER USER NAME STARTING WITH A
const name_A = users.filter(user => user.name.startsWith(`A`)); // work as same as find to find the match with condition (this case is `A`)
console.log(name_A);