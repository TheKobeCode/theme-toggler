import { createGlobalStyle } from 'styled-components'

// This are just global styles for the entire app

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }

  *, 
  *::after, 
  *::before {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundApp};
    color: ${props => props.theme.colorText};
    transition: all .3s ease;
  }
`
