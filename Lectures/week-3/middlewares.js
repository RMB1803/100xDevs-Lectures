import express from "express";
const app = express();

// app.get("/health-checkup", function(req, res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyID = req.query.kidneyID;

//     if(username != "ram" || password != "pass") {
//         res.status(400).json({"msg": "Something's up with your inputs"})
//         return;
//     }

//     if(kidneyID != 1 && kidneyID != 2) {
//         res.status(400).json({"msg": "Something's up with your inputs"})
//         return;   
//     }

//     res.json({
//         msg: "Your kidney is fine!"
//     })
// });

// ugly way to create mutliple routes, doesn't follow DRY.
// create functions to ensure not writing same code again.

app.use(express.json())

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys
    const kidneyLength = kidneys.length

    res.send(`You have ${kidneyLength} kidneys`)
})

// Global catches
app.use(function(err, req, res, next) {
    res.json({
        msg: "Sorry, Something is up with our server!"
    })
})

app.listen(3000, () => {
    console.log("Listening on PORT: 3000!");
})

// INPUT VALIDATION IS SUPER IMPORTANT SO THAT THE WEBSITE DOESN'T CRASH



