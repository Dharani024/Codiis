// import { string } from "joi";
import mongoose from "mongoose"
// import User from "../controller/controller.js"

const userSchema  = new mongoose.Schema({
// const userSchema=mongoose.Schema({
    price: {
        type: String,
        required: true
      },
      validity: {
        type: String,
        required: true
      },
      description: {
        type: String,
        
    },
    planId:{
        type:String,
        required:true
    }
})
const Plan = mongoose.model('Plan', userSchema)
 export default Plan;