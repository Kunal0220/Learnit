import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineMail } from "react-icons/ai";
import { BiShieldQuarter } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Login.css'
function Login() {
  return (
    <div className='container form'>
    <h2 className="text-center m-1 p-1 loginText">LOGIN</h2>
    <p className='text-center loginp'>Welcome Back Captain!</p>

   <Form className='d-flex flex-column p-4'>
    <div className=' d-flex'>     
         <h3 className='mt-4'><AiOutlineMail/>  </h3>
         <input className='text-center m-2 mt-4' type="email" name="mail" id="mail"  placeholder='Enter your Email'/> 
    </div>

    <div className='d-flex'>
        <h3 className='mt-3'><BiShieldQuarter/> </h3>
        <input className='text-center m-2 mt-3' type="password" name="password" id="password" placeholder='Shhh!!! Password'/>
    </div>
    <Button className="btn btn-dark mt-4">Submit</Button>
   </Form>

<h4 className='text-center loginp'>Haven't Applied yet to be a part of this Mission??</h4>
<p className='text-center loginp'><Link to='/sign'>Sign Up Now!</Link></p>
    </div>
  )
}

export default Login