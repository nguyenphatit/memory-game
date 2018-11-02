import React from 'react'
import { Link } from 'react-router-dom';

const EndGame = ({ className }) => {
  return (
    <div className={className}>
      <p className="youWonText">
        Congratulations!<br />You won!
      </p>

      <br />

      <Link to="/new-game" className="newGameLink">
        Play again
      </Link>
    </div>
  )
}

export default EndGame
