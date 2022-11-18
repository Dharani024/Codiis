import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser';
import admin from "./routes/Admin.js"
import customer from './routes/customer.js'
import mediaRoutes from './routes/media.js'
import plan from './routes/plan.js'
// import Customer from "./model/customerschema.js";
// import path from "path";
// import Joi from "joi";
import path from 'path'
import mongoose from "mongoose";

const __dirname=path.resolve();
const App=express();
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:true}))
App.use(bodyParser.text())
App.use(cors())


mongoose.connect('mongodb://localhost/user')
.then(()=>console.log('db connected'))
.catch((e)=>console.log('error'))

App.use('/api',plan)
App.use('/api',admin) 
App.use('/api/customers', customer);
App.use('/api/media',mediaRoutes)
App.use('/public',express.static(path.join(__dirname,'public')))


App.listen(2000,()=>{console.log("server is running")})