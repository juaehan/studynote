import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding-top: 30px;
  div {
    width: 100%;
    text-align: center;
    padding: 5px 0;
    font-size: 12px;
    &:nth-child(1) span::after {
      content: "|";
      padding: 0 5px;
      margin-left: 5px;
    }
    &:nth-child(1) span:nth-child(4)::after {
      content: "";
      padding: 0 0px;
      margin-left: 0px;
    }
    &:nth-child(2) {
      padding-bottom: 15px;
    }
    &:nth-child(2) a {
      display: inline-block;
      width: 60px;
      height: 12px;
      background: url(../assets/img/pc_sp_login_190522.png) 218px 0;
    }
  }
  div span strong {
    font-weight: bold;
  }
`;
const Footer = () => {
    return (
        <FooterContainer>
        <div>
          <span>이용약관</span>
          <span>
            <strong>개인정보처리방침</strong>
          </span>
          <span>책임의 한계와 법적고지</span>
          <span>회원정보 고객센터</span>
        </div>
        <div>
          <Link to="#"></Link>
          <span>
            Copyright <strong>NAVER Corp.</strong>
          </span>
          <span>All Right Reserved</span>
        </div>
      </FooterContainer>
    );
};

export default Footer;