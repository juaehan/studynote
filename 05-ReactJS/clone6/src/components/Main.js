import React from 'react';
import styled from 'styled-components';
import Project from '../pages/Project'
import About from '../pages/About'
import Contact from '../pages/Contact'

const MainContainer = styled.div`
    width:1500px;
    margin:40px auto;
`;
const Main = () => {
    return(
        <MainContainer>
            <Project />
            <About />
            <Contact />
        </MainContainer>
    );
}
export default Main;