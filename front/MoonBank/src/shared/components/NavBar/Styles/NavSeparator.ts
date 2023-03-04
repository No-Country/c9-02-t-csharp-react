import styled, { css } from 'styled-components';

export const NavSeparator = styled.div<{
  orientation: 'horizontal' | 'vertical';
  thickness: string;
  size?: string;
}>`
  ${(props) =>
    props.orientation === 'horizontal' && !props.size
      ? css`
          height: ${props.thickness};
          width: 85%;
        `
      : props.orientation === 'vertical' && !props.size
      ? css`
          height: 85%;
          width: ${props.thickness};
        `
      : props.orientation === 'horizontal' && props.size
      ? css`
          height: ${props.thickness};
          width: ${props.size};
        `
      : props.orientation === 'vertical' && props.size
      ? css`
          height: ${props.size};
          width: ${props.thickness};
        `
      : css`
          height: 2px;
          width: 85%;
        `};
  background: var(--DarkGray);
`;
