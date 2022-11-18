import React from 'react'
import { useNavigate } from 'react-router-dom'
import Plan from './Plan'
import UploadFormList from './components/UploadList'
function Customer(){
const navigate=useNavigate()
return(
    <>
    <UploadFormList />
 <div onClick={()=>{
        navigate('/plan')
    }}>
        <h1>Plans</h1>
    </div>
    {/* <Plan />  */}
    </>
)
}
export default Customer