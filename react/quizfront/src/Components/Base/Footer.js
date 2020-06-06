import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Wrapper>
            <script data-ad-client="ca-pub-7222505064653766" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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