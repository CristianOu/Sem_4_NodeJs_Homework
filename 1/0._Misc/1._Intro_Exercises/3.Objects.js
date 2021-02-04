log = e => {
    console.log(e)
}
// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message

log("Ex. 1");
log(myObj.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const copyOfMe = {
    name: "Cristian Ou",
    age: "21"
}
log("Ex. 2");

log(`Name: ${copyOfMe.name}; Age: ${copyOfMe.age}` );

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed;
stackOverflow.isAllowed = "true";
log("Ex. 3");
log(stackOverflow.isAllowed);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

log("Ex. 4");
delete thisSong.description;
thisSong.about = "Just a tribute.";
log(thisSong.about);


// --------------------------------------


