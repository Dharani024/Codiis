import './App.css';
import Register from './Register';
import Login from './Login';
import Nav from './nav'
import { HashRouter, Route, Routes }from 'react-router-dom'
import UploadForm from './components/UploadForm';
import UploadFormList from './components/UploadList';
import axios from 'axios';
import { useState ,useEffect} from 'react';
import AuthContext from './context'
import Customer from './CustomerHome';
import Plan from './Plan'

function App() {
const[medias,setMedias]=useState([])
useEffect(()=>{
getAllMedias()
},[])

  const getAllMedias=()=>{
  axios.get('http://localhost:2000/api/media/all')
  .then(result=>{
 setMedias(result.data)
  }).catch((error)=>{
setMedias([])
console.log(error)
alert('Error happened!')
  })
  }
 const [token,setToken]=useState()
 const[user,setUser]=useState()
    
  return (
    <div className='App'>
    <HashRouter>
      {/* <Nav/> */}
      <AuthContext.Provider value={{token,setToken,user,setUser}}>
    <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/UploadForm" element={<UploadForm/>}/>
    <Route path="/UploadFormList" element={<UploadFormList medias={medias}/>}/>
    <Route path="/customerhome" element={<Customer/>}/>
    {/* <Route path="/plan" element={<Plan />}/> */}
    
    {/* <Route path="/" element={<CalculatorKey/>}/> */}
  </Routes>
  </AuthContext.Provider>
  </HashRouter>
    </div>
  );
}

export default App;
