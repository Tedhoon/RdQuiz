import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Container } from 'nes-react';
import QuestionList from 'Components/Quiz/QuestionList';
import Typing from 'react-typing-animation';
import { BACKEND } from 'config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const mockAsyncCategoryData = () => 
    new Promise(resolve => {
        setTimeout(async function() {
            const result = await axios.get(`${BACKEND}/api/category`)
            resolve({
                data: result.data,
            })
        }, 200)
    })

const mockAsyncQuizData = (pk) =>
    new Promise(resolve => {
        setTimeout(async function() {
            const result = await axios.get(`${BACKEND}/api/quiz/${pk}/`)
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
    const [category, setCategory] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [start, setStart] = useState(false);
    const [quizData, setQuizData] = useState(null);
    const [num, setNum] = useState(0);     
    const [score, setScore] = useState(0);
    const history = useHistory();


    const getCategory = useCallback(async () => {
        try {
          const { data } = await mockAsyncCategoryData();
          setCategory(data);
        } catch (err) {
          console.error(err);
        }
      },[]);


    const getQuiz = useCallback(async (pk) => {
        try {
          const { data } = await mockAsyncQuizData(pk);
          setQuizData(data);
        } catch (err) {
          console.error(err);
        }
      },[]);
    
    useEffect(()=>{
        getCategory()
    },[])

    // list 안에 특정 key값 추출을 위한 함수
    const filterCategoryList = (allCategory, pk) => { 
        return allCategory.filter(object => {
            return object['id'] === parseInt(pk) 
        })
    }

    const onStart = useCallback(async (event) => {
        const pk = event.target.id
        getQuiz(pk)
        setStart(true);
        const filterCategory = await filterCategoryList(category, pk)
        setCurrentCategory(filterCategory)
    }, [start, quizData, category])

    const goGang = useCallback(() => {
        window.open("https://www.youtube.com/watch?v=xqFvYsy4wE4");
    }, [])

    const goToResult = useCallback(() => {
        setTimeout(()=>{
            history.push({
                pathname: "/renew_result/",
                state: {
                    score : score,
                    category : currentCategory
                }
            })
        }, 850)
    })
    
    useEffect(()=>{
        if(num===5){
            goToResult(1);
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
    },[num, quizData]) 

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
                <h2>유튜브 중독테스트</h2>
                {category?
                    category.map(cate=>
                        <StartButton key={cate['id']} id={cate['id']} onClick={onStart} className="nes-btn is-warning">{cate['category']}</StartButton>
                    )
                    : ''
                } 
        </div>
    );
}

export default React.memo(Quiz);

const StartButton = styled.button`
    display: block;
    width: 280px;
    margin-bottom: 18px;
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