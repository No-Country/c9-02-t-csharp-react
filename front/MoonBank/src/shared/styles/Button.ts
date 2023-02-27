import styled, { css } from 'styled-components';

interface Props {
  variant: 'blue' | 'orange';
  width?: string;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const Button = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '140px')};
  border-radius: 5px;
  border: none;
  padding: 10px;
  color: var(--White);
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  cursor: pointer;
  transition: background 0.2s;

  ${(props) =>
    props.variant === 'blue'
      ? css`
          background: var(--Primary);
          &:hover {
            background: var(--Blue);
          }
          &:active {
            background: var(--BlueL);
          }
        `
      : css`
          background: var(--OrangeD);
          &:hover {
            background: var(--Warn);
          }
          &:active {
            background: var(--OrangeL);
          }
        `}
`;
