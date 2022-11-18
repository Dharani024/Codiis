import Media from '../Models/media.js'

const getAll=async(req,res)=>{
    try {
        const media=await Media.find();
        res.send(media)

    } catch (error) {
        console.log(error)
    }
};
 //Backendurl/public/videos/file_name.mp4
const create=async(req,res)=>{
    const{name}=req.body;
    let videosPaths=[]
    console.log(req.body);

if (Array.isArray(req.files.videos) && req.files.videos.length>0){
    for(let video of req.files.videos){
        videosPaths.push('/'+video.path)
    }
}
try {
    const createMedia=await Media.create({
        name,
        videos:videosPaths
    })
    res.send({message:"Media created successfully",createMedia})
} catch (error) {
    console.log(error);
       
}
}
export{getAll,create}