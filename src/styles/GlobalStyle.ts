import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

:root {
  --white: #fff;
  --black: #000;
  --navy-900: #000F1D;
  --navy-700: #001E3A;
  --navy-500: #003C74;
  --navy-400: #99B1C7;
  --navy-300: #C2D0DD;
  --navy-200: #E7ECF1;

  --green-900: #001C10;
  --green-700: #00723F;
  --green-500: #00723F;
  --green-400: #99F4CB;
  --green-300: #C2F8E0;
  --green-200: #E7FCF3;

  --aqua-700: #00FFB9;
  --aqua-500: #00FFB9;
  --aqua-400: #00FFD7;
  --aqua-300: #00FFF5;
  --aqua-200: #00FFFF;

  --gray-700: #444444;
  --gray-500: #767676;
  --gray-400: #D9D9D9;

  /**
    placeholder
  */
  --gray-300: rgb(154,154,154);
}

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
