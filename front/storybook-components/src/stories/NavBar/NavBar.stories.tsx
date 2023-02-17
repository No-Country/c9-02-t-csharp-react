import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { NavListElements } from './Components/NavList/NavListElements';
import NavBar from './NavBar';

export default {
  title: 'UI/Navigation/MoonBank Navbar',
  component: NavBar,
  decorators: [withRouter],
  args: {
    headerHeight: '55px',
    children: NavListElements,
    name: 'Carlos',
    surname: 'Sorto',
    credits: 430,
    userImgURL:
      'https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg',
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
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Home = Template.bind({});
Home.parameters = {
  reactRouter: {
    routePath: '/home',
  },
};

export const Profile = Template.bind({});
Profile.parameters = {
  reactRouter: {
    routePath: '/profile',
  },
};
