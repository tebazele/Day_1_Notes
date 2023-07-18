// 🧩What is data? The answers to questions

// This is a comment
/* This is a multi-line
comment */

// There are three basic data types in javascript

// string (don't forget the double quote marks)
"Hello there"
"Go!"
"Jeanne"
"An entire sentence or two. I like strings! Woo hoo!"
// number
4
590
321
100000000000000000000000000000

// boolean
true
false

/* This is how we declare variables; we always start with the declaration on the left and the value on the right. 
This is called left-hand assignment */
let myName = "Jeanne";
let myAge = 38
let myGrade = 1000000000
let wearsGlasses = true

// we can declare variables that are undefined and save values into them later
let total;
// undefined


// If we want a variable to be nothing, we set it to null
let myNothingVariable = null;

// All values in javascript are either "truthy" or "falsy"

// falsy value: undefined, false, null, 0
// truthy values: true, everything else

let greeting = "How's it going?"

// Let's print stuff to the console
console.log("Hello " + myName + ". " + greeting)
console.log(myAge, myGrade, wearsGlasses)
console.log("supercalifragalisticsexpialodocious".length)

// We can use javascript to do math. Here, we are birdwatching. How many birds did we see?

let ducks = 7;
let geese = 2;
let robins = 14;

// addition
let totalBirds = 7 + 2 + 14;

console.log("This is the total birds I saw", totalBirds)

// These are mathematical operators in javascript

// subtract
let subtractionAnswer = 789 - 355; 
// multiply
let multiplicationAnswer = 55 * 90;
// divide
let divisionAnswer = 100 / 10;
// get the remainder
let modulusAnswer = 9 % 2;

// the modulus operater refers to remainders after doing division


// Control flows

// Conditionals (if/else statements)
if(3 > 2) {
    console.log("three is greater than two!")
}

if (wearsGlasses) {
    console.log("I see sharp")
} else {
    console.log("I see for free")
}

let you = "allright"

if (you == "good") {
    console.log("Here's a treat!")
} else if (you == "allright") {
    console.log("You get one smartie")
} else {
    console.log("You've been naughty :(")
}

// while loop

let steps = 0;

while(steps < 4) {
    console.log("move forward", steps);
    steps++;
}

// For loop

for(let i = 0; i < 4; i++) {
    console.log(i)
}
