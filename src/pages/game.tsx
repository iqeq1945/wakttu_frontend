import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import LastGame from '@/components/game/last/main';

interface GameStateProps {
  id: number;
  type: number;
}

interface GamePageProps {
  gameState: GameStateProps | null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query } = context;
    const id = parseInt(query.id as string, 10);
    const type = parseInt(query.type as string, 10);

    const gameState = await fetchGameStateFromServer(id, type);

    if (
      !gameState ||
      gameState.type === undefined ||
      gameState.id === undefined ||
      isNaN(id) ||
      isNaN(type)
    ) {
      return {
        notFound: true,
      };
    }

    return {
      props: { gameState },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const fetchGameStateFromServer = async (
  id: number,
  type: number
): Promise<GameStateProps | null> => {
  const GameTypes: { [key: number]: string } = {
    1: 'last',
    2: 'kung',
  };

  if (GameTypes[type]) {
    return {
      id: id,
      type: GameTypes[type] as unknown as number,
    };
  }

  return null;
};

const Game: React.FC<GamePageProps> = ({ gameState }) => {
  const [isGameState, setIsGameState] = useState({
    id: gameState?.id || null,
    type: gameState?.type || null,
  });

  if (
    !gameState?.id ||
    !gameState?.type ||
    gameState.id === null ||
    gameState.type === null
  )
    return null;

  return (
    <>
      {isGameState.type === ('last' as unknown as number) && (
        <LastGame id={isGameState.id as number} />
      )}
    </>
  );
};

export default Game;
