/** 리액트의 핵심은 비슷한 구조가 여러개 있으면 재사용 처리 하는 것 */


// (1) 리액트 패키지 참조(모든 js 파일의 최 상단에서 필수 명시)
import React from 'react';

// (3-1) 직접 완성한 컴포넌트 참조
import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent2';


/** (2) App이라는 이름의 함수형 컴포넌트(재사용 가능한 HTML 조각단위) 정의 */
// 프로젝트에서 컴포넌트를 렌더링(화면에 출력)하면 함수에서 반환하고 있는 내용의 브라우저에 나타난다.
// 반환되는 HTML 코드는 JSX 문법을 사용한다.
// JSX --> XML과 비슷한 React 전용 Javascript 확장 문법
function App() {
  return (
    /** return 내부는 태그가 한 개 여야한다. 만약 복수개를 써야할 경우 <div>로 묶어서 사용한다. */
    /** <br> 같은 단일 태그는 무조건 /를 끝에 붙여준다. */
    <div>
      <h1>Hello React</h1>

      {/** (3-2) MyComponent1과 MyComponent2라는 이름의 컴포넌트 출력 */}
      <MyComponent1></MyComponent1>
      <MyComponent2 />
    </div>
  );
}

export default App;
