import React, { useState } from 'react'
import User from './user';
import TurnTime from './turnTime';
import GameTime from './gameTime';
import WordInput from './wordInput';

function Game() {
  const [user, setUser] = useState(0)
  const [point, setPoint] = useState(0)
  const [start, setStart] = useState(false)

  const handleStart = () => {
    setStart(!start);
  }

  return (
    <div style={{ fontSize: '24px' }}>
      game
      <User user={user} score={point} />
      <GameTime onStart={start} />
      <button onClick={handleStart}>{start ? '시작' : '정지'}</button>
      <WordInput />
    </div>
  )
}

export default Game;