import styled, { css } from 'styled-components';

export type ReturnButtonProps = {
  height?: string;
  width?: string;
  fontSize?: string;
};

export const ReturnBtnStyled = styled.button<ReturnButtonProps>`
  ${(props) => css`
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    background: #00000000;
    color: var(--White);
    font-family: 'Montserrat';

    width: ${props.width ? props.width : 'max-content'};
    height: ${props.height ? props.height : 'min-content'};

    > svg {
      height: 85%;
      width: auto;
      padding: 5px 15px;
      color: var(--BlueSL);
    }

    > span {
      display: flex;
      width: 100%;
      font-size: ${props.fontSize ? props.fontSize : '14px'};
      font-family: 'Montserrat';
      font-weight: 700;
      align-self: center;
      padding: 0px 10px;
    }

    transition: background 0.3s;
    &:hover {
      background: var(--BLueLA30);
    }
  `}
`;
