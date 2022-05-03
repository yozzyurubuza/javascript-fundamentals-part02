//Arrow Functions

// Good for one-liner functions
// function name = parameter => return
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3); //46

//Still can be used like a Function Expression, add {}
//function name = parameters () => {}
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
//Jonas retires in 19 years.

console.log(yearsUntilRetirement(1980, "Bob"));
//Bob retires in 8 years.
