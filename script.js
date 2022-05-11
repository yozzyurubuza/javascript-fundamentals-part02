"use strict";

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
