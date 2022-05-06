import React from 'react';

const DepartmentItem = ({id, dname, loc}) => {
    return(
       <tr>
           <td>{id}</td>
           <td>{dname}</td>
           <td>{loc}</td>
       </tr> 
    );
}
export default DepartmentItem;