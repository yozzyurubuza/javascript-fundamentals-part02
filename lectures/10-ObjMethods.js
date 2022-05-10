//Object Methods

//Objects can also hold functions because it is an expression
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //Any function attached to an object is called method
  //Old implementation
  // calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  // }

  //"this" is good to use inside the object
  // calcAge: function () {
  //     // console.log(this)
  //     return 2037 - this.birthYear;
  // }

  //New implementation with "this" keyword
  calcAge: function () {
    this.age = 2037 - this.birthYear; //Adds a new key in the "jonas" object called "age" with the value after the computation.
    return this.age;
  },

  getSummary2: function () {
    this.age = 2037 - this.birthYear;
    const checkLicense = this.hasDriversLicense ? "a" : "no";

    return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${checkLicense} driver's license.`;
  },

  //Jonas Schmedtmann Implementation
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge()); //46

console.log(jonas.age); //46
console.log(jonas.age); //46
console.log(jonas.age); //46

// Challenge - Display this string
// "Jonas is a 46-year old teacher, and he has a/no driver's license"

console.log(jonas.getSummary());

//Arrays are also objects - because it is also used to store a collection of data just like objects, it's just arrays have the same variable type of data.
