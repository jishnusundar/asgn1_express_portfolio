//your server will live here
let express = require('express');

//create an instance of the connect server - app
let app = express();

//create the port constant
const port = 3000;

//start listening
app.listen(port);
console.log(`Server started at http://localhost:${port}`);

//Route for hello
app.use('/hello', (req,res,next)=> {
res.redirect("index.html");
});

//first route is '/'- root of my website
app.use('/', (req,res,next)=> {
res.setHeader('Content-Type', 'text/plain');
res.send("Welcome!");
});

module.exports = app;