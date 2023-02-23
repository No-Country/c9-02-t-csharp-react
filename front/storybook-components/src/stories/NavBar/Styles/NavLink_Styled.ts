import styled from 'styled-components';

export const NavLink_Styled = styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  min-width: 200px;
  width: 100%;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 20px;
  > .NavPage,
  > .NavPage--active,
  > .LogoutBTN {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2px 15px;
    background: #00000000;
    text-decoration: none;
    color: var(--White);
    > .PageIndicator {
      width: 8px;
      height: 100%;
    }
    > svg {
      height: 22px;
      width: auto;
      color: var(--Icons);
    }
  }
  > .NavPage:hover,
  > .LogoutBTN:hover {
    background: var(--BlueA15);
  }

  > .LogoutBTN {
    outline: none;
    border: none;
    > span {
      font-family: 'Montserrat';
      font-weight: bold;
      font-size: 20px;
    }
  }
  > .NavPage--active {
    background: var(--BLueLA30);
    > .PageIndicator {
      background: var(--BlueG);
    }
  }
`; //*/
