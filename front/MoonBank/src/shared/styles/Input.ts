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
  background: var(--DarkGray);
  border: none;
  border-bottom: 3px solid var(--Primary);
  border-radius: 5px;
  color: var(--White);
  font-weight: ${({fontWeight = '700'}) => fontWeight};
  font-size: ${({fontSize = '12px'}) => fontSize};
  margin-left: ${({marginLeft}) => marginLeft};
  margin-right: ${({marginRight}) => marginRight};
  margin-bottom: ${({marginBottom}) => marginBottom};
  margin-top: ${({marginTop}) => marginTop};
  padding: 5px 8px;
  width: 100%;
  height: 32px;
`;
