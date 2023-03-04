import styled, { css } from 'styled-components';

type SubTitleProps = {
  textColor?: string;
  fontSize?: string;
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
};

export const SubTitle = styled.h3<SubTitleProps>`
  ${({ alignSelf, textColor, fontSize }) => css`
    align-self: ${alignSelf ? alignSelf : 'flex-start'};
    color: ${textColor ? textColor : 'var(--White)'};
    font-size: ${fontSize ? fontSize : '17px'};
  `}
`;
