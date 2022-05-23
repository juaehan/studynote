import React from 'react';
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 70px 0;
  h1 {
    width: 240px;
    height: 48px;
    background: url(../assets/img/pc_sp_login_190522.png) no-repeat 0 0;
    margin: 0 auto;
    text-indent: -999999px;
    overflow: hidden;
  }
`;
const Header = () => {
    return (
        <HeaderContainer>
            <h1>네이버</h1>
        </HeaderContainer>
    );
};

export default Header;