import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Wrapper>
            마! 내가마리야! 푸터다!!
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    position: absolute;
    z-index:1;
    color: red;
    bottom:0;
`;