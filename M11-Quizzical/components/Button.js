import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #4D5B9E;
    color: #F5F7FB;
    border: none;
    border-radius: 0.9rem;
    padding: 0.5rem 1.5rem;
    margin: 2em 0;
    display: block;
    margin-inline: auto;
`

const Button = ({text}) => {
    return (
        <StyledButton>{text}</StyledButton>
    )
}

export default Button