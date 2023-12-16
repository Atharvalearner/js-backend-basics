import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        unique : true,
    },
    email : {
        lowercase: true,
        required: true,
        type: String,
        unique: true,
    },
    password : {
        type: String,
        required: true,
    }
},
{timestamps: true})

export const User = mongoose.model("User",userSchema)