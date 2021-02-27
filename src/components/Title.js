import React from 'react'
import styled, {css} from 'styled-components/macro'


const Title = ({ text, gradient, blueToGreen, purpleToPink, redToYellow, delay, time }) => {
  
  const Container = styled.div`
    width: fit-content;
    position: relative;
  `
  
  const StyledTitle = styled.h1`
    width: fit-content;
    font-weight: 900;
    font-size: clamp( ${({ theme }) => theme.rem(theme.fontSize * 2.5)}, 4.5vw,  ${({ theme }) => theme.rem(theme.fontSize * 5)}); 
    line-height:  ${({ theme }) => theme.lineHeight};
    position: absolute;
    top: 0;
    z-index: -1;

    ${({blueToGreen}) => blueToGreen && css`
    background:  ${({ theme }) => theme.gradient.blueToGreen};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `}

    ${({purpleToPink}) => purpleToPink && css`
    background:  ${({ theme }) => theme.gradient.purpleToPink};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `}

    ${({redToYellow}) => redToYellow && css`
    background:  ${({ theme }) => theme.gradient.redToYellow};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `}
  `

  const StyledSpan= styled.span`
    width: fit-content;
    font-weight: 900;
    font-size: clamp( ${({ theme }) => theme.rem(theme.fontSize * 2.5)}, 4.5vw,  ${({ theme }) => theme.rem(theme.fontSize * 5)});
    line-height:  ${({ theme }) => theme.lineHeight};
    background:  #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: backChangeColor ${time}s infinite;
    animation-delay: ${delay}s;
                  
    @keyframes backChangeColor{
      0% {
        opacity: 1;
      }
      33% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `

  return (
    <Container>
      <StyledTitle
        blueToGreen={blueToGreen}
        purpleToPink={purpleToPink}
        redToYellow={redToYellow}
        delay={delay}
        time={time}
      >
        {text}
      </StyledTitle>
      <StyledSpan>{text}</StyledSpan>
    </Container>
  )
}

export default Title