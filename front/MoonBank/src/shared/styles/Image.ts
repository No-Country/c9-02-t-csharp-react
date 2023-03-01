import styled, { css } from 'styled-components';

type ImageProps = {
  imageWidth: string;
  imageHeight: string;
  borderRadius?: string;
};

export const Image = styled.img<ImageProps>`
  ${(props) => css`
    background-size: contain;
    width: ${props.imageWidth};
    height: ${props.imageHeight};
    border-radius: ${props.borderRadius ? props.borderRadius : '3px'};
  `};
`;
