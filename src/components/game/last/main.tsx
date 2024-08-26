import React, { useEffect, useState, useRef } from 'react';

interface Props {
  id: number;
}

const LastGame: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h1>끝말잇기에 오신 것을 환영합니다!</h1>
      <ul>
        <li>ID: {id}</li>
        <li>TYPE: Last (1)</li>
      </ul>
    </div>
  );
};

export default LastGame;
