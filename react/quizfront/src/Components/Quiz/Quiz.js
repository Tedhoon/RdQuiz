import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from 'nes-react';
import QuestionList from 'Components/Quiz/QuestionList';
import Typing from 'react-typing-animation';
import { BACKEND } from 'config';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

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
    }, 150);
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
        console.log(quizData)
    }

    const goToResult = () => {
        // await history.push("/result/");

        history.push({
            pathname: "/result/",
            state: {score : score}
        })

        console.log("정답페이지 ㄱㄱ")   
        console.log(`당신의 점수는 ${score}점!`)
    }

    const checkAnswer = useCallback(async (answer) => {
        if(await answer===quizData[num].answer.toString()){
            console.log("정답!")
            setScore(score+1)
        } else{
            console.log("땡!")
        }
        if(num===4) {
            goToResult();
        }
    },)

    const clickAnswer = useCallback(async (event)=>{
        await checkAnswer(event.target.value);
        console.log(num)
        if(num!==4) {
            setNum(num+1)
        }
    },[num,quizData]) 
    // quizData도 불러주니까 잘먹어.......흑흑흑
    // useCallback은 watch하는 값에 변화가 없으면 굳이 콜백 함수를 재생성하지 않는다. (최적화)

    if(start && quizData) 
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

    return (
        <Container>
            <Typing>
                <h1> 유투브 중독테스트</h1>
            </Typing>
            <Icon className="nes-icon youtube is-large"></Icon>
            <i className="nes-octocat animate"></i>
            <StartButton onClick={onStart} className="nes-btn is-error">깡</StartButton>
        </Container>
    );
}

export default Quiz;

// styled-components
const StartButton = styled.button`
    display: block;
    width: 280px;

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