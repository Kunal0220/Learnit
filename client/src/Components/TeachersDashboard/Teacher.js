import React from 'react'
import { BsFillHouseDoorFill } from "react-icons/bs";
import './Teacher.css'
import TeacherStats from './TeacherStats';
function Teacher() {
  return (
    <div>
              <h4 className='m-4'>Hello User</h4>
      <div>
       <h4 className='teacherDashboard d-flex'> <h5> <BsFillHouseDoorFill /></h5> Dashboard  </h4>  
      </div>

    <div className="m-3 p-5 stats d-flex justify-content-between">
      
      <TeacherStats title={'Weekly Sales'} summary={'$40'} update={'Increased by 10%'}  bcolor={'#0A2647'} />
      <TeacherStats title={'Total Students'} summary={400} update={'30 new added in the last week'}  bcolor={'#144272'}  />
      <TeacherStats title={'Visitors'}  summary={30}     update={'Increased by 2%'}   bcolor={'#205295'}   />
    </div>




    </div>
  )
}

export default Teacher