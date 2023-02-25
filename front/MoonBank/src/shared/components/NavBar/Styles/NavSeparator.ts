import styled from 'styled-components';

export const NavSeparator = styled.div<{
  orientation: 'horizontal' | 'vertical';
  thickness: string;
}>`
  ${(props) =>
    props.orientation === 'horizontal'
      ? `height: ${props.thickness};
       width: 85%;`
      : `height: 85%;
       width: ${props.thickness}`};
  background: var(--DarkGray);
`;
