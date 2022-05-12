"use strict";

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
