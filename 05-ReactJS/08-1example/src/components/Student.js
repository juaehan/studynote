import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Student = ({deptno}) => {
    const [student, setStudent] = React.useState([]);
    const [loading, setLoding] = React.useState(false);
    React.useEffect(() => {
        setLoding(true);
        (async () => {
            try{
                const response = await axios.get(`http://localhost:3001/student?deptno=${deptno}`);
                setStudent(student => response.data);
            }catch (e) {
                console.error(e);
                alert('ajax연동실패');
            }finally{
                setLoding(false);
            }
        })();
    }, [deptno]);

    return (
        <div>
            <Spinner visible={loading} />
            <table border="1">
                <thead>    
                    <tr>
                        <th>학번</th>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>학년</th>
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
                    {student.map((v, i) => {
                        return(
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
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default React.memo(Student);