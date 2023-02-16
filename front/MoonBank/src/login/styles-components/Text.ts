import styled from "styled-components";

interface Props {
  size?: string;
  weight?: string;
  align?: string;

}

export const Text = styled.p<Props>`
color: #ffffff;
font-family: arial;
font-family: 'Montserrat';
font-size: ${ props => props.size};
font-weight: ${props => props.weight};
text-align: ${props => props.align};
`