import styled from 'styled-components';

export const Paper = styled.div`
  background: var(--Dark);
  display: flex;
  border-radius: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 30rem;
  box-shadow: var(--MoonBoxShadow);
  margin-top: 2rem;
  @media (max-width: 600px) {
    width: 19rem;
  }
`;
