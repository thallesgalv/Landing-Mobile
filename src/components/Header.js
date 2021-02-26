import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import {ReactComponent as Logo} from '../assets/logo.svg'
import Button from './Button'

const Header = () => {


  const StyledHeader= styled.header`
    width: 100%;
    height: ${({ theme }) => theme.rem(theme.menuHeight)};
    background: #fff;
    box-shadow: 5px 5px 15px 0px rgba(44,44,44,0.15);
  `

  const Nav= styled.nav`
    height: ${({ theme }) => theme.rem(theme.menuHeight)};
    max-width: ${({ theme }) => theme.rem(theme.maxWidth)};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const StyledLogo = styled(Logo)`
    width: ${({ theme }) => theme.rem(50)};
  `

  const ContainerLinks = styled.ul`
  height: ${({ theme }) => theme.rem(theme.menuHeight)};
  display: flex;
  justify-content: center;
  align-items: center;

  >li, button {
    margin-left:  ${({ theme }) => theme.rem(theme.spacing)};

    >a {
      color: ${({ theme }) => theme.color.text};
      text-transform: uppercase;
    } 
  }

`

  return (
    <StyledHeader>
      <Nav>
        <NavLink to="/"><StyledLogo/></NavLink>

        <ContainerLinks>
          <li><NavLink to="/velocidade">Velocidade</NavLink></li>
          <li><NavLink to="/elegancia">Elegância</NavLink></li>
          <li><NavLink to="/possibilidades">Possibilidades</NavLink></li>
          <Button text="Garanta o seu agora" primary/>
        </ContainerLinks>

      </Nav>
    </StyledHeader>
  )
}

export default Header