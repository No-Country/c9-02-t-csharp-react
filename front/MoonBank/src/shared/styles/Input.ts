import styled from 'styled-components';

interface Props {
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  justifyInput?: 'start' | 'center' | 'end';
}

export const Input = styled.input<Props>`
  background: var(--DarkGray);
  -webkit-box-shadow: inset 0 0 0 30px var(--DarkGray);
  border: none;
  outline: none;
  border-radius: 5px;
  color: var(--White);
  font-weight: ${({ fontWeight = '700' }) => fontWeight};
  font-size: ${({ fontSize = '12px' }) => fontSize};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};
  padding: 5px 8px;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 32px;
  text-align: ${({ justifyInput }) => (justifyInput ? justifyInput : 'start')};

  transition: border 0.4s;

  &:invalid {
    border-bottom: 3px solid var(--RedInvalid);
  }

  &:focus,
  &:valid {
    -webkit-text-fill-color: var(--White);
    caret-color: var(--Icons);
    border-bottom: 3px solid var(--BlueL);
  }
  &::placeholder {
    color: var(--LightGray);
    -webkit-text-fill-color: var(--LightGray);
  }
  &:placeholder-shown {
    border-bottom: 3px solid var(--Primary);
    -webkit-text-fill-color: var(--LightGray);
  }
`;
