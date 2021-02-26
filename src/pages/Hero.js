import React from 'react'
import styled from 'styled-components/macro'
import Title from '../components/Title'
import Button from '../components/Button'
import img from '../assets/phone.png'

const Hero = () => {
  const [axisX, setAxisX] = React.useState(null);
  const [axisY, setAxisY] = React.useState(null);
  const [transition, setTransition] = React.useState('unset');

  function handleMouseMove({pageX,pageY}) {
    setAxisX(window.innerWidth / 100 - pageX / 25);
    setAxisY(window.innerHeight / 100 - pageY / 25);
  }

  function handleMouseEnter() {
    setTransition('none')
  }  

  function handleMouseLeave() {
    setAxisX(0)
    setAxisY(0)
    setTransition('all 0.7s ease')
  }  

  const Main = styled.main`
    width: 100%;
    min-height:   ${({ theme }) => theme.rem(window.innerHeight - theme.menuHeight)};
    max-width: ${({ theme }) => theme.rem(theme.maxWidth)};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px,1fr));
    justify-content: center;
    place-items: center;
    gap: ${({ theme }) => theme.rem(theme.spacing)};


  `

  const Content= styled.div`
    width: 100%;
    height: 100%;
    padding-top:${({ theme }) => theme.rem(theme.spacing * 4)};
    
  `

  const ButtonContainer = styled.div`
    margin-top:${({ theme }) => theme.rem(theme.spacing * 2)};

    >button + button {
      margin-left:${({ theme }) => theme.rem(theme.spacing)};
    }
  `
  
  const ImgContainer= styled.div`
    transition: ${transition};

  `

  const Img= styled.img`
    width: 100%;
    transform: rotateY(${axisX}deg) rotateX(${axisY}deg) ;
  `

  return (
    <Main>
      <Content>
        <Title text="Velocidade," blueToGreen delay="0" time="18"/>
        <Title text="elegância," purpleToPink delay="6" time="18"/>
        <Title text="possibilidades" redToYellow delay="12" time="18" />
        <ButtonContainer>
          <Button text="Garanta o seu Agora" primary/>
          <Button text="Conheça o produto" secondary/>
        </ButtonContainer>
      </Content>

      <ImgContainer
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Img src={img}/>
      </ImgContainer>

    </Main>
  )
}

export default Hero