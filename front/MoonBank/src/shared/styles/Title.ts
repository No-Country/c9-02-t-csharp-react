import styled, { css } from 'styled-components';

type TitleProps = {
  alignSelf?:
    | 'auto'
    | 'baseline'
    | 'center'
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'safe'
    | 'unsafe'
    | 'self-start'
    | 'self-end'
    | 'stretch';
  fontSize?: string;
  textColor?: string;
  textMargin?: string;
};

export const Title = styled.h2<TitleProps>`
  ${({ alignSelf, fontSize, textColor, textMargin }) => css`
    align-self: ${alignSelf ? alignSelf : 'flex-start'};

    ${fontSize &&
    css`
      font-size: ${fontSize};
    `}

    ${textColor &&
    css`
      color: ${textColor};
    `}

    ${textMargin &&
    css`
      margin: ${textMargin};
    `}
  `}
`;
