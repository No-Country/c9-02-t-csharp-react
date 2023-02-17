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
  > .NavPage--active {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2px 15px;
    background: #26262600;
    text-decoration: none;
    color: #ffffff;
    > .PageIndicator {
      width: 8px;
      height: 100%;
    }
    > svg {
      height: 22px;
      width: auto;
      color: #d9d9d9;
    }
  }
  > .NavPage:hover {
    background: #18508826;
  }
  > .NavPage--active {
    background: #3060904c;
    > .PageIndicator {
      background: #5878a0;
    }
  }
`; //*/
