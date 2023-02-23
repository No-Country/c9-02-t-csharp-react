import { ComponentMeta, ComponentStory } from '@storybook/react';
import MoonHeader from './MoonHeader';
import { withRouter } from 'storybook-addon-react-router-v6';
import GlobalStyles from '../../../../shared/styles/globalStyles';
import GlobalStyleDecorator from '../../../../shared/decorators/GlobalStyleDecorator';

export default {
  title: 'UI/Header/MoonHeader',
  component: MoonHeader,
  decorators: [withRouter, GlobalStyleDecorator],
  args: {
    labelTitle: 'MoonBank',
    isLogged: false,
  },
  parameters: {
    backgrounds: {
      default: 'MoonBank App',
      values: [
        {
          name: 'MoonBank Menu',
          value: '#262626',
        },
        {
          name: 'MoonBank App',
          value: '#1E1E1E',
        },
      ],
    },
  },
} as ComponentMeta<typeof MoonHeader>;

const Template: ComponentStory<typeof MoonHeader> = (args) => <MoonHeader {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  reactRouter: {
    routePath: '/login',
  },
};

export const Logged = Template.bind({});

Logged.args = {
  isLogged: true,
};
Logged.parameters = {
  reactRouter: {
    routePath: '/home',
  },
};
