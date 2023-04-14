import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
function Progress(props) {
  return (
    <div>
        <ProgressBar completed={props.percentage} bgColor='#577D86' animateOnRender={true} />
    </div>
  )
}

export default Progress