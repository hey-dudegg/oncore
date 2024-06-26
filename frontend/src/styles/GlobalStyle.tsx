import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    font-family: Noto Sans KR, sans-serif;
    list-style: none;
    box-sizing: border-box;
  }
  #root{
    height: 100vh;
  }
  button {
    cursor: pointer;
  }
`;
