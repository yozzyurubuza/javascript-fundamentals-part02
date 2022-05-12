// Looping backwards and loops in loops

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// 0, 1, ....., 4
// 4, 3, ....., 0

//Loop until all array elements are displayed from bottom to top
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]); //4, ['Michael', 'Peter', 'Steven']
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----------- Starting Exercise ${exercise}`);
  //Starting Exercise 1-3

  //Loop inside a loop
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`); //Exercise 1: Lifting weight repetition 1-6
  }
}
