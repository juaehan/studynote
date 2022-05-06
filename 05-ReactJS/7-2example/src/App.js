import React, {useReducer, useMemo, useCallback, useRef} from 'react';

const setOperation = (state, action) => {
  let myValue = 0;

  switch(action.operation){
    case '+':
      myValue = action.x + action.y;
      break;

    case '-':
      myValue = action.x - action.y;
      break;
        
    case '*':
      myValue = action.x * action.y;
      break;
    
    case '/':
      myValue = action.x / action.y;
      break;
    
    default :
      myValue = 0;
  }
  return myValue;
};

const App = () => {
  const x = useRef();
  const y = useRef();
  const operation = useRef();

  const [myValue, setMyValue] = useReducer(setOperation, 0);
  const onClickBtn = useCallback( e => {
    setMyValue({
      x : parseInt(x.current.value),
      y : parseInt(y.current.value),
      operation: operation.current.value
    }, [])
  });

  const textColor = useMemo(() => {
    return myValue % 2 === 0 ? 'red' : 'blue';
  }, [myValue]);

  return(
    <div>
      <h1>Exam07</h1>
      <p>useReducer, useMemo, useCallback을 활용한 사칙연산</p>
      <hr />

      <input type="text" ref={x}/>
      <select ref={operation}>
        <option type="+">+</option>
        <option type="-">-</option>
        <option type="*">*</option>
        <option type="/">/</option>
      </select>
      <input type="text"  ref={y}/>
      <button type="button" onClick={onClickBtn}>결과확인</button>
      <hr />

      <div style={{color:textColor}}>결과값: {myValue}</div>
    </div>
  );
}
export default App;