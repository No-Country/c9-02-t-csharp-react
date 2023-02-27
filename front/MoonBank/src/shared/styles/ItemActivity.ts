import styled from 'styled-components';
import { FlexContainer } from './sharedStyles';

export const ItemContainer = styled(FlexContainer)`
  background: #414141;
  border-radius: 8px;
  margin: 0.2rem 0;
  padding: 8px;
  width: 100%;
`;
export const ItemActivity = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  gap: 10px;

  width: 100%;
`;
