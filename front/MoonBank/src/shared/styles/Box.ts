import styled, { css } from 'styled-components';

type directions = 'column' | 'row';
type align = 'flex-start' | 'center' | 'flex-end';
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
  alert?: boolean;
}

export const Box = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  align-items: ${(props) => props.alignContent};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};

  ${(props) =>
    props.alert &&
    css`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `}
`;
