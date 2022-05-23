import React from 'react';
import styled from "styled-components";
import useAxios from 'axios-hooks';
import regexHelper from '../libs/RegexHelper';
import Spinner from '../components/Spinner';

const ContentContainer = styled.div`
  width: 768px;
  height: 100%;
  margin: 0 auto;
  form {
    width: 460px;
    height: 935px;
    margin: 0 auto;
    .btn_join {
      width: 100%;
      height: 50px;
      margin-top: 72px;
      background: #00c43b;
      border: none;
      color: white;
      font-size: 20px;
    }
  }
`;

const FormGroup = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 30px;
  .title {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
    span {
      font-size: 12px;
      font-weight: normal;
      color: gray;
    }
  }
  .wrap {
    width: 100%;
    height: 40px;
    border: 1px solid #d5d5d5;
    background-color: white;
    position: relative;
    #user_id {
      margin: 11px 70px 11px 20px;
      width: 300px;
      border: none;
      background: transparent;
    }
    .url {
      color: gray;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    #user_pwd {
      margin: 11px 70px 11px 20px;
      width: 300px;
      border: none;
      background: transparent;
    }
    .img {
      background: url(../assets/img/m_icon_pw_step.png);
      width: 24px;
      height: 24px;
      position: absolute;
      top: 8px;
      right: 10px;
      background-size: 125px 75px;
    }

    #pwd2 {
      margin: 11px 70px 11px 20px;
      width: 300px;
      border: none;
      background: transparent;
    }
    .img2 {
      background: url(../assets/img/m_icon_pw_step.png) -27px 0;
      width: 24px;
      height: 24px;
      position: absolute;
      top: 8px;
      right: 10px;
      background-size: 125px 75px;
    }

    #name {
      margin: 11px 70px 11px 20px;
      width: 300px;
      border: none;
      background: transparent;
    }

    #gender {
      margin: 11px 70px 11px 20px;
      width: 430px;
      border: none;
      background: transparent;
    }
    #email2 {
      margin: 11px 70px 11px 20px;
      width: 430px;
      border: none;
      background: transparent;
    }
  }
  .no_wrap {
    width: 100%;
    height: 40px;
    background: white;
    border: 1px solid #d5d5d5;
    margin-bottom: 10px;

    #no {
      margin: 11px 20px 11px 20px;
      width: 430px;
      border: none;
      background: transparent;
    }
  }
  .section {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
  }
  .phone_wrap {
    width: 300px;
    height: 40px;
    float: left;
    background: white;
    border: 1px solid #d5d5d5;
    margin-right: 10px;
    #phone {
      margin: 11px 20px 11px 20px;
      width: 259px;
      border: none;
      background: transparent;
    }
  }
  .phone_btn {
    width: 148px;
    height: 40px;
    background-color: #00c43b;
    border: none;
    color: white;
    cursor: pointer;
  }
  .num_wrap {
    width: 100%;
    height: 40px;
    background: transparent;
    border: 1px solid #d5d5d5;
    margin-bottom: 50px;
    #num {
      margin: 11px 20px 11px 20px;
      width: 259px;
      border: none;
      background: transparent;
    }
  }
  .year_wrap {
    width: 148px;
    height: 40px;
    float: left;
    background: white;
    border: 1px solid #d5d5d5;
    #year {
      margin: 11px 70px 11px 20px !important;
      width: 119px;
      border: none;
      background: transparent;
    }
  }
  .month_wrap {
    width: 148px;
    height: 40px;
    float: left;
    background: white;
    border: 1px solid #d5d5d5;
    margin: 0 5px;
    #month {
      margin: 11px 70px 11px 20px !important;
      width: 119px;
      border: none;
      background: transparent;
    }
  }
  .day_wrap {
    width: 148px;
    height: 40px;
    float: left;
    background: white;
    border: 1px solid #d5d5d5;
    #day {
      margin: 11px 70px 11px 20px !important;
      width: 119px;
      border: none;
      background: transparent;
    }
  }
`;

const Content = () => {
    const [{loading}, refetch] = useAxios({
        url: "http://localhost:3001/member",
        method: 'POST'
      }, {manual:true});
    
      const onSubmit = React.useCallback((e) => {
        e.preventDefault();
    
        const current = e.target;
    
        try{
          regexHelper.value(current.id, '아이디를 입력하세요');
          regexHelper.engNum(current.id, '아이디는 영문과 숫자로 조합해야 합니다.');
    
          regexHelper.value(current.pwd, '비밀번호를 입력하세요.');
          regexHelper.engNum(current.pwd, '비밀번호는 영문과 숫자로 조합해야 합니다.');
          regexHelper.value(current.c_pwd, '비밀번호를 입력하세요.');
    
          regexHelper.value(current.name, '이름을 입력하세요.');
          regexHelper.value(current.year, '년도를 입력하세요.');
          regexHelper.value(current.day, '일을 입력하세요.');
          regexHelper.value(current.email, '이메일을 입력하세요.');
          regexHelper.email(current.email, '이메일 형식을 확인해주세요.');
          regexHelper.value(current.phone, '핸드폰번호를 입력하세요.');
          regexHelper.cellphone(current.phone, '핸드폰번호 형식을 확인해 주세요.');
    
    
        }catch(e) {
          window.alert(e.message);
          e.field.focus();
          return;
        }
    
        const id = current.id.value;
        const pwd = current.pwd.value;
        const c_pwd = current.c_pwd.value;
        const name = current.name.value;
        const year = current.year.value;
        const month = current.month.value;
        const day = current.day.value;
        const gender = current.gender.value;
        const email = current.email.value;
        const no = current.no.value;
        const phone = current.phone.value;
        
        let json = null;
    
        (async () => {
          try{
            const response = await refetch({
              data : {
                id : id,
                pwd : pwd,
                c_pwd : c_pwd,
                name: name,
                year : year,
                month : month,
                day: day,
                gender : gender,
                email : email,
                no : no,
                phone : phone
              }
            });
    
            json = response.data;
          }catch(e) {
            console.error(e);
            window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
          }
          if(json !== null){
            window.alert("저장되었습니다.");
          }
        })();
      }, []);

    return (
        <ContentContainer>
            <Spinner visible={loading} />
        <form name="join" id="join" onSubmit={onSubmit}>
          <FormGroup>
            <label htmlFor="id" className="title">
              아이디
            </label>
            <div className="wrap">
              <input type="text" id="user_id" name="id"/>
              <span className="url">@naver.com</span>
            </div>
          </FormGroup>

          <FormGroup>
            <label htmlFor="pwd" className="title">
              비밀번호
            </label>
            <div className="wrap">
              <input type="password" id="user_pwd" name="pwd"/>
              <span className="img"></span>
            </div>
          </FormGroup>

          <FormGroup>
            <label htmlFor="c_pwd" className="title">
              비밀번호 재확인
            </label>
            <div className="wrap">
              <input type="password" id="pwd2" name="c_pwd" />
              <span className="img2"></span>
            </div>
          </FormGroup>

          <FormGroup>
            <label htmlFor="name" className="title">
              이름
            </label>
            <div className="wrap">
              <input type="text" id="name" name="name" />
            </div>
          </FormGroup>

          <FormGroup>
            <label htmlFor="year" className="title">
              생년월일
            </label>
            <div className="year_wrap">
              <input type="text" id="year" name="year" placeholder="년(4자)" />
            </div>
            <div className="month_wrap">
              <select name="month" id="month">
                <option value="">월</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="day_wrap">
              <input type="text" id="day" name="day" placeholder="일" />
            </div>
          </FormGroup>

          <FormGroup>
            <label htmlFor="gender" className="title">
              성별
            </label>
            <div className="wrap">
              <select name="gender" id="gender">
                <option value="">성별</option>
                <option value="M">남자</option>
                <option value="F">여자</option>
                <option value="none">선택 안함</option>
              </select>
            </div>
          </FormGroup>

          <FormGroup>
            <label htmlFor="email" className="title">
              본인 확인 이메일<span>(선택)</span>
            </label>
            <div className="wrap">
              <input
                type="text"
                id="email2"
                name="email"
                placeholder="선택입력"
              />
            </div>
          </FormGroup>

          <FormGroup>
            <label htmlFor="phone" className="title">
              휴대전화
            </label>
            <div className="no_wrap">
              <select name="no" id="no">
                <option value="82">대한민국 +82</option>
                <option value="233">가나 +233</option>
                <option value="241">가봉 +241</option>
              </select>
            </div>
            <div className="section">
              <div className="phone_wrap">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="전화번호 입력"
                />
              </div>
              <button type="button" className="phone_btn">
                인증번호 받기
              </button>
            </div>
            <div className="num_wrap clear">
              <input
                type="text"
                id="num"
                placeholder="인증번호를 입력하세요"
              />
            </div>
          </FormGroup>
          <button type="submit" className="btn_join">
            가입하기
          </button>
        </form>
      </ContentContainer>
    );
};

export default Content;