import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Container } from 'nes-react';
import QuestionList from 'Components/Quiz/QuestionList';
import Typing from 'react-typing-animation';
import { BACKEND } from 'config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const mockAsyncQuizData = () =>
  new Promise(resolve => {
    setTimeout(async function() {
      const result = await axios.get(`${BACKEND}/api/quiz`)
      resolve({
        data: [
            result.data[0],
            result.data[1],
            result.data[2],
            result.data[3],
            result.data[4],
        ]
      });
    }, 200);
  });


function Quiz() {
    const [start, setStart] = useState(false);
    const [quizData, setQuizData] = useState(null);
    const [num, setNum] = useState(0);     
    const [score, setScore] = useState(0);
    const history = useHistory();

    const getQuiz = useCallback(async () => {
        try {
          const { data } = await mockAsyncQuizData();
          setQuizData(data);
        } catch (err) {
          console.error(err);
        }
      },[]);
    
    useEffect(()=>{
        getQuiz();
    },[])

    const onStart = () => {
        setStart(true);
    }

    const goGang = () => {
        window.open("https://www.youtube.com/watch?v=xqFvYsy4wE4");
    }

    const goToResult = useCallback(() => {
        setTimeout(()=>{
            history.push({
                pathname: "/result/",
                state: {score : score}
            })
        }, 850)
    })
    
    useEffect(()=>{
        if(num===5){
            goToResult();
        }
    },[num])
    
    const checkAnswer = (async (answer) => {
        await new Promise((resolve)=>{
            if(answer===quizData[num].answer.toString()){
                setScore(score+1)
            }
            resolve();
        });
    })

    const clickAnswer = useCallback(async (event)=>{
        await checkAnswer(event.target.value);
        if(num!==5) {
            setNum(num+1)
        }
    },[num,quizData]) 

    if(start && quizData && num!==5) 
        return (
            <Container>
                <QuestionWrapper>
                    <QuestionInfo>{num+1}번문제</QuestionInfo>
                    <Question>{quizData[num].question}</Question>
                    {quizData[num].answer_list.split('/').map((content, index)=>
                        <QuestionList key={index+1} num={index+1} clickAnswer={clickAnswer} content={content} />
                    )}
                </QuestionWrapper>
            </Container>
        )
    if(num===5)
    return (
        <>
        <Typing>
            <div>loading...</div>
        </Typing>
        </>
    )
    return (
        <div>
            <IconWrap>
                <Icon onClick={goGang} className="nes-icon youtube is-medium"></Icon>
            </IconWrap>
            <Typing startDelay={250}>
                <h2>유튜브 중독테스트</h2>
                <div>주호민편 comming soon..</div>
            </Typing>
            
            <StartButton onClick={onStart} className="nes-btn is-primary">1일 7깡 테스트</StartButton>
        </div>
    );
}

export default Quiz;

const StartButton = styled.button`
    display: block;
    width: 280px;
`;

const QuestionWrapper = styled.div`
    min-height: 150px;
`;

const QuestionInfo = styled.div`
    font-size: 1.2rem;
    max-width: 280px;
    font-weight: bold;
`;

const Question = styled.div`
    font-size: 1.4rem;
    max-width: 280px;
`;
const IconWrap = styled.div`
    // display: flex;
    // align-items: center;
    flex-direction: column;
`;
const Icon = styled.i`
    display: flex;
    margin: 5px;
    cursor: url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer;
`;