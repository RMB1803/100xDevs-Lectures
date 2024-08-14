const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { ToDo } = require("./db")
const cors = require("cors")

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

app.post("/todo", async (req, res) => {
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs!"
        })
        return
    }

    // add to MongoDB
    await ToDo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await ToDo.find({})

    res.json({
        todos
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs!"
        })
        return
    }

    await ToDo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(port)