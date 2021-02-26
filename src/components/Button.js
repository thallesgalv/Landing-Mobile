import React from 'react'
import styled from 'styled-components/macro'

const Button = ({ text, primary }) => {
  
  const StyledButton= styled.button`
    background: ${ primary ? "#000" : "#fff"};
    color: ${ primary ? "#fff" : "#8e7e7e"};
    outline: none;
    border: ${ primary ? "1px solid #000" : "1px solid #8e7e7e"};
    padding: ${({ theme }) => theme.rem(theme.spacing / 2) } ;
    border-radius: ${({ theme }) => theme.rem(theme.radius)};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.rem(theme.fontSize)};
    font-weight: 500;
    transition: background .3s ease-in-out;
    cursor: pointer;

    &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    }
  `

  return <StyledButton>{text}</StyledButton>

}

export default Button