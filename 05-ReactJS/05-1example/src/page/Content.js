import React from 'react';
import styled from 'styled-components';
import Side from '../components/Side';
import Main from '../components/Main';

const  ContentContainer = styled.section`
    max-width: 1200px;
    margin: auto;
    background-color: #eee;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;

    .container{padding: 20px;}
`;

const Content = () => {
    return(
        <ContentContainer>
            <Side />
            <Main />
        </ContentContainer>
    );
}
export default Content;