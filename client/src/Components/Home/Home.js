import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
        <h3 className="text-center m-3 ">Learn It welcomes you to this exciting treasure hunt where you learn by doing and in return we offer you exciting badges and experience points
        which can be redeemed as Amazon Gift Cards and other Coupons.</h3>
        <img className='logo' src={require('../images/logo.png')} alt="" />
        <h3 className="text-center m-3 homePageLastText">So are ready to become the JACK SPARROW of the ocean of Knowledge??</h3>

        <Link to='/sign'><Button  className="btn btn-lg btn-dark homeButton ">Join Us</Button></Link>
    </div>
  )
}

export default Home