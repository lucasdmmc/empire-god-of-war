import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme["zinc-900"]};
    scroll-behavior: smooth;

  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0.3rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['zinc-800']};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme['zinc-400']};
  }

`