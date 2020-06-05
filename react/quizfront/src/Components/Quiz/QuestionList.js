import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function QuestionList(props) {
    const { num, content, clickEvent } = props;
    const [nes, setNes] = useState('');
    const [answer, setAnswer] = useState(true);

    useEffect(()=>{
        setAnswer(true);
        setTimeout(() => {
        switch(num) {
            case 1:
                setNes('is-success');
                break;
            case 2:
                setNes('is-warning');
                break;
            case 3:
                setNes('is-error');
                break;
            case 4:
                setNes('is-primary');
                break;
            default:
                setNes('is-primary');
        }
        setAnswer(false);
    },1000)
    },[clickEvent])

    return (
        <React.Fragment>
            {answer 
                ? <RetroBtn className="nes-btn is-disabled">?</RetroBtn>
                : <RetroBtn onClick={clickEvent} className={`nes-btn ${nes}`}>{content}</RetroBtn>
            }
        </React.Fragment>
    )
}

export default QuestionList;

const RetroBtn = styled.button`
    display: block;
    width: 280px;
    line-height: 1;
    margin-bottom: 20px;
`;

