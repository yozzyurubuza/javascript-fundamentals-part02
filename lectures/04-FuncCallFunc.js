//Functions Calling other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  //Outside function (cutFruitPieces) being called inside fruitProcessor function
  const applePieces = cutFruitPieces(apples);
  //apples * 4
  const orangePieces = cutFruitPieces(oranges);
  //oranges * 4

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
// Juice with 8(2*4) pieces of apple and 12 pieces of orange
