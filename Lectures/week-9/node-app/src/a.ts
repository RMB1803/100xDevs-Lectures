type User = {
	firstName: string;
	lastName: string;
	age: number
}

// // Union using type
// type StringOrNumber = string | number;

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101); // ID: 101
// printId("202"); // ID: 202  

// // Intersection using type
// type Employee = {
//     name: string;
//     startDate: Date;
// };
  
//   type Manager = {
//     name: string;
//     department: string;
// };
  
// type TeamLead = Employee & Manager;
  
// const teamLead: TeamLead = {
//     name: "ram",
//     startDate: new Date(),
//     department: "Software developer"
// };
  
// console.log(teamLead);

// Arrays in TS
// function maxValue(arr: number[]) {
//     let max: number = 0

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     return max
// }

// console.log(maxValue([11, 2, 3, 7, 9, 4]));

// function isLegal(users: User[]) {
//     return users.filter(user => user.age >= 18)
// }

// const users: User[] = [{
//     firstName: "ram",
//     lastName: "mohan",
//     age: 20
// }, {
//     firstName: "Raman",
//     lastName: "Singh",
//     age: 16
// }]

// console.log(isLegal(users));

// Enums
enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)
console.log(Direction.Up);
console.log(Direction.Down);

// usecase in Express

// const app = express()

// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/", (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 	res.status(ResponseStatus.Success).json({});
// })


