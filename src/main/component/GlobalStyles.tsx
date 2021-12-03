import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body {

        background-color: ${(props: any) => props.theme.body};
        color: ${(props: any) => props.theme.fontColor};
    }

    `;
export default GlobalStyles;
