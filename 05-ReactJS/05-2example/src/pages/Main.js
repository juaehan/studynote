import React from 'react';
import styled from 'styled-components';
import Post from '../components/Post';
import mp from '../MediaQuery';

const MainContainer = styled.div`
    flex: 0 1 auto;
    background-color: white;
    padding: 20px;
    box-sizing: border-box;

    ${mp.maxWidth('sm')`
        flex:none;
        width:100%;
    `}
`;

/**
 * 
 * 메인페이지 레이아웃 구성 함수
 * @returns {JSX.Element}
 */

const Main = () => {
    return (
        <MainContainer>
            <Post />
            <Post />
        </MainContainer >
    );
};

export default Main;