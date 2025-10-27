// ARRAY DESTRUCTURING
array_list = [1,2,3,4,5];
const [number1,number2, number3, number4, number5] = array_list;
console.log(`Check element ${number1}`);
console.log(`Check element ${number2}`);
console.log(`Check element ${number3}`);
console.log(`Check element ${number4}`);
console.log(`Check element ${number5}`);

// SKIP ITEM
const [, , third_element] = array_list;
console.log(`Check skip item feature: ${third_element}`);

// OBJECT DESTRUCTURING
object_1 = {name: `alice`,age: `25`};
const {name, age} = object_1;
console.log(`Object destructuring test: ${name}, ${age}`);

// RENAME WHILE DESTRUCTURING
const {name: name_1, age: age_1} = object_1;
console.log(`Rename while object destructuring test: ${name_1}, ${age_1}`);