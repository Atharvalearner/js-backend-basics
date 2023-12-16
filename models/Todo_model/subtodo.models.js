import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({
    name: String,
    date: date,
    checkbox: Boolean,
    complete: Boolean
},{timestamps});
export const SubTodo = mongoose.model("SubTodo",subTodoSchema)