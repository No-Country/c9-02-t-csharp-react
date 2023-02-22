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
  color: var(--White);
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  margin-top: ${({marginTop}) => marginTop};
  margin-right: ${({marginRight}) => marginRight};
  margin-bottom: ${({marginBottom}) => marginBottom};
  margin-left: ${({marginLeft}) => marginLeft};
`;
