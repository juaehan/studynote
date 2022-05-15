/**
 * @filename: Main.js
 * @description: 웹 페이지 Main
 * @author: 한주애 (juae0806@gmail.com)
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
// 이미지 파일 참조
import mainImg from '../assets/img/main.jpg'

const MainContainer = styled.div`
    height:800px;
    background-image:url(${mainImg});
    background-repeat: no-repeat;
    position:relative;

    span{
        font-size:40px;
        position: absolute;
        bottom: 30px;
        left:20px;
        color:gray;
    }
`;
const Main = () => {
    return(
        <MainContainer>
            <span>Le Catering</span>
        </MainContainer>
    );
}
export default Main;