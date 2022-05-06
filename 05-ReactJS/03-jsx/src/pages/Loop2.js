import React from 'react';

/**
 * 
 * jsx 반복처리 (1) - 함수를 통한 반복문 활용
 */

const Loop2 = () => {
    // 화면에 표시할 데이터
    const myArray = ['hello', 'world'];

    // 화면에 표시할 반복 컴포넌트
    const myArrayItem = myArray.map((item, index) => {
        return (
            // 반복적으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 고유한 값을 갖는 key 속성을 포함해야 함 (React 권고사항)
            <li key={index}>{item}</li>
        );
    });
    
    return(
        <div>
            <h2>Loop2</h2>
            <ul>{myArrayItem}</ul>
        </div>
    );
};
export default Loop2;