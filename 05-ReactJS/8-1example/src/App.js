import React from 'react';
import axios from 'axios';
import Spinner from './components/Spinner';
import Student from './components/Student';
import Professor from './components/Professor';

const App = () => {
  const [department, setDepartment] = React.useState([]);
  const [deptno, setDeptno] = React.useState(-1);
  const [loading, setLoding] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setLoding(true);
      try{
        const response = await axios.get('http://localhost:3001/department');
        setDepartment(department => response.data);
      }catch (e){
        console.error(e);
        alert('ajax 연동실패');
      }finally{
        setLoding(false);
      }
    })();
  }, []);

  const handleChange = React.useCallback((e) => {
    setDeptno(e.currentTarget.value);
  }, []);


  return (
    <div>
      <Spinner visible={loading} />
      <h1>Exam 09</h1>
      <hr />
      <select onChange={handleChange}>
        <option value="">학과목록</option>
        {department.map((v, i) => {
          return(
            <option value={v.id} key={i}>{v.dname}</option>
          )
        })}
      </select>

      <h2>학생목록</h2>
      <Student deptno={deptno} />

      <h2>교수목록</h2>
      <Professor deptno={deptno} />
    </div>
  );
};

export default React.memo(App);