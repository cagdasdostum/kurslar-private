'use strict';
/* --- strict mode
let hasDriverLicence = false;
const passTest = true;

if (passTest) {
  hasDriversLicence = true;
}
*/

/* --- functions
function logger() {
  console.log("My name is Çağdaş");
}
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const mixedJuice = fruitProcessor(3, 3);
console.log(mixedJuice);
*/

/* --- function declaration vs expression
// function declatation
function calcAge1(birthYear) {
  //const age = 2037 - birthYear;
  //return age;
  return 2037 - birthYear;
}

const age1 = calcAge1(2004);
// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1994);

console.log(age1, age2);
*/


/* --- arrow functions
// arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1978);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName}, senin emekliliğe ${retirement} yıl kalmış.`;
}
yearsUntilRetirement(1999, 'mehmet');
*/

/* --- functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}


function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
*/

/* --- arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 2004, 2005, 2009);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

friends[1] = "Jimmy";
console.log(friends);

const cagdas = ["Çağdaş", "Çalayır", 2025 - 2004, true, friends];
console.log(cagdas);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const a1 = calcAge1(years[0]);
const a2 = calcAge1(years[1]);
const a3 = calcAge1(years.length-1);
const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years.length-1)];
console.log(ages);

// Add Elements
friends.push("Ahmet");
friends.unshift("Jim");

// Remove Elements
friends.pop(); // last
friends.shift(); // first

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Mehmet'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Mehmet'));
*/

/* --- objects
const cagdasArray = ["Çağdaş", "Çalayır", 2025-2004, "Student"];
const cagdas = {
  firstName: "Çağdaş",
  lastName: "Çalayır",
  age: 2025 - 2004,
  job: "Student",
};

cagdas.firstName;
cagdas['lastName'];

const nameKey = 'Name';
console.log(cagdas['first'+nameKey]);
console.log(cagdas['last'+nameKey]);
*/


for (let i = 0; i < array.length; i++) {
  console.log(`lifting weights 🏋️ rep ${i}`);
}

const cagdas = {
  firstName: "Çağdaş",
  lastName: "Çalayır",
  age: 2025 - 2004,
  job: "Student",
};

for (let i = 0; i < cagdas.length; i++) {
  console.log(cagdas[i], typeof cagdas[i]);
}