// Generics

// type Input = number | string;

// function firstElement(arr: Input[]) { // better solution is arr: number[] | string[]
//     return arr[0]
// }

// const value = firstElement(["ram", "mohan"])
// console.log(value);


// Generics syntax
function identity<T>(arg: T) { // does the job of two diff func using generic
    return arg;
}

// letting user define the type while calling the function
let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// Original problem
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["ram Mohan", "ramanSingh"]);
console.log(el.toUpperCase())
