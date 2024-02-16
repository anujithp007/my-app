import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Axios1 = () => {
  const[data,setData]=useState([''])
  const [refresh,setRefresh]=useState(false)
  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get('http://localhost:4000/find')
      console.log(response);
      setData(response.data)
      
    }
    fetchdata()
  },[refresh])
  console.log(data);
    let handleDelete=async(id)=>{
      console.log(id);
      setRefresh(!refresh)
      let response= await axios.delete(`http://localhost:4000/deleteone/${id}`)
      console.log(response);
    }
  return (
    <div className='d-flex gap-3 mt-3 flex-wrap  '>
        {data.map((item)=>(
          <div className='bg-danger text-white'>
          <h1>{ item.username}</h1>
          <h1>{item.password}</h1>
          <h1>{item.email}</h1>
          <h1>{item.dob}</h1>
          <h1>{item.role}</h1>
          <h1>{item._id}</h1>
         <Link to={`/update/${item._id}`}> <button>Update</button></Link>
         <button onClick={()=>{
          handleDelete(item._id)
         }}>Delete</button>
          </div>

        ))}
     
    </div>
  )
}

export default Axios1
