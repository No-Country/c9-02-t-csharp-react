import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavHeader from './NavHeader';

export default {
  title: 'UI/Navigation/Moon NavHeader',
  component: NavHeader,
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
} as ComponentMeta<typeof NavHeader>;

const Template: ComponentStory<typeof NavHeader> = (args) => <NavHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Carlos',
  surname: 'Sorto',
  credits: 430,
  userImgURL: 'https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg',
};
