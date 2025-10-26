// FUNCTION DECLARATION
function greet () {
    console.log ("Hello Javascript");
}

// CALL THE FUNCTION
greet(); // Hello Javascript
greet(); // Hello Javascript

// FUNCTION WITH PARAMETERS (INPUT)
function greetPerson(name) {
    console.log(`Hello, ${name}!`) // use `backstick instead of single quote'
}

// CALL FUNCTION
greetPerson("Ben"); // Hello Ben
greetPerson("Sean"); // Hello Sean

// FUNCTION WITH RETURN VALUE (output)
function add(a,b) {
    return a + b;
}

const result = add (9,20);
console.log(result); // print 29

const data = add (-9,21);
console.log(3);