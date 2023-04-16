import React from 'react'
import { BsFillHouseDoorFill } from "react-icons/bs";
import './Teacher.css'
import TeacherStats from './TeacherStats';
import { BsCashCoin } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
function Teacher() {
  return (
    <div className='teacher'>
              <h4 className='m-4'>Hello Tutor</h4>
      <div className='dashboardText'>
       <h4 className='teacherDashboard d-flex '> <h5> <BsFillHouseDoorFill /></h5> Dashboard  </h4>  
      </div>

    <div className="m-3 p-5 stats d-flex justify-content-between">
      
      <TeacherStats title={'Weekly Sales'} summary={'$40'} update={'Increased by 10%'}  bcolor={'#0A2647'} />
      <TeacherStats title={'Total Students'} summary={400} update={'30 new added in the last week'}  bcolor={'#144272'}  />
      <TeacherStats title={'Visitors This Week'}  summary={30}     update={'Increased by 2%'}   bcolor={'#205295'}   />
    </div>

      <h4 className='m-4'>Your Most Trending Courses</h4>
    <div className='m-4 d-flex justify-content-between'>
        <div className='courseDetails'>
        <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
         <img className='leaningPic' src={require('../images/crypt.jpg')} alt="" />
         <h6>Blockchain & Cryptography </h6>
         </a>
        </div>

        <div className='courseDetails'>
        <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
          <img className='leaningPic' src={require('../images/stats.jpg')} alt="" />
          <h6>DataScience : A step further</h6>
          </a>
        </div>

        <div className='courseDetails'>
          <a className='coursesLink' href="https://www.udemy.com/" target='__blank'>
            
          <img className='leaningPic' src={require('../images/web.jpg')} alt="" />
          <h6> Full Stack Web Development 2023</h6>
          </a>
        </div>
        
    </div>



<div className="d-flex justify-content-evenly">

<div>
    <h4 className="mx-4 mt-3">Your Income</h4>

    <div className="container income text-center">
    <p className='text-start mt-2 px-3 pt-1' >--You total withdrawable amount is <span>$4298</span>  </p>
    <p className='text-start px-3'>--Total tax payable is <span> $859.6 (20%)</span></p>
    <p className='text-start px-3'>--Total in hand left would be<span> $3438.4</span></p>
    <h6>Proceed to checkout : </h6> <h1> <a href="https://www.paypal.com/in/home" target='__blank'> <BsCashCoin/></a></h1>
    </div>
</div>


<div>
    <h4 className="m-4">Create A New Course</h4>

    <div className="py-2 d-flex newCourse">
    <input type="text" placeholder='Title of the course' />
    <input type="text" placeholder='Description'/>
    <input type="text" placeholder='Number of lectures'/>
    <input type="text" placeholder='Price'/>
    <Button className="btn btn-dark">Create</Button>
    </div>
    </div>
</div>

</div>



  )
}

export default Teacher