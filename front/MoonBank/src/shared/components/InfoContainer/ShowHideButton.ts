import styled, { css } from 'styled-components';
import { ShowHideButtonProps } from './InfoContainerProps';

export const ShowHideButton = styled.button<ShowHideButtonProps>`
  ${({ styleProps, alignSelf, justifySelf }) => css`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    padding: ${styleProps?.buttonPadding ? styleProps.buttonPadding : '5px'};
    width: ${styleProps?.buttonWidth ? styleProps.buttonWidth : 'max-content'};
    height: ${styleProps?.buttonHeight ? styleProps.buttonHeight : 'min-content'};

    > svg {
      color: ${styleProps?.buttonIconColor ? styleProps.buttonIconColor : 'var(--Icons)'};
      height: 100%;
      width: 100%;
    }
    ${alignSelf &&
    css`
      align-self: ${alignSelf};
    `}

    ${justifySelf &&
    css`
      justify-self: ${justifySelf};
    `}
  `}
`;
