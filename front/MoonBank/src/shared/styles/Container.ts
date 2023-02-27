import styled from 'styled-components';

type directions = 'column' | 'row';
type align = 'flex-start' | 'center' | 'flex-end';
interface Props {
  margin?: string;
  marginLeft?: string | string[];
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
  direction?: directions;
  alignContent?: align;
  justifyContent?: align;
  background?: string;
  borderRadius?: string;
  width?: string | string[];
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  background: var(--mainBg);
  padding: 30px;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${(props) => props.alignContent};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  width: ${props => props.width ?? '100%'};
  @media (min-width: 768px) {
    width: ${props => props.width && props.width[0] ? props.width[0] : '100%'};
  }
  @media (min-width: 860px) {
    margin-left: ${(props) => props.marginLeft && props.marginLeft[0] ? props.marginLeft[0] : '0' };
  }

  hr {
    border-color: var(--LightGray);
    width: 100%;
  }
`;
