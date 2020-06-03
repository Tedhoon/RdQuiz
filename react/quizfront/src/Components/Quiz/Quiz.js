import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from 'nes-react';
import QuestionList from 'Components/Quiz/QuestionList';
import Typing from 'react-typing-animation';
import { BACKEND } from 'config';
import axios from 'axios';

function Quiz() {

    const [start, setStart] = useState(false);
    const [quiz, setQuiz] = useState(null);
    
    useEffect(()=>{
        console.log(quiz)
        getQuiz();
    },[])

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         console.log(quiz)
    //         console.log("이거라고오")  
    //         console.log(quiz)          
    //     },1000)
    // },[quiz])
    
    const getQuiz = async() => {
        const randomset = await axios.get(`${BACKEND}/api/quiz`);
        console.log(randomset.data)
        const data = randomset.data
        setQuiz(data)
    }

    const onStart = () => {
        setStart(true);
    }

    return (
        <React.Fragment>
        {start && quiz
            ?
            <Container>
                <QuestionWrapper>                
                    <Typing>
                        <QuestionInfo>1번문제 나갑니다!!!!</QuestionInfo>
                        <Typing.Backspace count={9} />
                        <Question>다음중 김태훈이 좋아하지 않는 것은?</Question>
                    </Typing>
                    <QuestionList num={1} content={'마!!!!!'} />
                    <QuestionList num={2} content={'알파카'} />
                    <QuestionList num={3} content={'자장면'} />
                    <QuestionList num={4} content={'너...'} />
                </QuestionWrapper>
                {/* {quiz.map((quiz)=>
                    quiz.question
                )} */}

     
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



