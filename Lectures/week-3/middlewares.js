const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(username != "ram" || password != "pass") {
        res.status(400).json({"msg": "Something's up with your inputs"})
        return;
    }

    if(kidneyID != 1 && kidneyID != 2) {
        res.status(400).json({"msg": "Something's up with your inputs"})
        return;   
    }

    res.json({
        msg: "Your kidney is fine!"
    })
});

app.listen(3000)

// ugly way to create mutliple routes, doesn't follow DRY.
// create functions to ensure not writing same code again.

