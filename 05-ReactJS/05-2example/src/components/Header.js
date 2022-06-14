import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

const HeaderContainer = styled.header`
    .jumbotron {
        padding: 80px;
        text-align: center;
        background: #1abc9c;
        color: white;

        h1 {
            font-size: 40px;
        }

        ${mq.maxWidth('sm')`
            padding: 30px;
            h1{
                font-size:30px;
            }
        `}
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className="jumbotron">
                <h1>My Website</h1>
                <p>React.js Layout Template</p>
            </div>
        </HeaderContainer>
    );
};

export default Header;