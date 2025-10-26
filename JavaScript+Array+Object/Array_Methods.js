const number = [1,2,3,4,5,6,7,8,9,10];
// 1. MAP - Transformed  each item (creates new array)
const doubled = number.map(num => num * 2);
console.log (`Double number:`, doubled);

const cube = number.map (num => num*num*num);
console.log (`cube number:`, cube);

// 2. FILTER - keep only items that pass a test
const even_only = number.filter(num => num % 2 === 0);
console.log (`Number divisible by 2:`,even_only);

const greater_equal_2 = number.filter (num => num >= 2);
console.log (`Greater or equal to 2:`, greater_equal_2);

// 3. FIND - get first item that matches
const first_get_match = number.find(num => num % 5 === 0);
console.log (`First number found to be divisible by 5:`, first_get_match);

// 4. SOME - check if any matches true/false function
const get_match = number.some(num => num % 5 === 0);
console.log (`Is there any number that is divisible by 5?`, get_match);

// 5. EVERY - check if all matches true/false function
const all_match = number.every(num => num > 0);
console.log(`Are all of them positive?`, all_match);

// 6. REDUCE - Combine all items into one value, use for sum, multiplication, flatten array, counting words
const sum = number.reduce((total, n) => total + n, 0);
console.log (`Sum:`, sum);