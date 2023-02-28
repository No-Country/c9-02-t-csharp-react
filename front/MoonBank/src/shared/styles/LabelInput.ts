import styled from 'styled-components';

type LabelInputStyleProps = {
  contentDirection: 'row' | 'column';
  width?: string;
  gap?: string;
};

export const LabelInput = styled.div<LabelInputStyleProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : '100%')};
  flex-direction: ${(props) => props.contentDirection};
  gap: ${(props) => (props.gap ? props.gap : '0px')};
  align-items: center;
`;
