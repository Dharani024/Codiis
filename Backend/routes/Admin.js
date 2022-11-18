import{get,users,updata,delete_user, login, register}from "../controllers/Admin.js"
import express from "express";
// import { get } from "http";
const route=express();

route.get('/getall_user',get)
route.get('/getbyid_user',users)
route.post('/reg',register)
route.put('/update_User',updata)
route.delete('/delete_user',delete_user)
route.post('/login_user',login)
// route.post('/video',uploadVideo)



export default route