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
  transition: transform 1.3s;

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
    width: 45px;
    height: 100%;
    > label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      > svg {
        padding: 12px;
        width: 100%;
        height: auto;
        @media screen and (min-width: 0px) and (max-width: 860px) {
          color: var(--Icons);
        }
      }
      > svg.HD__MenuLabel {
        @media screen and (min-width: 860.1px) {
          color: #00000000;
        }
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
