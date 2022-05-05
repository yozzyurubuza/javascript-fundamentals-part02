"use strict";

// Basic Array Operations

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add Elements
// //Push is a method
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// //write into the beginning of array
// friends.unshift('John');
// console.log(friends);

// //Remove Elements
// //Take out the last element
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// //Remove first element
// friends.shift();
// console.log(friends);

// // Find the position of the element in the array
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// // True or False if the element is inside the array
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23')); // Strict

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

// Introduction to Objects

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     teacher,
//     ['Michael', 'Peter', 'Steven']
// ];

// // Property : Value
// //Object Literal Syntax - order of values does not matter
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

//Dot vs Bracket Notation

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// //Use bracket notation when you need to compute to get the property
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // console.log(jonas.'last' + nameKey);

// //Sample use case of bracket notation
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// //Insert property and value to object
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann';

// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael."

// const firstName = jonas.firstName;
// const numOfFriends = jonas.friends;
// const bestFriend = numOfFriends.shift();

// console.log(`${firstName} has ${numOfFriends.length} friends, and his best friend is called ${bestFriend}.`);

// //Jonas Schmedtmann Implementation
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

//Object Methods

// //Objects can also hold functions because it is an expression
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     //Any function attached to an object is called method
//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     //"this" is good to use inside the object
//     // calcAge: function () {
//     //     // console.log(this)
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary2: function () {
//         this.age = 2037 - this.birthYear;
//         const checkLicense = this.hasDriversLicense ? 'a' : 'no';

//         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${checkLicense} driver's license.`
//     },

//     //Jonas Schmedtmann Implementation
//     getSummary: function () {

//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }

// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a/no driver's license"

// console.log(jonas.getSummary());

// //Arrays are also objects

//Iteration: The For Loop

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

//Looping Arrays, Breaking, and Continuing

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

// for (let i = 0; i < jonas.length; i++) {
//     // Readin from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     //Filling types array
//     // types[i] = typeof jonas[i];

//     types.push(typeof jonas[i]);

// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break

// console.log('--- ONLY STRINGS ----');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     // Continue will immediately exit the current iteration (skip the next lines and move on to next iteration)
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ----');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     // Break will completely terminate the iteration.
//     console.log(jonas[i], typeof jonas[i]);
// }

// Looing backwards and loops in loops

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// // 0, 1, ....., 4
// // 4, 3, ....., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`----------- Starting Exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// The While Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

/*

let rep = 1
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

// Loop without counter
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end....');
    }
}

*/

// Reviewing Functions

const calcAge = (currentYear, birthYear) => currentYear - birthYear;

const calcRetirement = function (age) {
  return 65 - age;
};

const yearsUntilRetirement = function (currentYear, birthYear, firstName) {
  const age = calcAge(currentYear, birthYear);
  const retirement = calcRetirement(age);

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} year/s`);
  } else {
    console.log(`${firstName} has already retired...`);
  }

  return retirement;
};

yearsUntilRetirement(2021, 1996, prompt("Enter Name: ", ""));
