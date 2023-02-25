import styled, { css } from 'styled-components';
import { NavBarStyleProps } from '../NavbarTypes';

export const NavBar_Styled = styled.div<NavBarStyleProps>`
  position: absolute;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 260px;
  border-radius: 0 8px 8px 0;
  z-index: 150;

  height: calc(100vh - ${(props) => props.headerHeight});
  top: ${(props) => props.headerHeight};
  background: var(--Dark);
  box-shadow: 0 0 10px var(--PurpleD);

  transition: transform 0.4s;

  @media screen and (min-width: 0px) and (max-width: 860px) {
    width: 60%;
    ${(props) =>
      !props.isToggled
        ? css`
            transform: translate(-600px);
          `
        : css`
            transform: translate(0px);
          `}
  }
  @media screen and (min-width: 860px) {
    width: 320px;
  }
`;
