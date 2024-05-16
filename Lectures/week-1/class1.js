// let firstName = "Ram Mohan";
// let age = 19;
// let isMarried = false;

// console.log("This person's name is " + firstName + " and their age is " + age);

// if(isMarried == true) {
//     console.log(firstName + " is married.")
// } else{
//     console.log(firstName + " is not married.")
// }

// let answer = 0;
// for(let i = 0; i <= 1000; i++) {
//     answer = answer + i;
// }

// console.log(answer);

// const ages = [21, 22, 23, 24, 25];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i]%2 == 0) {
//         console.log(ages[i]);
//     }
// }

// OBJECTS

// const users1 = {                 //declaring an object.
//     firstName: "Ram Mohan",
//     gender: "Male"
// }

// console.log(users1["firstName"]);

// const allUsers = [{
//     firstName: "Ram",
//     gender: "male"
// }, {
//     firstName: "Rishi",
//     gender: "male"    
// }, {
//     firstName: "Ridhi",
//     gender: "female"
// }];

// for(let i = 0; i < allUsers.length; i++) {
//     if(allUsers[i]["gender"] == "male") {
//         console.log(allUsers[i]["firstName"]);
//     }
// }

// FUNCTIONS and CALL BACKS

// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is: " + data);
// }

// // Only allowed to call one function after this
// // How to displayResult of a sum?

// const ans = sum(3, 7, displayResult);
// displayResult(sum(2,8)); (another way without modifying sum function)

function calculateArithmetic(a, b, arithmeticFinalFunction) {  
    const ans = arithmeticFinalFunction(a, b);
    return ans;
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const value = calculateArithmetic(4, 6, sum);
console.log(value);




