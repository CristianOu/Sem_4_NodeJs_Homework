const express = require('express');
const app = express(); 

app.use(express.json());

let usersList = [
        {id: 11, name: "Cris", age: 20},
        {id: 24, name: "John", age: 25},
        {id: 58, name:"Meliodas", age:18}
    ];


// GET all users - important
app.get('/users', (req, res) => {
    res.send(usersList);
});


// GET one user - important
app.get('/users/:id', (req, res) => {
    res.send(usersList.find(user => user.id == req.params.id));
});


// CREATE multiple users
app.post('/users', (req, res) => {
    let newUsers = req.body;
   
    // Storing the last existing id to know to where to continue from
    let lastExistingId;
    if (usersList.length == 0) {
        lastExistingId = -1;
    } else {
        lastExistingId = usersList[usersList.length - 1].id;
    }

    // Creating a new object for each new user and store it the array.
    // Also, the last existing id is incremented after each inserted user.
    let size = newUsers.length;
    for (let i = 0; i < size; i++) {
        let user = {
            id: lastExistingId + 1,
            name: newUsers[i].name,
            age: newUsers[i].age
        };
        lastExistingId++;
        usersList.push(user);
    }

    res.send(usersList);
});


// Create one user
app.post('/users/:id', (req, res) => {
    
    // First, the new user is created based on the body and the id specified by the client
    let newUser = {
        id: parseInt(req.params.id),
        name: req.body.name,
        age: req.body.age
    };
    
    // Then, the new user is saved in the array
    usersList.push(newUser); 
    res.send(usersList);
});


// PUT(Update) ALL users - rare cases
app.put('/users', (req, res) => {
    let updatedUsers = req.body;

    // Finding both lengths of the existing array and of the one specified by the client
    let sizeOfExisting = usersList.length;
    let sizeOfNew = Object.keys(updatedUsers).length;
    for (let i = 0; i < sizeOfExisting && i < sizeOfNew; i++) {
        usersList[i].name = updatedUsers[i].name;
        usersList[i].age = updatedUsers[i].age;
    }

    res.send(usersList);
});


// PUT(Update) one user - important
app.put('/users/:id', (req, res) => {
    // Storing the index of the user that has to be updated
    let index = usersList.findIndex(user => user.id == req.params.id);

    // Only if the user exists
    if (index > -1) {
        // A new user is created and it will replace the old one based on the id  
        updatedUser = {
            id: parseInt(req.params.id),
            name: req.body.name,
            age: req.body.age
        };
        usersList.splice(index, 1, updatedUser);
    }
    
    res.send(usersList);
});


// DELETE ALL users - very rare and dangerous
app.delete('/users', (req, res) => {
    usersList = [];
    res.send("All users deleted");
});


// DELETE one user - important
app.delete('/users/:id', (req, res) => {
    // Searching for the index of the user that has to be deleted from the array
    let index = usersList.findIndex(user => user.id == req.params.id);

    // The element is skipped, therefore deleted from the array
    usersList.splice(index, 1);
    res.send(usersList);
})


app.listen(8080);