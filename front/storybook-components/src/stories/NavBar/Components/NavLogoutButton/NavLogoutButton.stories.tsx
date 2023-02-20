import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavLogoutButton from './NavLogoutButton';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'UI/Navigation/Moon LogoutButton',
  component: NavLogoutButton,
  decorators: [withRouter],
  argTypes: {
    confirmedLogoutAction: { type: 'function' },
  },
  args: {
    label: 'Logout',
    to: '/login',
    confirmedLogoutAction: () => {
      confirm('Confirm again?');
    },
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
} as ComponentMeta<typeof NavLogoutButton>;

const Template: ComponentStory<typeof NavLogoutButton> = (args) => (
  <NavLogoutButton {...args} />
);

export const Default = Template.bind({});

Default.parameters = {
  reactRouter: {
    routePath: '/home',
  },
};
