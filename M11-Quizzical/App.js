import React from 'react'
import Quiz from './components/Quiz'
import Button from './components/Button'
import styled from 'styled-components'

const StartGame = styled.div`
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
  color: #4D5B9E;
`

export default function App() {

  return (
    <main className='container'>
      <StartGame>
        <Title>Quizzical</Title>
        <Button text='Start Game'/>
      </StartGame>
      <Quiz />
    </main>
  )
}

