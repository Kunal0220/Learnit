import React from 'react'
import './Course.css'
import Card from 'react-bootstrap/Card';
import Progress from '../Courses/Progress';

function Course(props) {
    
  return (
    <div className='courseMain'  >
          <Card className='m-3' style={{ width: '18rem' , backgroundColor: props.bcolor , color: props.color}}>
            <Card.Body>
                <Card.Title className='p-2 '>{props.title}</Card.Title>
                     <Card.Text className='text-start'>
                      {props.content}
                     </Card.Text>
                    <hr />
                    {/* <div style={{fontWeight: 'bold'}} className='d-flex justify-content-between'>
                        <p >Price</p>
                        <p>${props.price}</p>
                    </div> */}
                    <Progress bgColor={'red'} percentage={props.per} />
            </Card.Body>
    </Card>
    </div>
  )
}

export default Course