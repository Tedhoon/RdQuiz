import React, { useState } from 'react';
// import Box from '@material-ui/core/Box';
import styled, { keyframes } from 'styled-components';
import { Container } from 'nes-react';
import QuestionList from 'Components/Quiz/QuestionList';
import Typing from 'react-typing-animation';

function Quiz() {

    const [start, setStart] = useState(false);
    const onStart = () => {
        setStart(true);
    }
    return (
        <React.Fragment>
        
        {start 
            ?
            <Container>
                <QuestionWrapper>                
                    <Typing>
                        <QuestionInfo>1번문제 나갑니다!!!!</QuestionInfo>
                        <Typing.Backspace count={9} />
                        <Question>다음중 김태훈이 좋아하지 않는 것은?</Question>
                    </Typing>

                </QuestionWrapper>

                <QuestionList num={1} content={'짜장면'} />
                <QuestionList num={2} content={'짬뽕'} />
                <QuestionList num={3} content={'울면'} />
                <QuestionList num={4} content={'너...'} />
            </Container>
            : 
            <Container>
                <i className="nes-octocat animate"></i>
                <button onClick={onStart} className="nes-btn is-error">Start!</button>
            </Container>
        }
        </React.Fragment>

    );
}

export default Quiz;



const strong = keyframes`
    from {
        font-weight: 100;
    }
    to {
        font-weight: 900;
    }
`;

const QuestionWrapper = styled.div`
    min-height: 150px;
`;
const QuestionInfo = styled.div`
    font-size: 1.2rem;
    max-width: 280px;
    animation: ${strong} 0.1s ease-in forwards normal;
`;

const Question = styled.div`
    font-size: 1.4rem;
    max-width: 280px;
`;



