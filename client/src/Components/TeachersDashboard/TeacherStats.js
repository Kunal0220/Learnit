import React from 'react'
import Card from 'react-bootstrap/Card';

function TeacherStats(props) {

  return (
    <Card style={{ width: '20rem' , height:'10rem' ,  borderRadius:'20px'}} >

      <Card.Body style={{   
        backgroundColor:props.bcolor,
        color:'aliceblue',
        borderRadius:'5px'
        }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.summary} <br /><br />
        {props.update}
        </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default TeacherStats