const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://21bd1a1283itb:bAn7v6pWoOZxhJRa@cluster0.xyelrxe.mongodb.net/TODODB");
//mongodb+srv://21bd1a1283itb:bAn7v6pWoOZxhJRa@cluster0.xyelrxe.mongodb.net/
const todoSchema = mongoose.Schema({
    title : String , 
    description : String ,
    completed : Boolean
}) 

const todo = mongoose.model('todos' , todoSchema)
// you use todo variable to interact w db eg=> todo.find , .create etc
module.exports = {
    todo
};