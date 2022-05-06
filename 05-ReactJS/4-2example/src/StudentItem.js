import React from 'react';

const StudentItem = ({id, name, userid, grade, idnum, birthdate, tel, height, weight, deptno, profno}) => {
    return(
       <tr>
           <td>{id}</td>
           <td>{name}</td>
           <td>{userid}</td>
           <td>{grade}</td>
           <td>{idnum}</td>
           <td>{birthdate}</td>
           <td>{tel}</td>
           <td>{height}</td>
           <td>{weight}</td>
           <td>{deptno}</td>
           <td>{profno}</td>
       </tr> 
    );
}
export default StudentItem;