import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, {css} from 'styled-components/macro'
import { ReactComponent as Logo } from '../assets/logo.svg'
import useMedia from '../hooks/useMedia'
import Button from './Button'


const Header = () => {

  const mobile = useMedia("(max-width: 900px)");
  const [activeMenuMobile, setActiveMenuMobile] = React.useState(false);
  
  function handleClick() {
    setActiveMenuMobile(!activeMenuMobile)
  }

  const StyledHeader= styled.header`
  width: 100%;
  height: ${({ theme }) => theme.rem(theme.menuHeight)};
  background: #fff;
  box-shadow: 5px 5px 15px 0px rgba(44,44,44,0.15);
  position: relative;
  z-index: 1;
`

const Nav= styled.nav`
  height: ${({ theme }) => theme.rem(theme.menuHeight)};
  max-width: ${({ theme }) => theme.rem(theme.maxWidth)};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;


  >a {
    @media (max-width: 1260px) {
      margin-left: 10%;
      position: relative;
       z-index:1;
    }
  }
`

const StyledLogo = styled(Logo)`
  width: ${({ theme }) => theme.rem(50)};
`

const ContainerLinks = styled.ul`
  height: ${({ theme }) => theme.rem(theme.menuHeight)};
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 1260px) {
    margin-right: 10%;
  }

  @media (max-width: 900px) {
    display: ${activeMenuMobile ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    animation: example.5s forwards;
                  
    @keyframes example{
      from {
        transform: translate3d(0,-100px,0);
        opacity: 0;
      }
      to {
        transform: translate3d(0,0,0);
        opacity: 1;
      }
    }
  }

  >li, button {
    margin-left:  ${({ theme }) => theme.rem(theme.spacing)};

    @media (max-width: 900px) {
      margin-left: unset;
      width: 100%;
      text-align: center;
      padding:  ${({ theme }) => theme.rem(theme.spacing)};
      box-shadow: 5px 5px 15px 0px rgba(44,44,44,0.15);
    }

    >a {
      color: ${({ theme }) => theme.color.text};
      text-transform: uppercase;
    } 
  }

  > button {
    @media (max-width: 900px) {
      width: 80%;
      padding: ${({ theme }) => theme.rem(theme.spacing / 2) } ;
      margin-top:  ${({ theme }) => theme.rem(theme.spacing)};
    }
  }
`

const MenuMobile= styled.div`
  width: ${({ theme }) => theme.rem(50)};
  height: ${({ theme }) => theme.rem(50)};
  background: transparent;
  position: relative;
  margin-right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Click= styled.div`
  width: ${({ theme }) => theme.rem(30)};
  height: ${({ theme }) => theme.rem(5)};
  border-radius: ${({ theme }) => theme.rem(theme.radius)};
  background:${({ theme }) => theme.gradient.purpleToPink};
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  animation: menuShow.5s forwards;
             
  @keyframes menuShow{
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 100%;
      opacity: 1;
    }
  }

  &::before, &::after {
    content: '';
    width: ${({ theme }) => theme.rem(50)};
    height: 100%;
    background:${({ theme }) => theme.gradient.blueToGreen};
    border-radius: ${({ theme }) => theme.rem(theme.radius)};
    position: absolute;
    top: -14px;
    animation: menuShow .5s forwards;
  }

  &::after {
    width: ${({ theme }) => theme.rem(25)};
    background:${({ theme }) => theme.gradient.redToYellow};
    top: 14px;
  }
`

  return (
    <StyledHeader>
      <Nav>
        <NavLink to="/"><StyledLogo /></NavLink>
        
        <ContainerLinks>
          <li><NavLink to="/velocidade">Velocidade</NavLink></li>
          <li><NavLink to="/elegancia">Elegância</NavLink></li>
          <li><NavLink to="/possibilidades">Possibilidades</NavLink></li>
          <Button text="Garanta o seu agora" primary />

        </ContainerLinks>
        
        {mobile ? <MenuMobile onClick={handleClick}><Click /></MenuMobile> : null}
        


      </Nav>
    </StyledHeader>
  )
}

export default Header