//Looping Arrays, Breaking, and Continuing

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

//Reading the data manually inside the array, one by one
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

//To read data from array without typing it out one-by-one, we need to use a loop:
for (let i = 0; i < jonas.length; i++) {
  // Display data from jonas array
  console.log(jonas[i], typeof jonas[i]); //"Jonas", string

  //Insert new value to array (data type)
  // types[i] = typeof jonas[i]; //Other way of adding data to array
  types.push(typeof jonas[i]); //string
}

console.log(types); //[string, string, number, string, array, boolean]

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages); //[46, 30, 68, 17]

// Continue and Break

console.log("--- ONLY STRINGS ----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  // Continue will immediately exit the current iteration (skip the next lines and move on to next iteration)
  console.log(jonas[i], typeof jonas[i]); //46, number
}

console.log("--- BREAK WITH NUMBER ----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  // Break will completely terminate the iteration.
  console.log(jonas[i], typeof jonas[i]); //"Jonas", string
}
