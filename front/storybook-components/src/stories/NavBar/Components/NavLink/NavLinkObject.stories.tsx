import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import NavLinkObject from './NavLinkObject';
import { IoHomeOutline, IoHome } from 'react-icons/io5';
import GlobalStyleDecorator from '../../../../shared/decorators/GlobalStyleDecorator';

export default {
  title: 'UI/Navigation/Moon NavLink',
  component: NavLinkObject,
  decorators: [withRouter, GlobalStyleDecorator],
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
} as ComponentMeta<typeof NavLinkObject>;

const Template: ComponentStory<typeof NavLinkObject> = (args) => <NavLinkObject {...args} />;

export const CurrentPage = Template.bind({});

CurrentPage.args = {
  to: '/home',
  label: 'My Home',
  statusIcon: { OnNonCurrentPage: IoHomeOutline, OnCurrentPage: IoHome },
};
CurrentPage.parameters = {
  reactRouter: {
    routePath: '/home',
    /*routeParams: { userId: '42' },
      searchParams: { tab: 'activityLog' },
      routeState: { fromPage: 'homePage' },//*/
  },
};

export const NonCurrentPage = Template.bind({});

NonCurrentPage.args = {
  to: '/home',
  label: 'My Home',
  statusIcon: { OnNonCurrentPage: IoHomeOutline, OnCurrentPage: IoHome },
};
NonCurrentPage.parameters = {
  reactRouter: {
    routePath: '/about',
    /*routeParams: { userId: '42' },
      searchParams: { tab: 'activityLog' },
      routeState: { fromPage: 'homePage' },//*/
  },
};
