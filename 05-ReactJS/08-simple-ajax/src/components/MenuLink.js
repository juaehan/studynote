import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

/** 메뉴링크 --> NavLink: 현재 머물고 있는 페이지와 관련된 링크에 CSS적용 */
const MenuLinkContainer = styled(NavLink)`
    font-size:20px;
    cursor:pointer;
    text-decoration: none;
    padding-bottom:2px;
    color: #222;

    &:hover{color:#22b8cf;}
    &:after{
        content: '|';
        display:inline-block;
        padding:0 7px;
        color:#ccc;
    }
    &:last-child{
        &:after{
            color:#fff;
        }
    }

    &.active{
        text-decoration:underline;
        color:#22b8cf;

        &:after{border-bottom:4px solid #fff !important;}
    }
`;
const MenuLink = ({to, children}) => <MenuLinkContainer to={to}>{children}</MenuLinkContainer>;

export default MenuLink;