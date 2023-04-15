import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineMail } from "react-icons/ai";
import { BiShieldQuarter } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Login.css'

import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';

function Signup() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

    const navigate = useNavigate();
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password , username)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/log")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }





  return (
    <div className='container form'>
    <h2 className="text-center m-1 p-1 loginText">SIGN UP</h2>
    <p className='text-center loginp'>Join the Crew!</p>

   <Form className='d-flex flex-column p-4'>
    <div className=' d-flex'>     
         <h3 className='mt-4'><BiUserCircle/>  </h3>
         <input className='text-center m-2 mt-4' type="text" name="name" id="name" value={username} required onChange={(e) => setUsername(e.target.value)}  placeholder='Choose a Username'/> 
    </div>
    <div className=' d-flex'>     
         <h3 className='mt-4'><AiOutlineMail/>  </h3>
         <input className='text-center m-2 mt-3' type="email" name="mail" id="mail" value={email} required onChange={(e) => setEmail(e.target.value)}  placeholder='Enter your Email'/> 
    </div>

    <div className='d-flex'>
        <h3 className='mt-3'><BiShieldQuarter/> </h3>
        <input className='text-center m-2 mt-3' type="password" name="password" id="password" value={password} required onChange={(e) => setPassword(e.target.value)}  placeholder='Shhh!!! Password'/>
    </div>
    <Button type='submit' onClick={onSubmit}  className="btn btn-dark mt-4">Submit</Button>
   </Form>

<h4 className='text-center loginp'>Already Joined the Treasure Hunt?</h4>
<p className='text-center loginp'><Link to='/log'>Log In!</Link></p>
    </div>
  )
}

export default Signup