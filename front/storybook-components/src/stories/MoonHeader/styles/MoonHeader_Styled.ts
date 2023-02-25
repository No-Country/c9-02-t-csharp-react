import styled from 'styled-components';

export const MoonHeader_Styled = styled.header`
  display: flex;
  box-sizing: border-box;
  z-index: 200;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  background: var(--BlackBg);

  > .Header__MenuBTN,
  > .Header__AppName,
  > .Header__NotificationBTN {
    display: flex;
    > input {
      display: none;
    }
  }

  > .Header__MenuBTN,
  > .Header__NotificationBTN {
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 100%;
    > label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      > svg {
        padding: 10px;
        width: 100%;
        height: auto;
        color: var(--Icons);
      }
    }
  }

  > .Header__AppName {
    > span {
      font-family: 'Montserrat';
      font-weight: bold;
      height: 20px;
    }
  }
`;
