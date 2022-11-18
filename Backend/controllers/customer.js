import Customer from '../Models/customerschema.js'; 
import Joi from 'joi'
import User from '../Models/Adminschema.js';
import bcrypt from 'bcrypt'

const saltRounds=10;
const schema = Joi.object({
       email:Joi.string().required(),
       password:Joi.string().required(),
       name: Joi.string().min(5).max(50).required(),
       isAdmin: Joi. boolean(),
       phone: Joi.string().min(5).max(50).required()
   
});

  const ges=async (req, res) => {
  const customers = await Customer.find().sort('name');
 return res.send(customers);
};

///  customer  register

const user=async(req,res)=>{
  
  let name=req.body.name
        let email=req.body.email
        let password=req.body.password
        let phone=req.body.phone
    
        try {
            const salt_routes=10;
            bcrypt.hash(password,salt_routes,async function(err,hash){
                const reg= await Customer.insertMany({
                    name,
                    email,
                    password:hash,
                    phone
                })
                if (reg) {
                    return  res.send(reg)
                  }
            })
            
           
        } catch (error) {
         return res.send(error.message)  
        }
}




export{ges,user}