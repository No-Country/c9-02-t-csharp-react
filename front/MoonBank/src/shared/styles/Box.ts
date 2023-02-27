import styled, { css } from 'styled-components';

type directions = 'column' | 'row';
type align = 'flex-start' | 'center' | 'flex-end';
type justify = 'space-between' | 'center' | 'space-around' | 'space-evenly';
interface Props {
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
  direction?: directions;
  alignContent?: align;
  background?: string;
  borderRadius?: string;
  width?: string | string[];
  justifyContent?: justify;
}

export const Box = styled.div<Props>`
  display: flex;
  
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent}) => justifyContent};
  align-items: ${(props) => props.alignContent};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  width: ${props => props.width ?? '100%'};
  @media (min-width: 768px) {
    width: ${props => props.width && props.width[0] ? props.width[0] : '50%'};
  }
  @media (min-width: 860px) {
    margin-left: ${(props) => props.marginLeft && props.marginLeft[0] ? props.marginLeft[0] : '1rem' };
  }
`;
