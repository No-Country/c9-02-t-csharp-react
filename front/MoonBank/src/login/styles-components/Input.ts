import styled from 'styled-components';

interface Props {
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const Input = styled.input<Props>`
  background: #414141;
  border-bottom: 3px solid #083870;
  border-radius: 5px;
  font-weight: ${ props => props.fontWeight ? props.fontWeight : '700'};
  font-size: ${ props => props.fontSize ? props.fontSize : '12px'};
  margin: ${props => props.margin};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  margin-bottom: ${props => props.marginBottom};
  padding: 5px 8px;
`;
