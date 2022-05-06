import React from 'react';

const App = () => {
  const [rownum, setRowNum] = React.useState(0);
  const result = React.useRef();

  const changeRowNum = e => {
    setRowNum(e.currentTarget.value);
  }

  React.useEffect(() => {
    result.current.innerHTML = '';
    for(let i=0; i<rownum; i++){
      for(let j=0; j<i+1; j++){
        result.current.innerHTML += '*';
      }
      result.current.innerHTML += '<br />';
    }
  },[rownum]);
  
  return(
    <div>
      <h1>Exam07</h1>
      <p>useState, useEffect, useRef를 사용한 별찍기 구현</p>
      <hr />
        <label htmlFor="rownum">rownum: </label>
        <input id="rownum" type="text" onChange={changeRowNum}/>
      <hr />
      <div ref={result}></div>
    </div>
  );
}
export default App;