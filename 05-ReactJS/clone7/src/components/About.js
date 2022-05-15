/**
 * @filename: About.js
 * @description: 웹 페이지 About
 * @author: 한주애 (juae0806@gmail.com)
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
// 이미지 파일 참조
import aboutImg from '../assets/img/tablesetting2.jpg';

/** 스타일 컴포넌트 */
const AboutContainer = styled.div`
    margin:80px 200px;
    height:700px;
    border-bottom:1px solid gray;

    .img{
        float:left;
        background-image:url(${aboutImg});
        background-repeat:no-repeat;
        width:500px;
        height:750px;
        margin-right:30px;
        background-size:contain;
    }

    .text{
        float:left;
        width:500px;
        text-align: center;

        h3{
            font-size: 30px;
            letter-spacing: 3px;
            margin-bottom: 40px;
        }
        h4{
            font-size:20px;
            letter-spacing: 3px;
            margin-bottom: 30px;
        }
        p{
            font-size:16px;
            margin-bottom:20px;
            line-height:1.5;
            &:last-of-type{color:gray;}
        }
    }
`;
const About = () => {
    return(
        <AboutContainer>
            <div className="img"></div>
            <div className="text">
                <h3>About Catering</h3>
                <h4>Tradition since 1889</h4>
                <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </AboutContainer>
    );
}
export default About