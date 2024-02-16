import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const A = () => {
  const {id}=useParams()
  const [data,setData]=useState('')
  useEffect(()=>{
    let fetchdata= async()=>{
      let response=await axios.get(`http://localhost:4000/Findone/${id}`)
      console.log(response.data);
      setData(response.data)
    }
    fetchdata()
  },[])
  return (
    <div className='bg-black text-white '>
      <h1>{data.username}</h1>
      <h1>{data.email}</h1>
      <h1>{data.password}</h1>
      <h1>{data.dob}</h1>
      <h1>{data.role}</h1>
    
    
    </div>
  )
}

export default A  
