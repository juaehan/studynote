/**
 * @filename: Menu.js
 * @description: 웹 페이지 Menu
 * @author: 한주애 (juae0806@gmail.com)
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
// 이미지 파일 참조
import MenuImg from '../assets/img/tablesetting.jpg';

const MenuContainer = styled.div`
    margin:80px 200px;
    height:830px;
    border-bottom:1px solid gray;
    .text{
        float:left;
        width:500px;
        h3{
            text-align: center;
            font-size: 30px;
            letter-spacing: 3px;
            margin-bottom: 40px;
        }
        p{
            font-size:20px;
            letter-spacing: 3px;
            margin-bottom: 20px;
        }
        span{
            font-size:16px;
            margin-bottom:40px;
            line-height:1.5;
            display:block;
        }
    }
    .img{
        float:right;
        background-image:url(${MenuImg});
        background-repeat:no-repeat;
        width:500px;
        height:750px;
        margin-left:30px;
        background-size:contain;
    }
`;
const Menu = () => {
    return(
        <MenuContainer>
            <div className="text">
                <h3>Our Menu</h3>
                <p>Bread Basket</p>
                <span>Assortment of fresh baked fruit breads and muffins 5.50</span>
                <p>Honey Almond Granola with Fruits</p>
                <span>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</span>
                <p>Belgian Waffle</p>
                <span>Vanilla flavored batter with malted flour 7.50</span>
                <p>Scrambled eggs</p>
                <span>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</span>
                <p>Blueberry Pancakes</p>
                <span>With syrup, butter and lots of berries 8.50</span>
            </div>
            <div className="img"></div>
        </MenuContainer>
    );
}
export default Menu;