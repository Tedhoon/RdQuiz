import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'Routes';
import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";
import DungGeunMo from "Styles/Fonts/DungGeunMo.ttf";


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DungGuenMo;
    font-weight: 400;
    src: url(${DungGeunMo});
  }
  
  *{
    box-sizing: border-box ;
    cursor: default;
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
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

