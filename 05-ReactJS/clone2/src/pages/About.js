import React from 'react';
import styled from 'styled-components';
import data from '../data';

const AboutContainer = styled.div`
    h3{
        margin-bottom:30px;
        font-size:25px;
        font-weight:bold;
    }
    p{
        line-height:1.2;
        margin-bottom:30px;
    }
    .aboutBox{
        width:1500px;
        height:453px;
        margin-bottom:40px;

        .box{
            width:370px;
            float:left;
            margin-right:5px;

            .boxImg{
                width:370px;
                height:250px;
            }
            h4{
                font-size:18px;
                font-weight:bold;
                padding:10px 0;
            }
            span{color:gray;}
            p{padding:10px 0; width:350px;}
            button{
                width:370px;
                height:40px;
                border: none;
                font-size:15px;
                &:hover{
                    background-color:rgb(168, 168, 168);
                    cursor: pointer;
                }
            }
        }
    }
`;
const About = () => {
    const {about} = data;
    const {content, member} = about;
    return(
        <AboutContainer>
            <h3>About</h3>
            <p>{content}</p>
            <div className="aboutBox">
            {member.map((v, i) => {
                return(
                    <div className="box" key={i}>
                        <img className="boxImg" src={process.env.PUBLIC_URL + `${v.img}`} />
                        <h4>{v.name}</h4>
                        <span>{v.position}</span>
                        <p>{v.desc}</p>
                        <button>Conteact</button>
                    </div>
                );
            })}
            </div>
        </AboutContainer>
    );
}
export default About;