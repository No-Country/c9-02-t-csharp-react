import styled, { css } from 'styled-components';

interface flexRowContainerProps {
  space?: 'between' | 'around';
  withAmount?: boolean;
}

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin: 1.2rem 0;
`;
export const FlexRowContainer = styled.div<flexRowContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--White);
  gap: 0.5rem;
  width: 100%;
  margin: 1.2rem 0;
label {
  width: 100%;
}
  ${(props) =>
    props.space === 'between' &&
    css`
      justify-content: space-between;

    `}

    ${(props) =>
    props.withAmount  &&
    css`
      justify-content: space-between;

      p {
        width: 100%;
      }
      input {
        width: 50%;
      }
    `}
`;
export const Header = styled.header`
  background-color: var(--BlackBg);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 2rem;
  width: 100%;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem 0;

  p {
    align-self: flex-end;
  }
`;
