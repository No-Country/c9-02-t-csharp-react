import styled, { css } from 'styled-components';

export type StyledLinkProps = {
  linkWidth?: string;
  linkHeight?: string;
  fontSize?: string;
  color?: string;
};

export const LinkStyledComponent = styled.button<StyledLinkProps>`
  ${(props) => css`
    display: flex;
    width: ${props.linkWidth ? props.linkWidth : 'max-content'};
    height: ${props.linkHeight ? props.linkHeight : 'min-content'};
    background: none;
    outline: none;
    border: none;
    > a {
      display: flex;
      font-size: ${props.fontSize ? props.fontSize : '12px'};
      text-decoration: none;
      color: ${props.color ? props.color : 'var(--White)'};
    }
  `}
`;
