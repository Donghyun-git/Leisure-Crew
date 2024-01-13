import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  /* rem 값의 기준을 잡기 위함 16px -> 10px */
  font-family: 'Noto Sans KR', sans-serif;
}
body {
  margin: 0;
  letter-spacing: -0.5px;
}
input, textarea { 
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}
input:focus {
  outline: none;
}
button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
a{
  text-decoration: none;
  color: inherit;
}
`;
