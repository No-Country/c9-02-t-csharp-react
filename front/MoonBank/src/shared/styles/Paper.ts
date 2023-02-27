import styled, { css } from 'styled-components';

export const Paper = styled.div<{ flexGap?: string }>`
  background: var(--Dark);
  display: flex;
  border-radius: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  ${(props) =>
    props.flexGap
      ? css`
          gap: ${props.flexGap};
        `
      : css`
          gap: 0px;
        `}

  min-width: 260px;
  @media screen and (min-width: 0px) and (max-width: 760px) {
    width: 60%;
  }
  @media screen and (min-width: 760px) {
    width: 380px;
  }
`;
