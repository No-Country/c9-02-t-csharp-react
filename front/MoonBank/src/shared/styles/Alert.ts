import styled from 'styled-components';

interface Props {
  isVisible?: boolean;
}
export const Alert = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: #b66200;
  border-radius: 5px;

`;
