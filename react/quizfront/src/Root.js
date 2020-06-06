import React from 'react';
import Nav from 'Components/Base/Nav';
import Footer from 'Components/Base/Footer';
import styled from "styled-components";
import Routes from 'Routes';
import {Helmet} from "react-helmet";
import OGIMAGE from 'Data/Result/Images/gang.jpg';
import FAVICON from 'Data/Result/Images/favicon.ico';

const Root = () => {
  return(
    <MainWrapper>
      <Helmet>
        <title>1일 7깡 테스트</title>
        <link rel="icon" href={FAVICON} />
        <meta property="og:title" content='유튜브 중독테스트' />
        <meta property="og:description" content="1일 7깡 테스트" />
        <meta property="og:image" content={OGIMAGE} />
        <meta name="description" content="1일 7깡 테스트" />
      </Helmet>
      <Nav />
      <Section>
        <Routes />
      </Section>
      <Footer />
    </MainWrapper>
  )
}
export default Root;


const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 2px solid #000000;
  overflow: hidden;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(253, 253, 150);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
