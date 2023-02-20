import styled from 'styled-components';

interface Props {
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const Input = styled.input<Props>`
  background: #414141;
  border: none;
  border-bottom: 3px solid #083870;
  border-radius: 5px;
  color: #ffffff;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  padding: 5px 8px;
  width: 100%;
  height: 32px;
`;
