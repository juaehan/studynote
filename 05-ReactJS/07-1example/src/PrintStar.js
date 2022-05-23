import React from 'react';

const PrintStar = () => {
    const [rowNum, setRowNum] = React.useState(0);
    const result = React.useRef();

    const changeRowNum = e => {
        setRowNum(e.currentTarget.value);
    };

    React.useEffect(() => {
        result.current.innerHTML = "";

        for(let i=0; i<rowNum; i++){
            for(let j=0; j<i+1; j++){
                result.current.innerHTML += '*';
            }
            result.current.innerHTML += '<br />';
        }
    },[rowNum]);

    return (
        <div>
            <h2>Calc</h2>
            <p>useState, useEffect, useRef를 사용한 별찍기 구현</p>
            <hr />
            <label htmlFor='rownum'>rownum : </label>
            <input type="text" onChange={changeRowNum} id="rownum"/>
            <hr />
            <div ref={result}></div>
        </div>
    );
};

export default PrintStar;