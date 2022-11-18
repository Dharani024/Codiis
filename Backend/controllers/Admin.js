
import User from "../Models/Adminschema.js"
import Customer from "../Models/customerschema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const saltRounds=10;

const get=(_req,res)=>{
    async function getUser(){
              
                try {
                   var existingUser=await User.find({},{})
  
                  return res.send(existingUser);
                   }
               catch (error) {
                    console.log(error.message)
                }
     }
     getUser();
   }  
//getting data by particular number
const users=(req,res)=>{
   var email=req.body.email;
       async function getUserbyid(){
                
                   try {
                      var existingUser=await User.find({email:email},{})
    
                     return  res.send(existingUser);
                      }
                  catch (error) {
                       console.log(error.message)
                   }
        }
        getUserbyid();
      }  
  //register Admin
      const register=async(req,res)=>{
        let name=req.body.name
        let email=req.body.email
        let password=req.body.password
        let phone=req.body.phone
    
        try {
            const salt_routes=10;
            bcrypt.hash(password,salt_routes,async function(err,hash){
                const reg= await User.insertMany({
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
    ///login both for users

    const login=async(req,res)=>{
      try {
          const find_email= await User.findOne({email:req.body.email})
          const find_email1= await Customer.findOne({email:req.body.email})
          
          if(find_email){
              // if(find_email.password===req.body.password) return res.send('Login Successfull')
           bcrypt.compare(req.body.password,find_email.password,async function(err,result){
                 
           if(result ==true){
            const token= jwt.sign({_id:find_email._id},''+process.env.SECRETKEY)
             return res.send({token:token,user:find_email})
             //  return res.send('Login success')
                  }
             return res.send('incorrect password')
              })
              
          }
          else if(find_email1){
          // if(find_email.password===req.body.password) return res.send('Login Successfull')
          bcrypt.compare(req.body.password,find_email1.password,async function(err,result){
             
              if(result ==true){
                const token= jwt.sign({_id:find_email1._id},''+process.env.SECRETKEY)
                return res.send({token:token,user:find_email1})
                  //  return res.send('Login success')
              }
              return res.send('incorrect password')
          })
          
      }
          else return res.send('There is no Email')
      } catch (error) {
          return res.send(error.message)
      }
  }
//updating data in a collection by id
const updata=(req,res)=>{
       var newData={
               name:req.body.name,
               email:req.body.email,
               phone:req.body.phone,
               password:req.body.password      
               }
        async function UpdateUser(){
                   // const g_id=parseInt(req.body.genresid)
                   // console.log(g_id)
                    try {
                        var existingUser=await User.findOne({ email: newData.email })
                        console.log(existingUser);
                       if(existingUser){
                           let u_data=await User.updateOne({email:newData.email},{$set:{phone:req.body.phone   }})
                          return  res.send(u_data)

                       }
                       if(!existingUser){
                           // let result=Genres.updateOne([newData]);
                         return  res.send("user doesn't exist. So you cant update the data")
                       }                      
      
                       }
                   catch (error) {
                        console.log(error.message)
                    }
         }
         UpdateUser();
       }  

//deleting data from the collection by id
const delete_user=(req,res)=>{
           var newData={
               name:req.body.name,
               email:req.body.email,
               phone:req.body.phone,
               password:req.body.password      
                   }
            async function deleteUser(){
                       // const g_id=parseInt(req.body.genresid)
                       // console.log(g_id)
                        try {
                            var existingUser=await User.findOne({ email: newData.email })
                            console.log(existingUser);
                           if(!existingUser){
                              return res.send("user doesn't exits")
                           }
                           if(existingUser){
                               let ind= await User.deleteOne({email: newData.email })
                               return  res.send(ind)
                           }                        
          
                       }
                       catch (error) {
                            console.log(error.message)
                        }
             }
             deleteUser();
           }  

          //  const uploadVideo=async(req,res)=>{
          //   uploadVideo(req,res,(err)=>{
          //     if(err){
          //       res.status(400).send('')
          //     }
          //     console.log()
          //   })
          // }

  
export{get,users,updata,delete_user,login,register,}