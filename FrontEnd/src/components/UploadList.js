import React from "react";
import {BACKEND_URI} from '../config/constants'
import { useContext } from 'react'
import AuthContext from '../context'
import { useNavigate } from 'react-router-dom'

const UploadFormList=({medias})=>{
    const head=useContext(AuthContext)
    const navigate=useNavigate()
    return(
   <>
  <div className="row">
<div className='col-md-12'>
<table className="table table-bordered">
<thead>
<tr>
<th width='200'>Name</th>
<th>Video</th>
<th><button onClick={()=>{
    head.setToken(null)
    head.setUser(null)
    navigate('/')
    }}>Log Out</button></th>
</tr>
</thead>
<tbody>
    {medias&&medias.map(media=>{
        return(
            <tr>
                <td>{media.name}</td>
                <td>{media.videos.map((video)=>{
                    return(
                        <video  preload="auto "
                        width='320'
                        height='240'
                        controls>
                            <source src={`${BACKEND_URI}${video}`}/>;your browser does not support the video tag
                        </video>
                    )
                })}</td>
            </tr>
        )
    })}
</tbody>
</table>
    </div>
  </div>
   </>
    )
}

export default UploadFormList