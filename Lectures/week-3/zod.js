import express from "express";
import zod from 'zod';

const app = express();
const port = 4000;
const schema = zod.array(zod.number())

app.use(express.json())

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if(!response.success) {
        res.status(411).json({
            msg: "Input is Invalid"
        })
    } else {
        res.send({
            response
        })
    }
    
})

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}!`);
})

// function validateInput(obj) {
//     const schema = zod.object({
//         email: zod.string().email(),
//         password: zod.string().min(8)
//     })

//     const response = schema.safeParse(obj)
//     console.log(response);
// }

// validateInput({
//     email: "ram@google.com",
//     password: "12345679"
// })