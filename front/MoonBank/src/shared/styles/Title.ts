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
};

export const Title = styled.h2<TitleProps>`
  ${({ alignSelf }) => css`
    align-self: ${alignSelf ? alignSelf : 'flex-start'};
  `}
`;
