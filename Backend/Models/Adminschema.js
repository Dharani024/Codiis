import mongoose from "mongoose"
// import User from "../controller/controller.js"

const userSchema  = new mongoose.Schema({
// const userSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true,
        max:8
    },
    phone:{
        type:Number,
        required:true
    },
    isAdmin:{
      type: Boolean,
      default: true
    }
})
const User = mongoose.model('User', userSchema)
 export default User;