// 🧩What is data? The answers to questions

// There are three basic data types in javascript
"Hello there"
"Go!"
"Jeanne"
"An entire sentence or two. I like strings! Woo hoo!"

4
590
321
100000000000000000000000000000


true
false

let myName = "Jeanne";
let myAge = 38
let myGrade = 1000000000
let wearsGlasses = true

let total;
// undefined

let myNothingVariable = null;

// truthy values: true, everything else

// falsy value: undefined, false, null, 0
let greeting = "How's it going?"

// print stuff to the console
// console.log("Hello " + myName + ". " + greeting)
// console.log(myAge, myGrade, wearsGlasses)
// console.log("supercalifragalisticsexpialodocious".length)

// we are birdwatching

let ducks = 7;
let geese = 2;
let robins = 14;

let totalBirds = 7 + 2 + 14;

console.log("This is the total birds I saw", totalBirds)

let subtractionAnswer = 789 - 355;
let multiplicationAnswer = 55 * 90;
let divisionAnswer = 100 / 10;
let modulusAnswer = 9 % 2;

// the modulus operater refers to remainders after doing division


// Control flows

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
