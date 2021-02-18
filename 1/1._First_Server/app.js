const express = require("express");
const app = express();

// to solve the assignment create a datatype to store the data in
// implement the two GET endpoints .. you can hardcode the id for now

const users = [ {id: 50, name: 'Cris', age: 21}, 
                {id:62, name: 'John', age:22},
                {id:74, name: 'Jeff', age:25}];

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    res.send(users.find(user => user.id == id));
});

app.listen(8080);
