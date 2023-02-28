import styled, { css } from 'styled-components';
import { DialogContainerProp } from '../components/DialogBoxTypes';

export const DialogContainer = styled.div<DialogContainerProp>`
  ${(props) =>
    !props.isOpen
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000080;
  align-items: center;
  justify-content: center;
  z-index: 300;
`;
