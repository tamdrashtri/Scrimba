import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Button from './components/Button';
import styled from 'styled-components';

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const startGame = () => {
    setShowQuiz(true);
  };

  return (
    <main className='container'>
      {!showQuiz && (
        <StartGame>
          <Title>Quizzical</Title>
          <Button text='Start Game' onClick={startGame} />
        </StartGame>
      )}
      {showQuiz && <Quiz />}
    </main>
  );
}

const StartGame = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  color: #4D5B9E;
`;
