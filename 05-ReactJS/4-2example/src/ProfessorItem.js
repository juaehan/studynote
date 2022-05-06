import React from 'react';

const ProfessorItem = ({id, name, userid, position, sal, hiredate, comm, deptno}) => {
    return(
       <tr>
           <td>{id}</td>
           <td>{name}</td>
           <td>{userid}</td>
           <td>{position}</td>
           <td>{sal}</td>
           <td>{hiredate.substring(0,10)}</td>
           <td>{comm}</td>
           <td>{deptno}</td>
       </tr> 
    );
}
export default ProfessorItem;