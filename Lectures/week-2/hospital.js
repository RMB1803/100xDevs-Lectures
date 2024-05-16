const express = require("express");
const app = express();

app.use(express.json());

var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

app.get('/', function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for(let i = 0; i < johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            healthyKidneys += 1;
        }
    }
    const unhealthyKidneys = numberofKidneys - healthyKidneys;
    res.json({
        numberofKidneys, 
        healthyKidneys, 
        unhealthyKidneys
    }) 
})

app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/', function(req, res) {
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete('/', function(req, res) {
    let atleastoneunhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastoneunhealthyKidney = true;
        }
    }

    if(atleastoneunhealthyKidney) {
        const newKidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Done!"})
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

app.listen(3000);
