import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from 'nes-react';
import QuestionList from 'Components/Quiz/QuestionList';
import Typing from 'react-typing-animation';
import { BACKEND } from 'config';
import axios from 'axios';

function Quiz() {

    const [start, setStart] = useState(false);
    const [quiz, setQuiz] = useState(null);
    
    // const [handleQuiz, setHandleQuiz] = useState({'index':1})
    // const [score, setScore] = useState(0);

    const [num, setNum] = useState(1); 
    
    
    const getQuiz = async() => {
        const randomset = await axios.get(`${BACKEND}/api/quiz`)
        // 여기서 promise반환하기? 
        const data = randomset.data
        console.log(data)
        setQuiz([
            data[0],
            data[1],
            data[2],
            data[3],
            data[4]
        ])
    }

    
    useEffect(()=>{
        getQuiz();
    },[])

    const onStart = () => {
        setStart(true);
    }

    // const onCalculate = () => {
        
    // }

    const onCalculate = useCallback(()=>{
        setNum(num+1);
    },[num]) 
    // useCallback은 watch하는 값에 변화가 없으면 굳이 콜백 함수를 재생성하지 않는다. (최적화)


    // quiz start!
    if(start && quiz) 
        return (
            <Container>
                <QuestionWrapper>
                        <React.Fragment>
                                <QuestionInfo>{num}번문제</QuestionInfo>
                                {/* <Typing.Backspace count={9} /> */}
                                <Question>{quiz[num].question}</Question>
                                {quiz[num].answer_list.split('/').map((ans, index)=>
                                    <QuestionList key={index+1} num={index+1} clickEvent={onCalculate} content={ans} />
                                )}
                        </React.Fragment>
                    
                </QuestionWrapper>
            </Container>
        )



    // 메인화면
    return (
        <Container>
            <Typing>
                <h1> 유투브 중독테스트</h1>
            </Typing>
            <Icon className="nes-icon youtube is-large"></Icon>
            {/* <i className="nes-octocat animate"></i> */}
            <StartButton onClick={onStart} className="nes-btn is-error">깡</StartButton>
        </Container>
    );
}

export default Quiz;

const StartButton = styled.button`
    display: block;
    width: 200px;

`;

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