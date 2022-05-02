//Function Declarations vs Expressions

//Different in way of writing, but provides the same purpose

//Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// 1991 = Parameter
const age1 = calcAge1(1991);

//Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2); //46, 46
