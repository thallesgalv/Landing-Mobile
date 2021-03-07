import React from 'react'
import styled from 'styled-components/macro'
import bg from '../assets/velocidadeBg.jpg'
import Title from '../components/Title'
import { ReactComponent as Logo } from '../assets/logo.svg'

const Velocidade = () => {

  function getDate() {
    const date = new Date(new Date().setDate(new Date().getDate() - 7)).toJSON().slice(0, 10).replace(/-/g, '/').split("");
    const str = [date[8],date[9],date[7],date[5],date[6],date[4], ...date.slice(0,4)].join("")
   return str
  }

  const Main = styled.main`
    width: 100%;
    min-height: ${({ theme }) => theme.rem(window.innerHeight - theme.menuHeight)};
    background: no-repeat center/100% url(${bg});
    position: relative;

    >div {
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0,0,0,.8) 50%, rgba(255,255,255,0) 100%);
      position: absolute;
    }
  `

  const Content = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 360px;
    padding-right: 5%;
    padding-top:${({ theme }) => theme.rem(theme.spacing * 2)};
    position: relative;
    display: grid;
    grid-template-columns: minmax(450px, 1fr) minmax(450px, 1fr);
    justify-content: center;
    gap: ${({ theme }) => theme.rem(theme.spacing)};

    @media (max-width: 1200px) {
      padding-left: 10%;
      padding-right: 10%;
    }
  `

  const Tag = styled.h2`
    width: fit-content;
    background:  ${({ theme }) => theme.gradient.blueToGreen};  
    font-size: clamp( ${({ theme }) => theme.rem(theme.fontSize * 1.5)}, 4vw,  ${({ theme }) => theme.rem(theme.fontSize * 2.5)}); 
    line-height:  ${({ theme }) => theme.lineHeight};
    margin: 0;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `

  const VelocidadeHeadline= styled.div`

    >h1, >p {
      font-size: clamp( ${({ theme }) => theme.rem(theme.fontSize * 3)}, 12vw,  ${({ theme }) => theme.rem(theme.fontSize * 16)}); 
      line-height: 1em;
      font-weight: 900;
      color: #fff;
      margin-top: ${({ theme }) => theme.rem(theme.spacing * 2)};
    }

    >p {
      font-size: clamp( ${({ theme }) => theme.rem(theme.fontSize * 2)}, 4vw,  ${({ theme }) => theme.rem(theme.fontSize * 3)}); 
      line-height: 1.25em;
      max-width:${({ theme }) => theme.rem(600)};
      margin-top: 0;
    }

    >small {
      color: #fff;
      position: absolute;
      bottom: 5%;
    }
  `

  const VelocidadeInfo = styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: column;

   h2 {
      color: #fff;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: ${({ theme }) => theme.rem(10)};
      text-align: center;
      margin-top: 0;
      margin-bottom: ${({ theme }) => theme.rem(theme.spacing * 2)};
    }  
  `

  const FlexContainer= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${({ theme }) => theme.rem(theme.spacing / 2)} 0;

    >p {
      color: #fff;
      font-weight: 500;
    }
  `

  const StyledLogo = styled(Logo)`
    width: ${({ theme }) => theme.rem(100)};
    fill: #fff;
  `
  
  const ProgressBar = styled.div`
    width: 100%;
    height: ${({ theme }) => theme.rem(50)};
    background:  ${({ theme }) => theme.gradient.blueToGreen};  
    box-shadow: 5px 5px 15px 0px rgba(44,44,44,0.15);
    border-radius: ${({ theme }) => theme.rem(theme.radius * 5)};
    margin: 0 ${({ theme }) => theme.rem(theme.spacing / 2)};
    position: relative;
    overflow: hidden;
    transition: all ease-in-out;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      background: #fff;  
      position: absolute;
      animation: progressBar 3s ease-in-out infinite;
      
        @keyframes progressBar{
        0% {
          transform: translate3d(0,0,0);
          width: 100%;
        }
        50% {
          transform: translate3d(100%,0,0);
          width: 100%;
        }
        100% {
          transform: translate3d(100%,0,0);
          width: 100%;
        }
      }
    }  
  `

  const NumberCircles = styled.div`
    width: ${({ theme }) => theme.rem('175')};
    height: ${({ theme }) => theme.rem('175')};
    border: ${({ theme }) => theme.rem('5')} solid #fff;
    border-radius: 50%;
    color: #fff;
    font-size: clamp( ${({ theme }) => theme.rem(theme.fontSize * 1.5)}, 4vw,  ${({ theme }) => theme.rem(theme.fontSize * 4)}); 
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.rem(theme.spacing / 2)};

    >span {
      font-size: clamp( ${({ theme }) => theme.rem(theme.fontSize * 1.5)}, 4vw,  ${({ theme }) => theme.rem(theme.fontSize * 1.5)}); 
    }
  `



  return (
    <Main>
      <div>
        <Content>

          <VelocidadeHeadline>
            <Tag>Velocidade</Tag>
            <h1>72%</h1>
            <p>mais rápido que<br></br> outros smartphones*</p>
            <small>*Pesquisa realizada por CelInfo. {getDate()}</small>
          </VelocidadeHeadline>

          <VelocidadeInfo>

            <div>
              <h2>Análise de Desempenho</h2>
              <FlexContainer>
                <StyledLogo />
                <ProgressBar />
              </FlexContainer>
              <FlexContainer style={{justifyContent: 'flex-end'}}>
                <p>marcas concorrentes combinadas</p>
                <ProgressBar style={{width: '30%', height: '10px'}} />
              </FlexContainer>
            </div>
            
            <div>
              <h2>Ficha Técnica</h2>
              <FlexContainer>
                <NumberCircles>12 <span> ram</span></NumberCircles>
                <NumberCircles>16 <span> core</span></NumberCircles>
                <NumberCircles>8 <span> gpu</span></NumberCircles>
              </FlexContainer>
            </div>
           
          </VelocidadeInfo>
        </Content>
      </div>
    </Main>
  )
}

export default Velocidade