import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import DungGeunMo from "Styles/Fonts/DungGeunMo.ttf";
import Root from 'Root';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DungGuenMo;
    font-weight: 400;
    src: url(${DungGeunMo});
  }
  *{
    box-sizing: border-box ;
    cursor: default;
    margin: 0;
    padding: 0;
  }
  body {
    font-family:  DungGuenMo, 'Noto Sans KR', sans-serif;   
  };  
  a {
    text-decoration: none;
    color: #000000
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

