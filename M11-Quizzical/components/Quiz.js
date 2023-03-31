import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Question = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #293264;
  margin: 1em 0;
`

const Answer = styled.button`
  color: #293264;
  background-color: transparent;
  border: 0.794239px solid #4D5B9E;
  border-radius: 7.94239px;
  padding: 0.1em 0.4em;
  margin-right: 2em;
`

export default function Quiz() {
  return (
    <section>
      <Question>How would one say goodbye in Spanish?</Question>
      <Answer>Au Revoir</Answer>
      <Button text="Check answers"></Button>
    </section>
  )
}