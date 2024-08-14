import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
const jwtPassword = "123456";

const app = express()
const port = 4000
app.use(express.json())

mongoose.connect(
  "mongodb+srv://rammohanofficial03:ram18032004@cluster0.nodncml.mongodb.net/user_app"
);

// Declaring a mongoose model and the Schema
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String
})

app.post("/signup", async (req, res) => {
  const name = req.body.name
  const username = req.body.username
  const password = req.body.password

  const existingUser = await User.findOne({email: username})
  if(existingUser) {
    return res.status(400).send("User already exists!")
  }

  const user = new User({
    name: name,
    email: username,
    password: password
  })

  user.save()

  res.json({
    "msg": "User created Successfully"
  })
})

app.listen(port)

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   password: String,
// });

// const app = express();
// app.use(express.json());

// function userExists(username, password) {
//   // should check in the database
  
// }

// app.post("/signin", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username from the database
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000);