import styled from 'styled-components';

export const NavSeparator = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  ${(props) =>
    props.orientation === 'horizontal'
      ? `height: 3px;
       width: 85%;`
      : `height: 85%;
       width: 3px;`}
  background: var(--DarkGray);
`;
