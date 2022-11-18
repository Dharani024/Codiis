
import React, { useState } from "react";
import axios from "axios";
import { useContext } from 'react'
import AuthContext from '../context'
import { useNavigate } from 'react-router-dom'

const UploadForm=()=>{
    const head=useContext(AuthContext)
    const navigate=useNavigate()
const[name,setName]=useState('')
const[videos,setVideos]=useState([])
const hadleSubmit=(e)=>{
    e.preventDefault()

    let formdata=new FormData();
    for(let key in videos){
        formdata.append('videos',videos[key])
    }
    formdata.append("name",name)
    axios.post('http://localhost:2000/api/media/create',formdata)
    .then(success=>{
       alert('Submitted successfully')
       })
       .catch((error)=>{
        console.log(error)
        alert('Error happened')
       })
}
    return(
   <>
   
   <form onSubmit={hadleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type='text' name='name' id='name' className="form-control" onChange={(e)=>setName(e.target.value)}></input>
    </div>
    <div className="form-group">
    <label htmlFor="videos">Upload Videos</label>
    <input type='file' name='videos' id='videos' multiple className="form-control" accept=".mp4,.mkv" onChange={(e)=>setVideos(e.target.files)}></input>
    </div>
    <button type='submit' className="btn btn-primary mt-2">Submit</button>
    
   </form>
   <button onClick={()=>{
    head.setToken(null)
    head.setUser(null)
    navigate('/')
    }} >Logout</button>

   </>
    )
}

export default UploadForm