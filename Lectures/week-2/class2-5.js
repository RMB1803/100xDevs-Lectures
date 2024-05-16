const express = require("express");
const app = express();

function sum(n) {
    let ans = 0; 
    for(let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

// req & res => request and response
app.get('/', function(req, res) {
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi your answer is " + ans);
})

// REQUEST METHODS
/*
GET - going for a consultation to get a check up(basically asking something from the server)
POST - going to get a new kidney inserted(basically posting something on my backend of the server)
PUT -  going to get a kidney replaced(basically updating data in a server)
DELETE - goint to get a kidney removed(basically deleting data from the backend of the server)
*/

// STATUS CODES
/*
200 - everything went fine
404 - doctor is not in the hospital
500 - mid surgery light went away
411 - inputs were incorrect, wrong person came for the surgery
403 - accessing something I don't have access to
*/

app.listen(3000);