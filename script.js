"use strict";

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
