import React from 'react';
import styled from 'styled-components';
import architect from '../img/architect.jpg'


const VisualContainer = styled.div`
    width:1500px;
    height:800px;
    background: url(${architect}) no-repeat;
    background-size:contain;
    margin:0 auto;
    position:relative;
    .text{
        width:400px;
        height:80px;
        position: absolute;
        top:48%;
        left:38%;
        text-align: center;
        color:white;

        h1{
            font-size:40px;
            letter-spacing: 3px;
            line-height:60px;

            span{
                font-weight:bold;
                background-color:rgba(0, 0, 0, 0.8);
                margin-top:10px;
                width:90px;
                height:60px;
                display:inline-block;
            }
        }
    }
`;
const Visual = () => {
    return(
        <VisualContainer>
            <div className="text">
                <h1><span>BR</span> Architects</h1>
            </div>
        </VisualContainer>
    );
}
export default Visual;