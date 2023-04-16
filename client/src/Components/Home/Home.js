import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
function Home() {
  return (
    <div>
        <h3 className="text-center m-3 ">Learn It welcomes you to this exciting treasure hunt where you learn by doing and in return we offer you exciting badges andexperience points
        which can be redeemed as Amazon Gift Cards and other Coupons.</h3>
        <img className='logo' src={require('../images/logo.png')} alt="" />
        <h3 className="text-center m-3 ">So are ready to become to become the JACK SPARROW of the ocean of Knowledge??</h3>

        <Button className="btn btn-lg btn-dark homeButton ">Join Us</Button>
    </div>
  )
}

export default Home