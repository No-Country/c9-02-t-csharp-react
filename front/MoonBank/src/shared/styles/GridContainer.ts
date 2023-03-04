import styled, { css } from 'styled-components';

type GridContainerProps = {
  direction: 'row' | 'column';
  width?: string;
  height?: string;
  directionTemplate?: string;
  directionAuto?: string;
  gridGap?: string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'min-content')};
  align-items: center;
  justify-items: center;

  ${({ gridGap }) => css`
    ${gridGap &&
    css`
      gap: ${gridGap};
    `}
  `}

  ${({ direction, directionTemplate, directionAuto }) =>
    direction === 'row'
      ? css`
          grid-template-rows: ${directionTemplate ? directionTemplate : '1fr'};
          grid-auto-rows: ${directionAuto ? directionAuto : '1fr'};
          grid-auto-flow: row;
        `
      : css`
          grid-template-columns: ${directionTemplate ? directionTemplate : '1fr'};
          grid-auto-columns: ${directionAuto ? directionAuto : '1fr'};
          grid-auto-flow: column;
        `}
`;
