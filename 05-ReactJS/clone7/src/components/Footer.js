/**
 * @filename: Footer.js
 * @description: 웹 페이지 Footer
 * @author: 한주애 (juae0806@gmail.com)
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';

/** 스타일 컴포넌트 */
const FooterContainer = styled.div`
    text-align: center;
    width:100%;
    height:150px;
    line-height:150px;
    background-color:rgb(212, 212, 212);
    a{
        display:inline-block;
        color:black;
    }
`;
const Footer = () => {
    return(
        <FooterContainer>
            <p>Powerd by 
                <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
            </p>
        </FooterContainer>
    )
}
export default Footer;