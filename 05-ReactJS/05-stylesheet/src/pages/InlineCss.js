import React from 'react';


/* (3-1) /src 폴더 하위의 임의의 경로에 존재하는 이미지 파일을 참조 */
// --> 현재 소스파일을 기준으로 하는 상대경로로 지정
// --> 실행시에는 react에 의해 다른 경로로 복사된다.
import sample from '../assets/img/sample.png';


/**
 * Inline CSS를 적용한 컴포넌트
 * 태그안에 스타일을 넣어버림(권장x)
 * ex) <div style="..."></div>
 */
const InlineCss = () => {
    /* (1-1) CSS로 사용될 JSON 객체 정의 */
    const myStyle = {
        backgroundColor:'#f60',
        fontSize: '20px',
        color:'#0f6',
        fontWeight: 'bold',
        padding: '10px 25px',
        marginBottom: '10px'
    };

    return(
        <div>
            <h2>Inline</h2>

            <h3>변수로 정의된 CSS 참조하기</h3>
            {/* (1-2) JSON 객체를 style 속성에 적용 */}
            <div style={myStyle}>Hello React CSS (1)</div>


            <h3>직접 CSS 코딩하기</h3>
            {/* (2) CSS 직접 코딩 */}
            <div
                style={{
                    backgroundColor:'#ff0',
                    fontSize: '20px',
                    color:'#00f',
                    fontWeight: 'bold',
                    padding: '10px 25px',
                    marginBottom: '10px'
                }}>
                Hello React CSS (2)
            </div>


            <h3>이미지 참조하기</h3>
            {/* (3-2) 이미지 사용시 alt 속성을 지정 안하면 경고 발생함 */}
            <img src={sample} width="240" height="240" alt="샘플이미지" />

            {/* (3-3) public 폴더에 있는 파일들은 단순 절대결로로 참조 가능 (public 폴더 하위에 임의의 폴더생성 가능) */}
            <img src='/logo192.png' width="240" height="240" alt="react" />
        </div>
    );
}
export default InlineCss;