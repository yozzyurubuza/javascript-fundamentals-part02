//Dot vs Bracket Notation

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas); //{firstName: "Jonas", lastName: "Schmedtmann".....} same as how it was written above

//Getting value depending on the key
//Different ways of getting the value, using Dot or Bracket notation
console.log(jonas.lastName); //Schmedtmann
console.log(jonas["lastName"]); //Schmedtmann

//Use bracket notation when you need to compute to get the key
const nameKey = "Name";
console.log(jonas["first" + nameKey]); //Jonas
console.log(jonas["last" + nameKey]); //Schmedtmann

// console.log(jonas.'last' + nameKey); //Not possible with Dot notation

//Sample use case of bracket notation
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]); //Get key depending on the input
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

//Insert key and value to object, can also do this to change the value of an existing key in the object
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";

console.log(jonas); //{... location: "Portugal"}

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael."
const firstName = jonas.firstName;
const numOfFriends = jonas.friends; //3, but will become 2.
const bestFriend = numOfFriends.shift(); //Way to get the first element of an array, but modifies the original array.

console.log(
  `${firstName} has ${numOfFriends.length} friends, and his best friend is called ${bestFriend}.`
);

// //Jonas Schmedtmann Implementation
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
