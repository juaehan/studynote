import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width:100%;
    height:60px;
    box-shadow: 2px 0 4px black;
    position:fixed;
    background-color:white;
    z-index: 999999;

    .logo{
        float:left;
        width:150px;
        height:40px;
        margin:10px 30px;
        &:hover{cursor: pointer;background-color:gray;}
        h1{
            font-size:18px;
            text-align: center;
            line-height: 40px;
            letter-spacing: 2px;
            span{font-weight: bold;}
        }
    }
    .nav{
        float:right;
        width:324px;
        height:40px;
        margin:10px 30px;
        a{
            display:block;
            float:left;
            font-size:18px;
            color:black;
            text-decoration: none;
            width:100px;
            height:100%;
            text-align: center;
            line-height:40px;
            padding:0 4px;
            letter-spacing: 3px;
            &:hover{background-color:gray;}
        }
    }
`;
const Header = () => {
    return(
        <HeaderContainer>
            <div className="logo">
                <h1><span>BR</span> Architects</h1>
            </div>
            <div className="nav">
                <a href="#project">Project</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </HeaderContainer>
    );
}
export default Header;