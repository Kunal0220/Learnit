import React from 'react'
import "./LeaderBoard.css"

function LeaderBoard() {
  return (
    <div >
        <h3 className='leaderTitle'> Leaderboard</h3>
        <div>
        <p className='mx-5 px-4'><img className='leaderimg px-2' src={require('./woman1.png')} alt="LeaderBoard-img" />#1 Alexa Wills</p>
        <p className='mx-5 px-4'><img className='leaderimg px-2' src={require('./man1.png')} alt="LeaderBoard-img" />#2 Justin Solomon</p>
        <p className='mx-5 px-4'><img className='leaderimg px-2' src={require('./women2.png')} alt="LeaderBoard-img" />#3 Jennifer </p>
        </div>

    </div>
  )
}

export default LeaderBoard