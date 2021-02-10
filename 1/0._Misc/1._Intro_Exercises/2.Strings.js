log = e => {
    console.log(e)
}
// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

log("Ex. 3");
log(+numberOne + +numberTwo);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

log("Ex. 4");
log((+anotherNumberOne + +anotherNumberTwo).toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

log("Ex. 5");
log(((one + two + three) / 3).toFixed(5) );



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

 log("Ex. 6");
 log(letters.charAt(2));


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

log("Ex. 7");

let position = fact.search("j");

let newFact = fact.substring(0, position) + "J" + fact.substring(position + 1, fact.length);
log(newFact);

// --------------------------------------



