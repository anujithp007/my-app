import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import { Themecontext } from './Themecont';

const Navi = () => {
const navuse=useContext(Themecontext)
const {theme,toggleTheme}=navuse
let themechanger={
  backgroundColor:theme ? 'white' : 'black',
  color:theme ? 'black' : 'white'
}


  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
            <Link to="/registration">Reg</Link>
            <Link  to="/login">Login</Link>
            <button onClick={toggleTheme}>Dark mode</button>
            
          </Nav>
          
        </Container>
      </Navbar>
      <div style={themechanger} >

      <Outlet/>
      </div>
    </div>
  )
}

export default Navi
