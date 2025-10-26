// FOR LOOP
for (let i = 0; i < 10; i++)
{
    console.log(i);
}

// WHITE LOOP
let count = 0;
while (count < 5)
{
    console.log (count);
    count++;
}

// LOOPING THROUGH ARRAYS (modern way - you will use this a lot!)
const fruits = ["apples", "bananas", "dragonfruits", "mandarin"];
 //Method 1: ForEach
fruits.ForEach(function(index) {
    console.log(index);
});

// Method 2: for...of...
for (index of fruits) {
    console.logs(index);
}

const building = ["Eppler", "Recreation", "Student_Union"];
building.ForEach = (function(index) {
    console.log(index);
});