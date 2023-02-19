import styled from 'styled-components';

export const NavBar_Styled = styled.div<{ headerHeight: string }>`
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
  height: ${(props) => props.headerHeight};
  background: #262626;
  box-shadow: 0 0 10px #483475;
`;
