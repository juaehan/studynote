import React from 'react';
import styled from 'styled-components';

import FakeImg from './FakeImg';

const SideContainer = styled.div`
    width: 360px;
    flex: none;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
`;

const Side = () => {
    return(
        <SideContainer>
            <div className="container">
                <h2>About Me</h2>
                <h5>Photo of me:</h5>
                <FakeImg height='200'>Image</FakeImg>
                <p>Some text about me in culpa qui officia deserunt
                mollit anim..</p>
                <h3>More Text</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <FakeImg height='60'>Image</FakeImg>
                <br />
                <FakeImg height='60'>Image</FakeImg>
                <br />
                <FakeImg height='60'>Image</FakeImg>
            </div>
        </SideContainer>
    );
}
export default Side;