import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
    font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
    list-style: none;
}
  
  :root {
    --White: #ffffff;
    --Primary: #083870;
    --mainBg: #1e1e1e;
    --Dark: #222222;
    --Secondary:  #7f46a9;
    --LightGray: #bebebe;
    --DarkGray: #414141;
  }


`;

export default GlobalStyles;
