import breakPoints from 'styled-components-breakpoints';

/** 반응형 웹 구현 기준 사이즈 정의*/
const sizes = {
    sm : 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
};

/** 기준 사이즈를 활용하여 media query 생성 */
export default breakPoints(sizes);