import React, { useMemo, useState } from 'react'

const Memo = () => {

const[value1,setvalue1]=useState(0)
const [value2,setvalue2]=useState(0)

const handleChange1=(e)=>{
    setvalue1(parseInt(e.target.value))
}
const handleChange2=(e)=>{
    setvalue2(parseInt(e.target.value))
}
const sum=useMemo(()=>{
    return value1+value2
},[value1,value2])



  return (


    <div>
        <label >Enter the first value :</label>
      <input type="number" value={value1} onChange={handleChange1} />
      <label >Enter the Second value:</label>
      <input type="number" value={value2} onChange={handleChange2} />
      <h1>the sum of {value1}+{value2} = {sum}</h1>
    </div>
    
  )
}

export default Memo
