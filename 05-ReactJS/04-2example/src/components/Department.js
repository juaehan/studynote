import React from 'react';
import DepartmentItem from '../DepartmentItem';
import mystyle from '../assets/css/style.module.css';

const Department = (props) => {
  return (
    <div>
      <table border="1" className={mystyle.tableStyle}>
        <thead className={mystyle.theadStyle}>
          <tr>
            <th>학과번호</th>
            <th>학과이름</th>
            <th>학과위치</th>
          </tr>
        </thead>
        <tbody>
          {props.name.map((v, i) => {
            return(
              <DepartmentItem 
                  key={i}
                  id={v.id}
                  dname={v.dname}
                  loc={v.loc}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Department;