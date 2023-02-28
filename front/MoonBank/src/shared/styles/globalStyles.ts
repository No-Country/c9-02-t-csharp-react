import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background: var(--mainBg);
  }

  label,
  span,
  text,
  input,
  h1,h2,h3,h4,h5,h6 {
    color: var(--White);
  }
  
  :root {
    // COLORS
    --Primary: #083870; // DarkBlue
    --Secondary:  #7f46a9; // Light Purple
    --Blue: #185088; // Blue
    --BlueA15: #18508826; // Blue Alpha 15%
    --BlueL: #306090; // Light Blue
    --BLueLA30: #3060904c; // Light Blue Alpha 30%
    --BlueG: #5878A0; // Gray Blue
    --Purple: #584880; // Purple
    --PurpleD: #483475; // Dark Purple
    --Warn: #B66200; // Orange 
    --OrangeL: #CF7000; // Light Orange
    --OrangeD: #965100; // Dark Orange
    --RedL: #FF4D77; // Light Red
    --RedInvalid: #B10B00; // Dark Red
    --White: #ffffff; // White
    --Icons: #d9d9d9; // White 85%
    --LightGray: #8C8C8C; //Light Gray
    --Gray: #727272; // Gray
    --DarkGray: #414141; // Dark Gray
    --Dark: #262626; // Black 60%
    --mainBg: #151515; // Black 85%
    --figmaBg: #1e1e1e; // ---------
    --BlackBg: #090909; // Black 90%
    --LightRed: #FF4D77;
    --LightGreen:  #25FFD8;

    //EFFECTS
    --MoonBoxShadow: 0px 0px 5px 2px var(--Dark); // for box-shadow css
    --NavBarShadow: 0px 0px 10px #483475; // for box-shadow css
  }

`;

export default GlobalStyles;
