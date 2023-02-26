import { DecoratorFn } from '@storybook/react';
import GlobalStyles from '../styles/globalStyles';

const GlobalStyleDecorator: DecoratorFn = (Story) => (
  <>
    <GlobalStyles />
    <Story />
  </>
);

export default GlobalStyleDecorator;
