import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import NavList from './NavList';
import { NavListElements } from './NavListElements';

export default {
  title: 'UI/Navigation/Moon NavList',
  component: NavList,
  decorators: [withRouter],
  args: {
    children: NavListElements,
  },
  parameters: {
    backgrounds: {
      default: 'MoonBank Menu',
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
} as ComponentMeta<typeof NavList>;

const Template: ComponentStory<typeof NavList> = (args) => (
  <NavList {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  reactRouter: {
    routePath: '/home',
  },
};

export const About = Template.bind({});
About.parameters = {
  reactRouter: {
    routePath: '/profile',
  },
};

export const Help = Template.bind({});
Help.parameters = {
  reactRouter: {
    routePath: '/help',
  },
};

export const Balance = Template.bind({});
Balance.parameters = {
  reactRouter: {
    routePath: '/balance',
  },
};

export const Activity = Template.bind({});
Activity.parameters = {
  reactRouter: {
    routePath: '/activity',
  },
};

export const SendMoney = Template.bind({});
SendMoney.parameters = {
  reactRouter: {
    routePath: '/send',
  },
};
