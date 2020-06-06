import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ResultData from 'Data/Result/ResultData';
import styled from 'styled-components';

function ResultPage() {
    const history = useHistory();
    const resultData = ResultData;
    const [score, setScore] = useState(null);
    const location = useLocation();

    useEffect(()=>{
        setTimeout(()=>{
            setScore(location.state.score);
            console.log(resultData)
        },250)
    },[]) 
    
    const handleGoBack = () => (
        history.push("/")
    )

    return ( 
        <ResultWrapper>
            {score !== null?
                <>
                    <ResultImg src={resultData[score].img} />
                    <Result>
                        {resultData[score].grade}
                        <ResultScore>[{score}/5]</ResultScore>
                    </Result>
                    
                    <ResultInfo>{resultData[score].info}</ResultInfo>
                    <ReStartBtn onClick={handleGoBack}>다시하기</ReStartBtn>
                </> 
                :
                ''
            }
        </ ResultWrapper>
    )
}

export default ResultPage;
const Result = styled.h1`
    color: #209cee;
    text-align: center;
    margin-top: 5px;
    position: relative;
`;

const ResultScore = styled.div`
    position: absolute;
    top: 25px;
    right: 80px;
    font-size: 0.9rem;
    color: black;
`;
const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ResultInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-bottom: 10px;
`;

const ResultImg = styled.img`
    display: block;
    width: 300px;
`;

const ReStartBtn = styled.button`
    display: block;
`;
