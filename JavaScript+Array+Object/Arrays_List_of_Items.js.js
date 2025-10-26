// CREATE ARRAY
const room = ["bio lab", "psycho lecture", "computer lab"];
const player = [1, 3, 4, 5, 7, 9, 20, 25];
const mixed = [1,"pen", 49, "string", true, false, null];

console.log(mixed);

// ACCESS ITEMS (index starts at 0)
console.log(room[0]); // bio lab
console.log(mixed[2]); // 49

// ARRAY LENGTH
console.log(room.length); // 3

// ADD ITEMS
// add to end
room.push("nursery room");
console.log (room); // [ 'bio lab', 'psycho lecture', 'computer lab', 'nursery room' ]
// add to begin
player.unshift (2);
console.log(player);  // [2,1,3,4,5,7,9,20,25]

// REMOVE ITEMS
room.pop(); // remove last item
console.log(room);

room.shift(); // remove first item
console.log(room);

//FIND INDEX
const index = player.indexOf(4); // it should be index+ uppercase(o) and lowercase(f)
console.log(index);

// CHECK IF ITEM EXISTS
console.log(mixed.includes("bio lab")); // false
console.log(room.includes("computer lab")); // true
