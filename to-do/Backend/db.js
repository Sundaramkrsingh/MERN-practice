const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sundaramsinghsdnr:Sundaram123@sundaram.nvvk5jk.mongodb.net/ToDo_app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}