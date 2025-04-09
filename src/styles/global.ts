
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:focus {
 outline: 0;
 box-shadow: 0 0 0 2px ${(props)=>props.theme[' White']};
}

body {

    background: ${(props)=>props.theme[' Background']}};
    color: ${(props)=>props.theme['Text']}};
}

body,input,textarea, button{
    font-family: 'roboto',sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`; 