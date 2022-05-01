//Functions
function logger() {
  console.log("My name is Jonas");
}

// Calling / Running / Invoking the function
logger();
logger();
logger(); //My name is Jonas

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//5 apples, 0 oranges - needed inputs for the function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Juice with 5 apples and 0 oranges.
console.log(fruitProcessor(5, 0)); // Juice with 5 apples and 0 oranges.

//2 apples, 4 oranges
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // Juice with 2 apples and 4 oranges.

const num = Number("23"); // 23
