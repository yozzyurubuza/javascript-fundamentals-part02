//Introduction to Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//Literal Syntax
const friends = ["Michael", "Steven", "Peter"];
console.log(friends); // ['Michael', 'Steven', 'Peter']

//Creates a new array with these elements inside
const y = new Array(1991, 1984, 2008, 2020);
console.log(y); // ['1991', '1984', '2008', '2020']

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

//Get how many elements inside the array
console.log(friends.length); // 3
//Get last element of the array
console.log(friends[friends.length - 1]); //Peter

//Const array can be changed, but cannot change the entire array
friends[2] = "Jay";
console.log(friends); // friends = ['Bob', 'Alice']

const firstName = "Jonas";
const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas); //["Jonas", "Schmedtmann", 46, "teacher", ["Michael", "Steven", "Peter"]]

console.log(jonas.length); //5

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]); //47
const age2 = calcAge(years[1]); //70
const age3 = calcAge(years[years.length - 1]); //2018

console.log(age1, age2, age3); //47, 70, 2018

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); //[47, 70, 2018]
