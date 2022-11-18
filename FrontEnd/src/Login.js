
import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useContext } from 'react'
import AuthContext from './context'
import { useNavigate } from 'react-router-dom'
export default function Login(){
  const head=useContext(AuthContext)
  const navigate=useNavigate()
const[values,setValues]=useState({
email:'',
password:"",
})

async function loginserver(){
  await axios.post('http://localhost:2000/api/login_user',{
    email:values.email,
    password:values.password
   }).then(res=>{console.log(res.data)
    head.setToken(res.data.token)
    head.setUser(res.data.user)
    if(res.data.user.isAdmin) return navigate('/UploadForm')
    return navigate('/customerhome')
  })
}



const handleChange=(e)=>{
    e.preventDefault()
    console.log(values)
    loginserver()
}


    return(
      <>
     
      <form>
      <h1>LonginScreen</h1>
        <label>
        <input type="email" placeholder='email' onChange={(e)=>setValues({...values,email:e.target.value}) }></input>
          <br></br>
        <input type="password" placeholder='password' onChange={(e)=>setValues({...values,password:e.target.value})}></input>  
        <button className='login' onClick={handleChange}> Login</button>
        </label> 
        </form>
        </>
        )
}




