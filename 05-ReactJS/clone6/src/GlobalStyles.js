import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    body{
        font-family: 'Nanum Gothic';
        font-weight:400;
    }
`;
export default GlobalStyles;