// Reviewing Functions

//Arrow Function format
const calcAge = (currentYear, birthYear) => currentYear - birthYear;

//Function Expression format
const calcRetirement = function (age) {
  return 65 - age;
};

const yearsUntilRetirement = function (currentYear, birthYear, firstName) {
  const age = calcAge(currentYear, birthYear); //currentYear - birthYear
  const retirement = calcRetirement(age); //65 - age

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} year/s`);
  } else {
    console.log(`${firstName} has already retired...`);
  }

  return retirement;
};

//Input sample data in the browser to see the output of yearsUntilRetirement function
yearsUntilRetirement(2021, 1996, prompt("Enter Name: ", ""));
