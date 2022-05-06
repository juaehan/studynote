# React
- 리액트의 핵심은 비슷한 구조가 여러개 있을 경우 재사용의 목적이다.
- 리액트가 가지고 있는 가상의 구조 = Virtual DOM 이라고 한다.

## 리액트 동작 원리
1. `src`폴더 내의 내용들 `WebPack`이라고 하는 명령프롬프트가 있음
2. 프롬프트 안에는 `Babel`이라는 도구가 있음
3. `Babel`의 역할은 코드압축, ES6로 작성된 코드를 ES5로 변환하여 모든 브라우저에 동작되는 코드로 재해석을 함
4. 위의 작업을 `병합`하고, 병합된 파일이 `Virtual DOM`을 생성하여 `index.html`에 포함시켜 화면에 `갱신`하여 출력시킴

### (1) 리액트 패키지 참조(모든 js 파일의 상단에 필수로 명시)
```js
import React from 'react';
```

### (2) 직접 완성한 컴포넌트 참조
```js
import 이름 from './경로/파일명';
```

## 1. App.js
- 재사용 가능한 함수형 컴포넌트 파일
- 브라우저에 출력되는 파일
- JSX 문법 사용 (XML과 비슷한 React 전용 Javascript 확장 문법)
```js
function App() {
    // return 내부에는 항상 JSX 문법이여야 한다.
    // JSX: 무조건 단 하나의 태그요소만 반환해야 한다.
    // ---> 복수개의 태그일 경우 <div>로 묶어준다.
    // 단일 태그는 뒤에 '/'를 붙여준다.
    return(
        <div>
            {/* 직접 완성한 컴포넌트 출력 */}
            <MyComponent1></MyComponent1>
            <MyComponent2/>
        </div>
    );
};
export default App;
```