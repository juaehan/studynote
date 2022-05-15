/**
 * @filename: GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일시트.
 * @author: 한주애 (juae0806@gmail.com)
 */

/** 패키지 참조 */
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

/**
 * 전역 스타일 시트를 정의한 객체
 * @type {GlobalStyleComponent<{}, DefalutTheme>}
 */

const GlobalStyles = createGlobalStyle`
    ${reset};
    body {
        font-family: 'Nanum Gothic'; 
        font-weight:400;
    }
`;
export default GlobalStyles;