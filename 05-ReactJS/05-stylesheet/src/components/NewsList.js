/**
 * 배열 데이터를 탐색하면서 배열의 원소 단위로 컴포넌트를 분리한 케이스
 */
import React from 'react';
import styled from 'styled-components';
import NewsDate from '../NewsData';
import NewsItem from './NewsItem';

/* 스타일 */
const ListContainer = styled.ul`
    list-style:none;
    padding:0;
    margin:0;
    width:100%;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    margin-bottom:30px;
`;

const NewsList = () => {
    console.clear();

    return(
        <div>
            <ListContainer>
                {NewsDate.map((v, i) => <NewsItem key={i} item={v}/>)}
            </ListContainer>
        </div>
    );
};
export default NewsList;