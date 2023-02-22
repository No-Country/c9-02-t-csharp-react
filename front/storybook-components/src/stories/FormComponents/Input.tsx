import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface InputStyleProps {
  placeholderColor?: string;
  backgroundColor?: string;
  fontColor?: string;
  border?: string;
  borderBottom_Default?: string;
  borderBottom_Valid?: string;
  borderBottom_Invalid?: string;
}

interface InputProps extends InputStyleProps {
  className?: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password';
  onChange?: ChangeEventHandler<HTMLInputElement> & ChangeEventHandler;
}

const Input_Styled = styled.input<InputStyleProps>`
  color: ${(props) => props.fontColor};
  display: flex;
  background: ${(props) => props.backgroundColor};
  outline: none;
  padding: 8px;
  border: 1px solid ${(props) => props.border};
  border-radius: 6px;
  border-bottom: 4px solid ${(props) => props.borderBottom_Default};
  box-shadow: none;
  -webkit-box-shadow: inset 0 0 0 30px ${(props) => props.backgroundColor};

  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }
  &:invalid {
    border-bottom: 4px solid ${(props) => props.borderBottom_Invalid};
    -webkit-text-fill-color: ${(props) => props.fontColor};
  }
  &:placeholder-shown {
    border-bottom: 4px solid ${(props) => props.borderBottom_Default};
    -webkit-text-fill-color: ${(props) => props.placeholderColor};
  }

  &:focus,
  &:valid {
    caret-color: #c1c1c1;
    border-bottom: 4px solid ${(props) => props.borderBottom_Valid};
  }
  &:valid {
    -webkit-text-fill-color: #ffffff;
  }
`;

const Input = ({
  placeholder = 'Your String',
  placeholderColor = '#a8a8a8',
  backgroundColor = '#333333',
  fontColor = '#ffffff',
  border = '#696969',
  borderBottom_Default = '#00568f',
  borderBottom_Valid = '#8300d4',
  borderBottom_Invalid = '#a90000',
  ...props
}: InputProps) => {
  return (
    <Input_Styled
      placeholder={placeholder}
      placeholderColor={placeholderColor}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      border={border}
      borderBottom_Default={borderBottom_Default}
      borderBottom_Valid={borderBottom_Valid}
      borderBottom_Invalid={borderBottom_Invalid}
      {...props}
    />
  );
};

export default Input;
