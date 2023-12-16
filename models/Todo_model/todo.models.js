import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    content: String,
    heading : String,
    checkbox: Boolean,
    validate: Boolean,
    todoNumber: Number
},{timestamps});
export const Todo = mongoose.model("Todo",todoSchema)