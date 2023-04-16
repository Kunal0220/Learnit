import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineMail } from "react-icons/ai";
import { BiShieldQuarter } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Login.css'

import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/teacher")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
     
  }
  return (
    <div className='container form'>
    <h2 className="text-center m-1 p-1 loginText">LOGIN</h2>
    <p className='text-center loginp'>Welcome Back Captain!</p>

   <Form className='d-flex flex-column p-4'>
    <div className=' d-flex'>     
         <h3 className='mt-4'><AiOutlineMail/>  </h3>
         <input className='text-center m-2 mt-4' type="email" name="mail" id="mail" required  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email'/> 
    </div>

    <div className='d-flex'>
        <h3 className='mt-3'><BiShieldQuarter/> </h3>
        <input className='text-center m-2 mt-3' type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} required placeholder='Shhh!!! Password'/>
    </div>
    <Button className="btn btn-dark mt-4" onClick={onLogin}  >Submit</Button>
   </Form>

<h4 className='text-center loginp'>Haven't Applied yet to be a part of this Mission??</h4>
<p className='text-center loginp'><Link to='/sign'>Sign Up Now!</Link></p>
    </div>
  )
}

export default Login