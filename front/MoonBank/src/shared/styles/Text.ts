import styled, { css } from 'styled-components';

interface Props {
  fontSize?: string;
  weight?: string;
  align?: 'start' | 'center' | 'end' | 'justify';
  alignSelf?: 'start' | 'center' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end';
  justifySelf?: 'start' | 'center' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end';
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
  fontWeight?:
    | 'Thin_100'
    | 'ExtraLight_200'
    | 'Light_300'
    | 'Normal_400'
    | 'Medium_500'
    | 'DemiBold_600'
    | 'Bold_700'
    | 'ExtraBold_800'
    | 'Heavy_900';
}

export const Text = styled.p<Props>`
  color: var(--White);
  text-align: ${(props) => (props.align ? props.align : 'start')};
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};

  ${({ alignSelf }) =>
    alignSelf
      ? css`
          align-self: ${alignSelf};
        `
      : ''}

  ${({ justifySelf }) =>
    justifySelf
      ? css`
          justify-self: ${justifySelf};
        `
      : ''}

  @media screen and (min-width: 0px) and (max-width: 460px) {
    font-size: 12px;
  }
  @media screen and (min-width: 460px) and (max-width: 660px) {
    font-size: 13px;
  }
  @media screen and (min-width: 660px) and (max-width: 860px) {
    font-size: 14px;
  }
  @media screen and (min-width: 860px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : '15px')};
  }

  font-weight: ${({ fontWeight }) =>
    fontWeight === 'Thin_100'
      ? '100'
      : fontWeight === 'ExtraLight_200'
      ? '200'
      : fontWeight === 'Light_300'
      ? '300'
      : fontWeight === 'Normal_400'
      ? '400'
      : fontWeight === 'Medium_500'
      ? '500'
      : fontWeight === 'DemiBold_600'
      ? '600'
      : fontWeight === 'Bold_700'
      ? '700'
      : fontWeight === 'ExtraBold_800'
      ? '800'
      : fontWeight === 'Heavy_900'
      ? '900'
      : '500'};
`;
