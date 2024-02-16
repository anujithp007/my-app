import React, { useState } from 'react'
import './login.css'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'


const Login = () => {
  const [data2,setData2]=useState({})
  // const data=useSelector((state)=>state.datafetch.value)
  const navigate=useNavigate()
  

  const logChange=(e)=>{
    setData2({...data2,[e.target.name]:e.target.value})
  }
  const logsub= async(e)=>{
    e.preventDefault()
    // setData2(data2)
    try {
    let response=await axios.post('http://localhost:4000/login',data2)
    console.log(response);

     if(response.data){
       if(response.data.role=='admin'){
         navigate(`/a/${response.data._id}`)
        }
        else if(response.data.role=='student'){
          navigate('/b')

        }
        else if(response.data.role=='teacher'){
          navigate('/c')
        }
      }
     
      
    }
  
  catch(err){
    console.log(err);
    toast.error('Invalid Username')
  }
    
  }
  return (
    <div>
    <ToastContainer/>
      <form onSubmit={logsub} className='log-form' action=""> <br/>
        <input onChange={logChange} name='email'  type="email" placeholder='enter the email'/>  <br/>
        <input onChange={logChange} name='password' type="password" placeholder='enter the password' /> <br />
        <input type="submit" name="" id="" />
      </form>
    </div>
  )
}

export default Login
