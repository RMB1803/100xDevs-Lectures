import express from "express"
import bodyParser from "body-parser"
const app = express()
const port = 3000

// app.get("/route-handler", function(req, res) {
//   res.json({
//     name: "Ram Mohan",
//     age: 19
//   })
// })

app.use(bodyParser.json({}));

// app.post('/conversations', (req, res) => {
//   console.log(req.body)
//   res.send({
//     msg: "2 + 2 = 4"
//   })
// })

app.post('/', function(req, res) {
  console.log(req.body)
  res.send('Hello World!')
})

app.listen(port)