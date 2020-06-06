import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import DungGeunMo from "Styles/Fonts/DungGeunMo.ttf";
import { Helmet } from "react-helmet";
import Root from 'Root';
import OGIMAGE from 'Data/Result/Images/gang.jpg'

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
    <Helmet>
      <meta property="og:title" content='유투브 중독테스트' />
      <meta property="og:description" content="깡" />
      <meta property="og:image" content={OGIMAGE} />
    </Helmet>
    <GlobalStyle />
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

