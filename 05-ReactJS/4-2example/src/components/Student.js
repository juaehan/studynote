import React from 'react'
import StudentItem from '../StudentItem';

const Student = (props) => {
    return(
        <table border="1">
        <thead>
          <tr>
            <th>학생번호</th>
            <th>학생이름</th>
            <th>학년</th>
            <th>아이디</th>
            <th>주민번호</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과</th>
            <th>담당교수</th>
          </tr>
        </thead>
        <tbody>
        {props.name.map((v, i) => {
          return(
            <StudentItem 
              id = {v.id}
              name = {v.name}
              userid = {v.userid}
              grade = {v.grade}
              idnum = {v.idnum}
              birthdate = {v.birthdate}
              tel = {v.tel}
              height = {v.height}
              weight = {v.weight}
              deptno = {v.deptno}
              profno = {v.profno}
            />
          );
        })}
        </tbody>
      </table>

        
    );
}
export default Student;