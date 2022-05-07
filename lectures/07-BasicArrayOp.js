// Basic Array Operations

const friends = ["Michael", "Steven", "Peter"];

// Add Elements
//Push is a method
//Push modifies the original array element.
const newLength = friends.push("Jay"); //Storing a push method into a variables returns the length of the array
console.log(friends); //['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); //4

//write into the beginning of array
friends.unshift("John");
console.log(friends); //['John', 'Michael', 'Steven', 'Peter', 'Jay']

//Remove Elements
//Take out the last element
//Pop also modifies the original array element
friends.pop();
const popped = friends.pop();
console.log(popped); //['John', 'Michael', 'Steven']
console.log(friends); //['John', 'Michael', 'Steven']

//Remove first element
friends.shift();
console.log(friends); //['Michael', 'Steven']

// Find the position of the element in the array
console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // returns -1 if element is not found using indexOf method

friends.push(23); //['Michael', 'Steven', 23]
// True or False if the element is inside the array
console.log(friends.includes("Steven")); //True
console.log(friends.includes("Bob")); //False
console.log(friends.includes("23")); //False, because 23 =/= '23'
//includes is in strict mode by default

//Current Array: ['Michael', 'Steven', 23]
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven"); //Execute
}
