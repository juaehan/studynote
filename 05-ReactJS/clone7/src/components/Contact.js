/**
 * @filename: Contact.js
 * @description: 웹 페이지 Contact
 * @author: 한주애 (juae0806@gmail.com)
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';

/** 스타일 컴포넌트 */
const ContactContainer = styled.div`
    margin:80px 200px;
    height:630px;
    margin-bottom:0;
    h3{
        font-size: 30px;
        letter-spacing: 3px;
        margin-bottom: 40px;
    }
    p{
        font-size:16px;
        margin-bottom:20px;
        line-height:1.5;
        &:nth-child(3){
            font-size:20px;
            color:skyblue;
            font-weight:700;
        }
    }
    form fieldset div{
        margin-bottom:10px;
        input{
            width:100%;
            height:50px;
            border:none;
            border-bottom:1px solid black;
        }
        button{
            width:150px;
            height:40px;
            border:none;
            margin-top:20px;
            cursor: pointer;
        }
    }
`;
const Contact = () => {
    return(
        <ContactContainer>
            <h3>contact</h3>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p>Catering Service, 42nd Living St, 43043 New York, NY</p>
            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form name="form1">
                <fieldset>
                    <div>
                        <input type="text" name="user_name" id="user_name" placeholder="Name" required="required"/>
                    </div>
                    <div>
                        <input type="number" name="user_num" id="user_num" placeholder="How many people" required="required"/>
                    </div>
                    <div>
                        <input type="date" name="user_date" id="user_date" placeholder="datetime-local" required="required"/>
                    </div>
                    <div>
                        <input type="text" name="user_message" id="user_message" placeholder="Message \ Special requirements" required="required"/>
                    </div>
                    <div>
                        <button type="submit">SEND MESSAGE</button>
                    </div>
                </fieldset>
            </form>
        </ContactContainer>
    )
}
export default Contact;