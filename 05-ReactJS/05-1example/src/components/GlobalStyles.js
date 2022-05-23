import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Noto Sans KR';
    }

    body {
        margin: 0;
        padding: 0;
    }

    .container {
        padding: 20px;
    }
`;

export default GlobalStyles;