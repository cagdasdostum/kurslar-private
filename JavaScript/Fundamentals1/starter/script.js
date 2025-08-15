/*
let js = 'amazing';
console.log(40 + 2 + 15 - 74 + 99);

let firstName = 'çağdaş';
console.log(firstName);
*/

/* --- data types ---
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 2025;
*/

/* --- let, const and var
let age = 21;
age = 22;

const birthYear = 2004;

var job = 'teacher';
job = 'doctor';
*/

/* --- basic operators
const now = 2045;
const ageCagdas = now - 2004;
const ageEge = now - 2034;
console.log(ageCagdas, ageEge);

const firstName = 'Yiğit';
const lastName = 'Demir';
console.log(firstName + ' ' + lastName);

let x = 15 + 6;
console.log(x);
x += 10;
console.log(x);

console.log(ageCagdas > ageEge);
*/

/* --- template literal
const firstName = 'Çağdaş';
const age = 21;
const job = 'Student';

const cagdas = `I'm ${firstName} a ${age} years old ${job}!`;
console.log(cagdas);
*/

/* --- if else
const age = 14;
const isOldEnough = age >= 18;

if(isOldEnough) {
  console.log('Ege can start driving licence 😁');
}
else {
  const yearsLeft = 18 - age;
  console.log(`Ege is too young. Wait another ${yearsLeft} years. 😢`);
}
*/
/* --- type convertion and coercion
// type convertion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(String(23), 23);

// type coercion
console.log('I am ' + 21 + ' years old');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/* --- truthy and falsy operator
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log("Dont spend it all :)");
} else {
  console.log("you should get a job!");
}

let height;
if (height) {
  console.log("height is defined.");
} else {
  console.log("height is UNDEFINED!");
}
*/

/* --- equality operators
const age = '18';
if (age === 18) {
  console.log("you just became an adult. (strict)");
}

if (age == 18) {
  console.log("you just became an adult. (loose)");
}

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 14) {
  console.log("cool! 14 is a nice number.");
}
*/

/* --- logical operators
const hasDriversLicence = true;
const hasGoodVision = false;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);
*/

/* --- switch expressions
const day = 'monday';

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("go to picnic");
    break;
  case "wednesday":
    console.log("play badketbal");
    break;

  default:
    break;
}
*/


const age = 21;
age >= 18 ? console.log("I like to drink beer 🍺") : console.log("I like to drink milk 🍼");