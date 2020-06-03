import React from 'react';
import styled from 'styled-components';

function Nav() {
    const linkGit = () => {
        window.open("https://github.com/Tedhoon/RdQuiz");
    };
    const linkInsta = () => {
        window.open("https://www.instagram.com/tedhoon/");
    }
    return (
        <Wrapper>
            <Icon onClick={linkGit} className="nes-icon github is-medium"></Icon>
            <Icon onClick={linkInsta} className="nes-icon star is-medium"></Icon>
        </Wrapper>
    )
}

export default Nav;

const Wrapper = styled.div`
    position: absolute;
    z-index:1;
    // cursor: url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer;
`;

const Icon = styled.i`
    margin: 5px;
    cursor: url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer;
`;