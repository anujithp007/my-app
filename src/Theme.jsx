import React, { useContext, useState } from 'react'
import {Themecontext} from './Themecont'



const Theme = () => {

const themeuse=useContext(Themecontext)
const{theme,toggleTheme}=themeuse
console.log(theme);

const themechange={
    backgroundColor:theme ? 'white':'black',
    color:theme ? 'black':'white'
}


  return (
    <div style={themechange}>
     <button onClick={toggleTheme}>click</button>
    </div>
  )
}

export default Theme
