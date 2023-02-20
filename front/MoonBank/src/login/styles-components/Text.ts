import styled from 'styled-components';

interface Props {
  size?: string;
  weight?: string;
  align?: string;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
}

export const Text = styled.p<Props>`
  color: #ffffff;
  font-family: arial;
  font-family: 'Montserrat';
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
`;
