import React from 'react';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

function Quiz() {
    return (
        <Box>
            <QuizBox>
            왕
            </QuizBox>
        </Box>
    );
}

export default Quiz;

const QuizBox = styled.div`
    border: 1px solid red;
    width: 320px;
    min-height: 320px;

`;