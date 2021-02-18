const express = require('express');
app = express();

let time = new Date();
app.get('/time', (req, res) => {
    let time = new Date();
    let actualTime = `Seconds : Minutes : Hours = <b>${time.getSeconds()} : ${time.getMinutes()} : ${time.getHours()}</b>`; 
    res.send(actualTime); 
});

app.get('/day', (req, res) => {
    let time = new Date();
    res.send(`Today is: <b>${time.toLocaleString('default', {weekday: 'long'} )}</b>`);
});

app.get('/month', (req, res) => {
    let time = new Date();
    res.send(`The current month is: <b>${time.toLocaleString('default', {month: 'long'} )}</b>`);
});

app.listen(8080);