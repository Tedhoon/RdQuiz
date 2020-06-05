import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ResultData from 'Data/Result/ResultData';
import styled from 'styled-components';

function ResultPage() {
    const history = useHistory();
    const resultData = ResultData;
    const [score, setScore] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setScore(location.state.score);
            console.log(resultData)
        },1250)
    }) 
    const location = useLocation();
    const handleGoBack = () => (
        history.push("/")
    )
    return ( 

        <ResultWrapper>
            {score?
                <>
                    <ResultImg src={resultData[score].img} />
                    <ResultInfo>{score}/5</ResultInfo>
                    <ResultInfo>{resultData[score].info}</ResultInfo>
                    
                    <ReStartBtn onClick={handleGoBack}>뒤로가기</ReStartBtn>
                </> 
                :
                '로딩되는거'
                
            }
        </ ResultWrapper>
    )
}

export default ResultPage;
const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ResultInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
`;

const ResultImg = styled.img`
    display: block;
    width: 300px;
`;

const ReStartBtn = styled.button`
    display: block;
`;
