import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { BACKEND } from 'config';

function ReNewResultPage() {
    const history = useHistory();
    const [resultData, setResultData] = useState(null);
    const location = useLocation();

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         window.Kakao.init('3fabadf710529806099b2db7ea2d0041');
    //         window.Kakao.Link.createCustomButton({
    //         container: '#kakao-link-btn',
    //         templateId: 29775,
    //         templateArgs: {
    //           'title': '1일 7깡 테스트',
    //           'description': '나는 1일 몇 깡일까? spnu.net',
    //           'url': 'http://spnu.net'
    //         }
    //         });
    //     },300)        
    // },[])

    const mockAsyncResultData = (score, category_pk) => 
        new Promise(resolve => {
            setTimeout(async () => {
                const result = await axios.get(`${BACKEND}/api/result/${score}/${category_pk}/`)
                resolve({
                    data: result.data[0]
                })
            }, 200)
        })
        

    const getResultData = useCallback(async (score, {id: category_pk}) =>{
        try {
            const { data } = await mockAsyncResultData(score, category_pk);
            setResultData(data)
        } catch (err) {
            console.log(err);
        }
    },[])


    useEffect(()=>{
        setTimeout(async ()=>{
            const { score, category } = await location.state
            getResultData(score, category[0])
        },250)
    },[]) 
    
    useEffect(()=>{
        console.log(resultData)
    },[resultData])

    const handleGoBack = () => (
        history.push("/")
    )

    return ( 
        <ResultWrapper>
            {resultData?
                <>  
                    {BACKEND}
                    {resultData['thumbnail']}


                    <ResultImg src="" />
                    {/* <Share>
                    <div id="kakao-link-btn" className="nes-btn is-warning">카톡으로 공유하기</div>
                    </Share> */}
                </> 
                :
                ''
            }
        </ ResultWrapper>
    )
}

export default ReNewResultPage;

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