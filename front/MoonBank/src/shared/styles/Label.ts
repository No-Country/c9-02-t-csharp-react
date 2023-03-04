import styled, { css } from 'styled-components';

type labelStyleProps = {
  justifyText?: 'start' | 'center' | 'end' | 'justify';
  width?: string;
  fontSize?: string;
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
};

export const Label = styled.label<labelStyleProps>`
  display: flex;
  height: min-content;
  align-items: center;

  width: ${({ width }) => (width ? width : 'max-content')};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};

  ${({ justifyText }) =>
    justifyText === 'start' || justifyText === 'center' || justifyText === 'end'
      ? css`
          justify-content: ${justifyText};
        `
      : justifyText === 'justify'
      ? css`
          justify-content: start;
          text-align: justify;
        `
      : css`
          justify-content: start;
        `};

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
