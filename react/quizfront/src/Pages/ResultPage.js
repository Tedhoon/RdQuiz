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
            window.Kakao.init('3fabadf710529806099b2db7ea2d0041');
            window.Kakao.Link.createCustomButton({
            container: '#kakao-link-btn',
            templateId: 29775,
            templateArgs: {
              'title': '1일 7깡 테스트',
              'description': '나는 1일 몇 깡일까?'
            }
            });
        },300)        
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setScore(location.state.score);
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
                    <div id="kakao-link-btn">뭐여</div>
                    <input type="button" id="kakao-link-btn" value="KAKOA Talk으로 공유하기"/>
                    <Share>
                        <input type="button" id="kakao-link-btn" value="KAKOA Talk으로 공유하기"/>
                    </Share>
                </> 
                :
                ''
            }
        </ ResultWrapper>
    )
}

export default ResultPage;

const Result = styled.h1`
    color: #230A59;
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

const Share = styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    flex-direction: column;
    margin-top: 7px;
`;