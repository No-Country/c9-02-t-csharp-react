import styled, { css } from 'styled-components';

type ContainerProps = {
  onLogging: boolean;
  headerHeight: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: calc(100vh - ${({ headerHeight }) => headerHeight});
  width: 100%;
  overflow-y: auto;
  background: var(--mainBg);
  padding-top: ${({ headerHeight }) => (headerHeight ? headerHeight : '55px')};
  padding-bottom: 50px;
  top: 55px;
  ${({ onLogging }) =>
    onLogging &&
    css`
      @media screen and (min-width: 860px) {
        padding-left: 320px;
      }
    `}
  hr {
    border-color: var(--LightGray);
    width: 100%;
  }
`;
