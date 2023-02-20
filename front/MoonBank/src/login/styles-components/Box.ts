import styled from 'styled-components';

type directions = 'column' | 'row';
type align = 'flex-start' | 'center' | 'flex-end';
interface Props {
  direction?: directions;
  alignContent?: align;
}

export const Box = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: ${(props) => props.alignContent};
`;
