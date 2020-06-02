import React from 'react';
import Nav from 'Components/Base/Nav';
import Footer from 'Components/Base/Footer';
import styled from "styled-components";

const MainPage = () => {
  return(
    <MainWrapper>
      <Nav />
      <Section>

      </Section>
      <Footer />
    </MainWrapper>
  )
}
export default MainPage;


const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 2px solid #000000;
  overflow: hidden;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  background: #29bbbb;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 415px) {
    height: calc(100% - 60px);
  }
`;
