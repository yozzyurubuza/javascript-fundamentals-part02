//Functions

const describeCountry = (country, population, capitalCity) => {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

const firstData = describeCountry("Philippines", 109, "Manila");
const secondData = describeCountry("South Korea", 51, "Seoul");
const thirdData = describeCountry("Japan", 125, "Tokyo");

console.log(firstData);
console.log(secondData);
console.log(thirdData);
console.log("//////////////////////");

//Function Declaration vs Expressions

console.log("--FUNCTION DECLARATION--");
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}

console.log(percentageOfWorld1(109));
console.log(percentageOfWorld1(51));
console.log(percentageOfWorld1(125));

console.log("--FUNCTION EXPRESSION--");
const percentageOfWorld2 = function (population) {
  return `${(population / 7900) * 100}%`;
};

console.log(percentageOfWorld2(109));
console.log(percentageOfWorld2(51));
console.log(percentageOfWorld2(125));
console.log("//////////////////////");

// Arrow Functions

console.log("--ARROW FUNCTION--");
const percentageOfWorld3 = (population) => {
  let percentPopulation = (population / 7900) * 100;
  return `${percentPopulation.toFixed(2)}%`;
};

const percentPhilippines = percentageOfWorld3(109);
const percentKorea = percentageOfWorld3(51);
const percentJapan = percentageOfWorld3(125);

console.log(percentPhilippines);
console.log(percentKorea);
console.log(percentJapan);
console.log("//////////////////////");

//Functions Calling Other Functions

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld3(population);
  const describe = `${country} has ${population} million people, which is about ${percentage}`;
  return console.log(describe);
};

describePopulation("Philippines", 109);
describePopulation("Korea", 58);
describePopulation("Japan", 125);
console.log("//////////////////////");

//Introduction to Arrays

const populations = [109, 58, 125, 169];
console.log(populations.length == 4);
const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
];
console.log(percentages);
console.log("//////////////////////");

// Basic Array Operations (Methods)

const neighbours = ["Taiwan", "Malaysia", "Indonesia", "Vietnam"];

neighbours.push("Utopia");
neighbours.pop("Utopia");

const hasGermany =
  neighbours.includes("Germany") == false
    ? console.log("Probably not a European Country :D")
    : console.log();

neighbours[neighbours.indexOf("Malaysia")] = "Republic of Malaysia";
console.log(neighbours);
console.log("//////////////////////");

//Introduction to Objects

let myCountry = {
  country: "Philippines",
  capital: "Manila",
  language: "Tagalog",
  population: 109,
  neighbours: ["Taiwan", "Malaysia", "Indonesia", "Vietnam"],
};

console.log(myCountry);
console.log("//////////////////////");

//Dot vs. Bracket Notation

const describeString = `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry["capital"]}`;

console.log(describeString);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);
console.log("//////////////////////");

//Object Methods

myCountry = {
  country: "Philippines",
  capital: "Manila",
  language: "Tagalog",
  population: 109,
  neighbours: ["Taiwan", "Malaysia", "Indonesia", "Vietnam"],

  describe: function () {
    const stringDesc = `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;

    console.log(stringDesc);
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    console.log(myCountry);
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log("//////////////////////");

// Iteration: The For Loop

for (let i = 1; i <= 50; i++) {
  console.log(`Voter Number ${i} is currently voting`);
}
console.log("//////////////////////");

// Looping Arrays, Breaking, and Continuing

let percentages2 = [];

for (let i = 0; i <= populations.length - 1; i++) {
  percentages2.push(percentageOfWorld3(populations[i]));
}

console.log(percentages2);
console.log("//////////////////////");

// Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

console.log(listOfNeighbours);

for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
  for (let j = 0; j <= listOfNeighbours[i].length - 1; j++) {
    console.log("Neighbour: " + listOfNeighbours[i][j]);
  }
}
console.log("//////////////////////");

//The while loop

let percentages3 = [];
let i = 0;

while (i <= populations.length - 1) {
  percentages3.push(percentageOfWorld3(populations[i]));
  i++;
}

console.log(percentages3);
//For loop is better in this case. No need to declare a variable i outside of the loop.
