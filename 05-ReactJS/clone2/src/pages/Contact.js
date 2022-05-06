import React from 'react';
import styled from 'styled-components';
import map from '../img/map.jpg'

const ContactContainer = styled.div`
    h3{
        margin-bottom:30px;
        font-size:25px;
        font-weight:bold;
    }
    p{margin-bottom:30px;}
    input{
        display:block;
        width:1500px;
        height:30px;
        margin-bottom:10px;
    }
    button{
        margin:30px 0 50px 0;
        width:150px;
        height:40px;
        background-color:black;
        color:white;
        border:none;
        &:hover{
            background-color:gray;
            cursor: pointer;
        }
    }
    .map{
        background:url(${map}) no-repeat;
        width:1400px;
        height:838px;
        margin:0 auto;
    }
`;
const Contact = () => {
    return(
        <ContactContainer>
            <h3>Contact</h3>
            <p>Lets get in touch and talk about your next project.</p>
            <input type="text" placeholder="Name" required="required"/>
            <input type="text" placeholder="Email" required="required"/>
            <input type="text" placeholder="Subject" required="required"/>
            <input type="text" placeholder="Comment" required="required"/>
            <button>SEND MESSAGE</button>

            <div class="map"></div>
        </ContactContainer>
    );
}
export default Contact;