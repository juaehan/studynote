import React from 'react';
import styled from 'styled-components';
import data from '../data';

const ProjectContainer = styled.div`
    h3{
        font-size:25px;
        font-weight:bold;
        margin-bottom:30px;
    }
    .projectBox{
        width:1500px;
        height:510px;
        margin-bottom:40px;
        div{
            position:relative;
            width:370px;
            height:250px;
            float:left;
            margin-right:5px;
            margin-bottom:5px;
        }
        .boxImg{
            width:370px;
            height:250px;
            background-size:contain;
        }
        .boxTex{
            position:absolute;
            left:0;
            top:0;
            width:130px;
            height:35px;
            text-align: center;
            line-height:35px;
            color:white;
            background-color:black;
        }
    }
`;
const Project = () => {
    const {project} = data;
    return(
        <ProjectContainer>
            <h3>Projects</h3>
            <div className="projectBox">
                {project.map((v, i) => {
                    return(
                        <div key={i}>
                            <img className="boxImg" src={process.env.PUBLIC_URL + `${v.img}`} />
                            <p className="boxTex">{v.subject}</p>
                        </div>
                    );
                })}
            </div>
        </ProjectContainer>
    );
}
export default Project;