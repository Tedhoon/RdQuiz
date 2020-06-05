import React from 'react';
import Nav from 'Components/Base/Nav';
// import Footer from 'Components/Base/Footer';
import styled from "styled-components";
import Quiz from 'Components/Quiz/Quiz';
import Routes from 'Routes';

const Root = () => {
  return(
    <MainWrapper>
      <Nav />
      <Section>
        <Routes />
      </Section>
      {/* <Footer /> */}
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

  @media only screen and (max-width: 415px) {
    height: calc(100% - 60px);
  }
`;
