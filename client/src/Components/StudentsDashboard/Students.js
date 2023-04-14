import React from 'react'
import Badge from 'react-bootstrap/Badge';



import './Students.css'
import Course from '../Courses/Course';
import LeaderBoard from './LeaderBoard';
import Ex from './Ex';

function Students() {
  return (
    <div>
        <Ex exp={40}/>
        <h2 className= 'courseHeading m-4 text-start py-3 d-flex '>
            Enrolled Courses <h6><Badge bg="secondary">4</Badge></h6>
        </h2>


        <div className="d-flex courseMain">
            
        <div className='courses d-flex justify-content-space flex-row'>
             <Course title={'Machine Learning'} 
                 bcolor={'#569DAA'} 
                 color={'aliceblue'}
                 content={'12 hours on demand video lectures which covers everything from basics of python to advance tools which are being used in industries today.'}
                 price={40}
                 per={69.7}
                 />
             <Course title={'Web Development'} 
                 bcolor={'#1A5F7A'} 
                 color={'aliceblue'}
                 content={'A complete Bootcamp from starting from basics up HTML CSS and Javascript all the way to Node and its framework. Learn about Motoko.'}
                 price={60}
                 per={90}
             />
             <Course title={'Digital Marketing'} 
                 bcolor={'#316B83'} 
                 color={'aliceblue'}
                 content={'A Details 6 hour course on Google Analytics , Youtube Marketing , Instagram Marketing , SEOs and a lot more . Boot your Marketing Journey with me!'}
                 price={30}
                 per={30}
                 />
             <Course title={'Mobile Development'} 
                 bcolor={'#576F72'} 
                 color={'aliceblue'}
                 content={'All about Modern App Development with hands-on experience in one of the most used framework React-Native. '}
                 price={75}
                 per={79}
                 />


                 </div>
                 <div>
                    <LeaderBoard/>
                 </div>

        </div>

    </div>
  )
}

export default Students