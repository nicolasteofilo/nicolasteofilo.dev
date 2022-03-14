import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #08070B;
    --white: #FFF;
    --gray: #666568;
    --colors-yellow: #ffff80;
    --colors-pink: #ff80bf;
    --colors-blue: #0080ff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background);
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: 'Lexend', sans-serif;
  }
`

export { GlobalStyles }
