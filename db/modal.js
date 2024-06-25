const mongoose = require("mongoose");
const todoschema = new mongoose.Schema({
    task : {
        type : String,
        required : true,
    }
    
})
const Todo = new mongoose.model("todo",todoschema);
module.exports =Todo;