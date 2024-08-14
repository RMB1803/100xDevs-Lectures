const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://rammohanofficial03:ram18032004@cluster0.nodncml.mongodb.net/to-do_app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const ToDo = mongoose.model("ToDo", todoSchema)

module.exports = {
    ToDo
}