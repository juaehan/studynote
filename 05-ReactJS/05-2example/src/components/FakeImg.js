import React from 'react';
import styled from 'styled-components';

const FakeImgContainer = styled.div`
    background-color: #aaa;
    width: auto;
    padding: 20px;
    height: ${props => `${props.height}px`}
`;
/**
 * 가상 이미지 컴포넌트 구현.
 * 이미지의 높이와 내용으로 출력할 문자열을 props로 전달받는다.
 * @param props.height - 이미지 높이
 * @param props.children - 내용
 * @returns {JSX.Element}
 */

const FakeImg = ({height, children}) => {
    return (
        <FakeImgContainer height={height}>
            {children}
        </FakeImgContainer>
    );
};

export default FakeImg;