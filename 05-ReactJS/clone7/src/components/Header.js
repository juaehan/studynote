/**
 * @filename: Header.js
 * @description: 웹 페이지 Header
 * @author: 한주애 (juae0806@gmail.com)
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const HeaderContainer = styled.header`
    width:100%;
    height:60px;
    color:black;
    position:fixed;
    background-color:white;
    text-align: center;
    z-index: 99999;
    box-shadow: 2px 0 5px;
    
    h1{
        float:left;
        width:300px;
        height:100%;
        line-height:60px;
        font-size:15px;
        font-weight: 400;
        letter-spacing:3px;
    }
    .menu{
        float:right;
        width:400px;
        height:60px;

        a{
            float:left;
            margin:16px 16px;
            width:25%;
            display: block;
            text-decoration: none;
            color:black;
            height:30px;
            line-height: 30px;

            &:hover{background:gray;}
        }
    }
`;
const Header = () => {
    return(
        <HeaderContainer>
                <h1>Gourmet au Catering</h1>
                <div className="menu">
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/Menu">Menu</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                </div>
        </HeaderContainer>
    );
};
export default Header;