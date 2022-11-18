import express from 'express' 
import { create, getAll } from '../controllers/mediacontroller.js'
import multer from 'multer'
import fs from 'fs'
import path from 'path'

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        if(!fs.existsSync('public')){
            fs.mkdirSync('public')
        }
     if(!fs.existsSync('public/videos')){
        fs.mkdirSync('public/videos')
     }
     cb(null,'public/videos')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

const upload=multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        var ext=path.extname(file.originalname)

        if(ext!== '.mkv'&& ext !=='.mp4'){
        return cb(new Error('only video are alllowed'))
    }
    cb(null,true)
    }
})
const router = express.Router();

///get all media 

router.get('/all',getAll)

//post create new media
router.post('/create',upload.fields([
    {
    name:"videos",
    maxCount:5
    },
]),create
)

export default router