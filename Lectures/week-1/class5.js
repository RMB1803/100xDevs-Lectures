// Topics covered: Async, Await and Promises in JavaScript.

/*
Synchronous functions: are basically the ones which run sequentially line by line,
even if the JS thread has to ponder over it for a long time, it won't move forward
until the line of code is fully executed.

Asynchronous functions: are the one which lets the JS thread to context-switch b/w
tasks. We can see this using the in-built Async functions in JS like setTimeout,
fs.readFile and Fetch. It lets the JS thread run the other lines of code while the 
async function is running it's code.
 */

//UNDERSTANDING setTimeout function: //

// function findSum(n) {
//     let ans = 0; 
//     for(let i = 1; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// function findSumtill100() {
//     console.log(findSum(100));
// }

// setTimeout(findSumtill100, 2000);

// //the Thread runs the findsumtill100() func 
// //setTimeout ensures the result of findsumtill100() is logged after 2 seconds
// //in the meantime the thread context switches(As setTimeout is async func)
// //and console.log("Hello world") is run and printed first 

// console.log("Hello world");


//UNDERSTANDING fs.readFile function: //

const fs = require("fs");
//filesystem module

fs.readFile("temp.txt", "utf-8", function (err, data) {
    console.log(data);
})

/*
Here we are delegating the task to some function to read a file and then print and it takes time,
hence the thread proceeds to print "Hi there" as fs.readFile is an async function. 
*/

console.log("Hi there");

let a = 0;
//takes longer to execute than the file read.
for(let i = 0; i < 10000000000; i++) {
    a++;
}

console.log("Hi it's me again")

/*
Here "Hi it's me again" is printed after "Hi there" instead of printing the content
of the fs.readFile function.
It happens because as the fs.readFile is running, the thread context switches and executes
the other lines of code and only when all the lines are executed, the thread becomes idle
and only then it goes back to print the contents of fs.readFile.
*/

 



