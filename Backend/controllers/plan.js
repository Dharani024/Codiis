import Plan from "../Models/plan.js";
import Customer from "../Models/customerschema.js";

const getplans=async(req,res)=>{
    try {
        const data=await Plan.find()
        if(data.length<=0) return res.send('No Plans')
        return res.send(data)
    } catch (error) {
        return res.send(error.message)
    }
}
const addplan=async(req,res)=>{
    try {
        const data=await Plan.insertMany({
            price:req.body.price,
            validity:req.body.validity,
            description:req.body.description,
            planId:req.body.planId
        })
        if(data) return res.send('Plan Added Successfully')
    } catch (error) {
        return res.send(error.message)
    }
}

const buyplan=async(req,res)=>{
let _id=req.user._id
let planId=req.body.planId
try {
    const plan=await Plan.findOne({planId})
    if(plan){
        const data=await Customer.updateOne({_id},{$set:{
            isSubscribed:true,
            plan
        }})
        if(data) return res.send('Subscribed Successfully')
    }
} catch (error) {
    return res.send(error.message)
}
}

export {getplans,addplan,buyplan}