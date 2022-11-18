import mongoose from "mongoose"

const MediaSchema = mongoose.model('Media',new mongoose.Schema({
    name:{
    type:String,
    required:true,
    },
    videos:[{
    type:String,
     }],
    },
  { timestamps: true,
}
))

export default MediaSchema


