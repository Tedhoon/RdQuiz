import React from 'react';
import {useHistory} from 'react-router-dom';


const PageNotFound = () => {
    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    }
    return ( 
        <React.Fragment>
            <h1>404~</h1>
            <button onClick={handleGoBack}>뒤로가기</button>
        </React.Fragment>
    )
}

export default PageNotFound;
