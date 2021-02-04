log = e => {
    console.log(e)
}
// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

log("Ex.1");
log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

let friend1 = {
    name: "name1",
    age: "age1"
}

let friend2 = {
    name: "name2",
    age: "age2"
}

let friend3 = {
    name: "name3",
    age: "age3"
}

friends.push(friend1, friend2, friend3);

log("Ex. 2");
log(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

log("Ex. 3");
log(significantMathNumbers.indexOf(1729));

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2, 0, "hamburger", "soda", "pizza"); // diet.splice(index, 0, item); will insert item into arr at the specified index (deleting 0 items first).
log("Ex. 4");
log(diet);


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

log("Ex. 5");
diet.pop();
log(diet);


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = diet.slice(); // basically it copies by value by creating a new array
log("Ex. 6");
log(dinnerTray);

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

log("Ex. 7")
for(let i = 1; i < lettersExpanded.length; i+=2) {
    log(lettersExpanded[i]);
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers
log("Ex. 8");
numbers.forEach(element => {
    (element > 6 || element < 0) ?
        log(element) :
        discardedNumbers.push(element);
});

log("Discarded numbers: " + discardedNumbers);

// --------------------------------------


