import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  background: var(--mainBg);
  padding: 30px;
  hr {
    border-color: var(--LightGray);
    width: 100%;
  }
`;
