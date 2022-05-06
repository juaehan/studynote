import React from 'react';

import myschool from '../myschool';

const Student = () => {
    const {student} = myschool;
    return(
        <div>
            <table border='1'>
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
                        <th>소속학과번호</th>
                        <th>담당교수번호</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((v,i) => {
                        return(
                            // 'key={i}'는 리액트에서 컴포넌트를 렌더링 하였을 때 어떤 원소가 변경되었는지 빠르게 감지하기 위해 사용함.
                            // 만약 설정이 되어 있지 않았으면 가상 DOM을 순차적으로 비교하면서 감지하여 속도가 느림
                            // map()함수 에서는 호출할 인자로 넘어오는 index 값을 사용하면 됨.
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.userid}</td>
                                <td>{v.grade}</td>
                                <td>{v.idnum.substring(0,6)}-*******</td>
                                <td>{v.birthdate.substring(0,10)}</td>
                                <td>{v.tel}</td>
                                <td>{v.height}</td>
                                <td>{v.weight}</td>
                                <td>{v.deptno}</td>
                                <td>{v.profno}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};
export default Student;