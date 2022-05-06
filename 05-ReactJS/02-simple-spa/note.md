## NPM과 YARN
- `패키지 관리자`라고 하며 두 개는 기능과 목적이 동일하다.

### 구동 설명
- 만약 내가 의뢰를 받아 웹을 만들고 배포를 해야할 경우, 내가 사용한 오픈소스는 저작권 위반으로 모두 지워야 한다.

1. `npm init`을 실행하면 `package.json`을 만들기 위한 절차들이 진행되는데, 순서대로 진행
2. `package.json`이 생성
3. `npm install --save 설치할패키지이름` - json 파일에 `dependencies` 객체에 다운 받은 패키지가 생성됨(save라는 뜻은 json파일에 기록하라는 의미)
4. 배포할 때는 `package.json`을 제외하고 모두 제거

- 배포 후 웹을 받은 사용자는 아래와 같이 행동
1. `npm install`을 실행하여 json에 기록된 라이브러리를 일괄 다운로드 함

- `npm install --save 패키지이름` == `yarn add 패키지이름`
- `npm install` == `yarn install`
- `npm uninstall --save 패키지이름` == `yarn remove 패키지이름`



## Router - 하나의 URL에 실행되어야 하는 JS파일을 분배하는 기능
- 패키지 설치 -> `yarn add react-router-dom` : SPA앱을 만들 때 사용

### Router 적용
- index.js
```js
import { BrowserRouter } from 'react-router-dom';

/* 아래의 <App />을 <BrowserRouter>로 감싸준다. */
<BrowserRouter><App /></BrowserRouter>
```

- App.js
```js
import { Link, Routes, Route } from "react-router-dom";

/* 페이지 역할을 할 컴포넌트 명시 */
<Routes>
    <Route path="/" element={<Home/>} exact={true} />
</Routes>
```
- `path`는 컴포넌트가 반응할 url
- `element={ <컴포넌트 명시 />}`
- `exact={true}`는 첫 페이지로 사용되는 컴포넌트일 경우 명시

---

### SPA (Single Page Application)
- 하나의 HTML 페이지로 다수의 페이지 효과를 내는 구현 방식
- js 파일로 웹 페이지 화면을 변경하는 형태로 구성

#### 1) Router
- 분배하는 기능을 수행하는 소프트웨어나 하드웨어
- 리액트의 라우터는 URL에 의해 컴포넌트를 분배하는 기능을 한다.
- HTML5에서 Javascript에 추가된 기능중 history 객체를 통해 URL을 변조하는 기능이 있다.

#### 2) SPA 장점
- 페이지 이동 없이 JS에 의해 화면이 갱신되므로 실제로 네트워크 통신이 발생하지 않아 실행 속도가 빠르다.

#### 3) SPA 단점
- JS코드가 비대해 질 수 있다. 코드 스플리팅 기법으로 해결 가능
- 하나의 HTML이므로 SEO에 취약하다.(서버사이드 렌더링으로 해결 가능)
- 서버사이드 랜더링 = React + Node / React + PHP / React + Java(Spring)

---
#### App.js
```js
import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import DepartmentGet from './pages/DepartmentGet';
import DepartmentPath from './pages/DepartmentPath';

const App = () => {
    <nav>
        <Link to='/department_get?id=101&msg=hello'>[컴퓨터공학]</Link>
        <Link to='/department_path/201/hello'>[전기공학]</Link>
    </nav>

    <Routes>
        {/* 첫 페이지 사용 시 'exact={true}를 명시 */}
        <Route path='/' element={<Home/>} exact={true} />

        {/* 서브라우티 사용 시 '/*' 사용 -> 하위 모든 파일 의미 */}
        <Route path='/main/*' element={<Main/>} />

        {/* Get 파라미터 사용 */}
        <Route path='/department_get' element={<DepartmentGet/>} />

        {/* Path 파라미터 사용 시 ':' 사용 -> 변수로 인식 */}
        <Route path='/department_path/:id/:msg' element={<DepartmentPath/>} />

        {/* Path 속성 없이 Route 지정 -> 지정되지 않은 모든 요청에 반응 -> 단, 맨 마지막에 배치 */}
        <Route path='/*' element={<Error404/>} />
    </Routes>
};
```

#### DepartmentGet.js
- QureyString 방식으로 보안에 취약하기 때문에 Path 방식 이용
```js
import React from 'react';

// PATH 파라미터 추출 기능을 갖는 useParams() 함수를 react-router-dom 패키지로부터 참조함
import {useLocation} from 'react-router-dom';

const DepartmentGet = () => {
    const departmentList = {
        item: [
            {id: 101, dname: '컴퓨터공학과', loc: '1호관'},
            {id: 102, dname: '멀티미디어학과', loc: '2호관'},
        ]
    };

    const location = useLocation();     // ?id=101&msg=hello'
    const {search} = location;
    const query = new URLSearchParams(search);      // 객체 출력
    console.log(qeury.get('id'));       // 101
    console.log(qeury.get('msg'));       // hello


    const id = parseInt(query.get('id'));   // 파라미터를 정수로 변환
    let departmentItem = null;
    /* some은 'true'일 경우 반복문 빠져나옴 */
    departmentList.item.some((item, index) => {
        if(item.id === id){
            departmentItem = item;
            return true;
        }
        return false;
    });

    /* 조회 결과가 없는 경우 */
    if (!departmentItem){
        return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>)
    }

    /* 정상 화면 출력 */
    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.id}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    );
};
```

#### DepartmentPath.js
- Path 방식
```js
import React from 'react';

// PATH 파라미터 추출 기능을 갖는 useParams() 함수를 react-router-dom 패키지로부터 참조함
import {useParams} from 'react-router-dom';

const DepartmentPath = () => {
    const departmentList = {
        item: [
            {id: 201, dname: '전자공학과', loc: '3호관'},
            {id: 202, dname: '기계공학과', loc: '4호관'}
        ]
    };

    const params = useParams();     // {'id': 201, 'msg': 'hello'}
    console.log(params.id);     // 201
    console.log(params.msg);     // hello
    
    const id = parseInt(params.id);   // 파라미터를 정수로 변환
    let departmentItem = null;
    /* some은 'true'일 경우 반복문 빠져나옴 */
    departmentList.item.some((item, index) => {
        if(item.id === id){
            departmentItem = item;
            return true;
        }
        return false;
    });


    /* --- 처리결과 동일 --- */
}
```