import styled from 'styled-components';

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
}

export const Box = styled.div<Props>`
  display: flex;
  flex-direction: ${({direction}) => direction};
  justify-content: center;
<<<<<<< HEAD:front/MoonBank/src/login/styled-components/Box.ts
  align-items: ${({alignContent}) => alignContent};
=======
  align-items: ${(props) => props.alignContent};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
>>>>>>> 47e02849beb26f1e6c1e0bac1ad6748fb573c6c7:front/MoonBank/src/login/styles-components/Box.ts
`;
