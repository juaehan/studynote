import React from 'react';

const getResultValue = (state, action) => {
    let resultValue = 0;

    switch(action.exec){
        case '+' :
            resultValue = action.x + action.y;
            break;

        case '-' :
            resultValue = action.x - action.y;
            break;

        case '*' :
            resultValue = action.x * action.y;
            break;

        case '/' :
            resultValue = action.x / action.y;
            break;

        default:
            resultValue = 0;
    }
    return resultValue;
};

const Calc = () => {
    const x = React.useRef();
    const y = React.useRef();
    const exec = React.useRef();

    const [resultValue, setResultValue] = React.useReducer(getResultValue, 0);

    const onButtonClick = React.useCallback(e=>{
        setResultValue({
            x : parseInt(x.current.value),
            y : parseInt(y.current.value),
            exec : exec.current.value
        }, [])
    });

    const textColor = React.useMemo(() => {
        return resultValue % 2 === 0 ? 'red' : 'blue';
    }, [resultValue]);

    return (
        <div>
            <h2>Calc</h2>
            <p>useReducer, useMemo, useCallback을 활용한 사칙연산</p>
            <hr />
            <input type="text" ref={x}/>
            <select ref={exec}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="text" ref={y}/>
            <button onClick={onButtonClick}>결과확인</button>
            <hr />
            <h3 style={{color:textColor}}>결과값: {resultValue}</h3>
        </div>
    );
};

export default Calc;