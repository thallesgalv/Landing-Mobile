import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Theme from './theme/Theme'
import Hero from './pages/Hero'
import Velocidade from './pages/Velocidade'
import Elegancia from './pages/Elegancia'
import Possibilidades from './pages/Possibilidades'
import Form from './pages/Form'
import Header from './components/Header'

const App = () => {

  const GlobalStyle = createGlobalStyle`
    /*CSS Reset*/
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        perspective: 1000px;

        a {
          display: block;
          text-decoration: none;
        }

        h1, p {
          margin: 0;
          font-weight: normal;
        }

        img {
          display: block;
          max-width: 100%;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        li {
          list-style: none;
        }
      }

      /*Global Styles*/
      body {
        font-family: ${({ theme }) => theme.fontFamily};
        font-size: ${({ theme }) => theme.rem(theme.fontSize)};
        line-height: ${({ theme }) => theme.lineHeight};
        color: ${({ theme }) => theme.color.text};
      }
  `


  return (
    <BrowserRouter>
      <Theme>
      <GlobalStyle/>
      <Header />  
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/velocidade' element={<Velocidade/>}></Route>
        <Route path='/elegancia' element={<Elegancia/>}></Route>
        <Route path='/possibilidades' element={<Possibilidades/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
      </Routes>
      

    </Theme>      
    </BrowserRouter>
  )
}

export default App