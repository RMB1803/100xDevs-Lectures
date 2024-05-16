const fs = require('fs');

// my own asynchronous function
// READING a file using promises and .then method.

function ramsReadFile() {
    return new Promise(function(resolve) {
        console.log("Inside promise")
        fs.readFile("temp.txt", "utf-8", function(err, data) {
            console.log("Before resolve")
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

ramsReadFile().then(onDone);


// FURTHER EXPLANATION FOR UNDERSTANDING PROMISES

// Normal async func by wrapping it around another Async function
// and calling back a funtion

function myOwnSetTimeout(callback, duration) {
    setTimeout(callback, duration);
}

myOwnSetTimeout(function() {
    console.log("Hi there")
}, 2000);


//returning Promise
function promisifiedMyOwnSetTimeout(duration) {
    let p = new Promise(function(resolve) {
        setTimeout(resolve, duration);
    })
    return p;
}

const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function() {
    console.log("Hi there again")
})

