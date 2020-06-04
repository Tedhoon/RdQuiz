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
    
    const [handleQuiz, setHandleQuiz] = useState({'index':1})
    const [score, setScore] = useState(0);
    
    useEffect(()=>{
        // console.log(quiz)
        getQuiz();
    },[])
    
    const getQuiz = async() => {
        const randomset = await axios.get(`${BACKEND}/api/quiz`)
        // 여기서 promise반환하기? 
        const data = randomset.data
        console.log(data)
        setQuiz({
            '1번':data[0],
            '2번':data[1],
            '3번':data[2],
            '4번':data[3],
            '5번':data[4]
        })
        
    }

    const onStart = () => {
        setStart(true);
        console.log(quiz['1번'])
    }

    const onCalculate = () => {
        setHandleQuiz({'index':2})
        setTimeout(()=>{
            console.log(handleQuiz)
        },500)
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
                        <Question>{quiz['1번'].question}</Question>
                    </Typing>
                    {quiz[`${handleQuiz['index']}번`].answer_list.split('/').map((ans, index)=>
                        <QuestionList key={index+1} num={index+1} onClick={onCalculate} content={ans} />
                    )}
                </QuestionWrapper>
            </Container>
            : 
            <Container>
                <Typing>
                    <h1> 유투브 중독테스트</h1>
                </Typing>
                <Icon className="nes-icon youtube is-large"></Icon>
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

const Icon = styled.i`
    margin: 5px;
    cursor: url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer;
`;