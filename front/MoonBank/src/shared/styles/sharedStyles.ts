import styled, { css } from 'styled-components';

interface flexContainerProps {
  marginBox?: string;
  flexGap?: string;
  direction?: 'column' | 'row';
}

interface flexRowContainerProps {
  space?: 'between' | 'around';
  withAmount?: boolean;
  marginBox?: string;
  flexGap?: string;
}

export const FlexContainer = styled.div<flexContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  align-items: center;
  justify-content: space-between;
  gap: ${({ flexGap }) => (flexGap ? flexGap : '0.8rem')};
  margin: ${({ marginBox }) => (marginBox ? marginBox : '1.2rem 0')};
`;
export const FlexRowContainer = styled.div<flexRowContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--White);
  gap: 0.5rem;
  width: 100%;
  margin: ${({ marginBox }) => (marginBox ? marginBox : '1.2rem 0')};
  label {
    width: 100%;
  }
  ${(props) =>
    props.space === 'between' &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.withAmount &&
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
