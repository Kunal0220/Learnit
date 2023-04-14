import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
function Ex(props) {
  return (
    <div>
        <h4 className='m-4'>Hello User</h4>
        <p className='px-3 ' style={{fontWeight:'bold'}}>Level-2 </p>
        <ProgressBar completed={props.exp} bgColor='grey' animateOnRender={true} />
        <p style={{textAlign:'end' , fontWeight:'bold'}}> Redeem your EXP. for exciting vouchers</p>
    </div>
  )
}

export default Ex