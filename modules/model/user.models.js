import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required: true,
        Boolean: true
    },
    email : {
        required : true,
        unique : true,
        type : String
    }
},{timestamps : true}
)
export const User = mongoose.model("User",userSchema)