import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Professor = ({deptno}) => {
    const [professor, setProfessor] = React.useState([]);
    const [loading, setLoding] = React.useState(false);

    React.useEffect(() => {
        setLoding(true);
        (async () => {
            try{
                const response = await axios.get(`http://localhost:3001/professor?deptno=${deptno}`);
                setProfessor(professor => response.data);
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
                        <th>교수번호</th>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>직급</th>
                        <th>급여</th>
                        <th>입사일</th>
                        <th>보직수당</th>
                        <th>소속학과번호</th>
                    </tr>
                </thead>
                <tbody>
                    {professor.map((v, i) => {
                        return(
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.userid}</td>
                                <td>{v.position}</td>
                                <td>{v.sal}</td>
                                <td>{v.hiredate.substring(0,10)}</td>
                                <td>{v.comm}</td>
                                <td>{v.deptno}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default React.memo(Professor);