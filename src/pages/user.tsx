import React, { useState } from 'react'

const User: React.FC<{ user: number, score: number }> = ({ user, score }) => {
  const [user1, setUser1] = useState(0)
  const [user2, setUser2] = useState(0)
  const [user3, setUser3] = useState(0)
  const [user4, setUser4] = useState(0)
  const [user5, setUser5] = useState(0)
  const [user6, setUser6] = useState(0)

  switch (user) {
    case 1: setUser1(user1 + score);
    case 2: setUser2(user2 + score);
    case 3: setUser3(user3 + score);
    case 4: setUser4(user4 + score);
    case 5: setUser5(user5 + score);
    case 6: setUser6(user6 + score);
  }

  return (
    <div style={{ fontSize: '24px', display: 'flex', gap: '10px' }}>
      <div>user1: {user1} /</div>
      <div>user2: {user2} /</div>
      <div>user3: {user3} /</div>
      <div>user4: {user4} /</div>
      <div>user5: {user5} /</div>
      <div>user6: {user6} /</div>
    </div>
  )
}

export default User;