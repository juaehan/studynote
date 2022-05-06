import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
    width:1500px;
    height:100px;
    background-color:black;

    p{
        color:white;
        text-align: center;
        line-height:100px;

        a{
            display:inline-block;
            color:white;
        }
    }
`;
const Footer = () => {
    return(
        <FooterContainer>
            <p>Powerd by <a href="#">w3.css</a></p>
        </FooterContainer>
    );
}
export default Footer;