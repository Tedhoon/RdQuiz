import React, { useState, useEffect } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import ResultData from 'Data/Result/ResultData';

function ResultPage() {
    const { history } = useHistory();
    const { resultData } = ResultData;
    // const { mystate } = props.location.state;
    const [score, setScore] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setScore(location.state.score);
        },2000)
    }) 
    const location = useLocation();
    const handleGoBack = () => {
        history.goBack();
    }
    return ( 
        <>
            <div>{score?score:'로딩되는거!'}/5</div>
            <button onClick={handleGoBack}>뒤로가기</button>
        </>
    )
}

export default ResultPage;
