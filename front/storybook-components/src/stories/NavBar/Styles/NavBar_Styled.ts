import styled from 'styled-components';

export const NavBar_Styled = styled.div<{ headerHeight: string }>`
  position: fixed;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  border-radius: 0 8px 8px 0;
  @media screen and (min-width: 0px) and (max-width: 700px) {
    width: 75%;
  }
  @media screen and (min-width: 700px) {
    width: 320px;
  }
  z-index: 150;
  height: calc(100vh - ${(props) => props.headerHeight});
  top: ${(props) => props.headerHeight};
  background: var(--Dark);
  box-shadow: 0 0 10px var(--PurpleD);
`;
