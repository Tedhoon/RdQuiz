import React from 'react';
import Nav from 'Components/Base/Nav';
import Footer from 'Components/Base/Footer';
import styled from "styled-components";
import Quiz from 'Components/Quiz/Quiz';

const MainPage = () => {
  return(
    <MainWrapper>
      <Nav />
      <Section>
        <Quiz />
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
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII=),auto;
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
