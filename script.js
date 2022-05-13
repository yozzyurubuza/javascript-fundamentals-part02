"use strict";

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
