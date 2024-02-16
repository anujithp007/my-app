import React, { useEffect, useState } from 'react'
import './reg.css'
import { useDispatch } from 'react-redux'
import { fetchdata } from './slice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import axios from 'axios';


const Update = () => {
    const {id}=useParams()

const [data,setData]=useState({})
const [img,setImg]=useState()
const dispatch=useDispatch()
const navigate=useNavigate()
const [viewdata,setViewData]=useState('')
          

const handleChange=(e)=>{
  setData({ ...data, [e.target.name]: e.target.value })

}
  const handleSubmit= async (e)=>{
    e.preventDefault()
    setData(data)
    
    console.log(data);
    dispatch((fetchdata({...data,['image']:img})))
    if (data.username && data.email && data.password && data.dob && data.role) {
        let response= await axios.put(`http://localhost:4000/update/${id}`,data)
        console.log('regiter',response);
        // navigate('/login')
        toast.success('Registration submitted');
    } else {
        toast.error('Please fill in all the fields');
    } 
   
    
  }
useEffect(()=>{
    let fetchdata= async()=>{
        let response=await axios.get(`http://localhost:4000/Findone/${id}`)
         setViewData(response.data)
        console.log(response);
    }
    fetchdata()
},[])

  return (
    <div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{/* Same as */}
<ToastContainer />
      <div className='main-container'>

<form onSubmit={handleSubmit} className='main-form' >
  <h1>Register </h1>
  <p>kindly fill the form</p>
  <label>Username</label> <br />
  <input onChange={handleChange}  type="text" name='username' placeholder={viewdata.username} /><br />
  <label>Email</label><br />
  <input onChange={handleChange}  type="email" name='email'  placeholder={viewdata.email} /><br />
  <label >Password</label><br />
  <input onChange={handleChange}  type="password" name='password' placeholder={viewdata.password} /><br />
  <label>Date Of Birth</label><br />
  <input onChange={handleChange}  type="date" name='dob'placeholder='enter your birthday' /><br />
  <FileBase64
        
        onDone={(res)=>setImg(res.base64)  } />
  <select onChange={handleChange} name='role'>
            <option value=''>Select Role</option>
            <option value='teacher'>Teacher</option>
            <option value='student'>Student</option>
            <option value='admin'>Admin</option>

          </select>
  <input type="submit" className='sub' />

  <p className='pp'>already have an account? <span>please login</span></p>
</form>
</div>

    </div>
  )
}

export default Update
