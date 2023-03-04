import { ComponentMeta, ComponentStory } from '@storybook/react';
import DialogBox from './DialogBox';
import { withRouter } from 'storybook-addon-react-router-v6';
import GlobalStyleDecorator from '../../../shared/decorators/GlobalStyleDecorator';

export default {
  title: 'UI/Modals/DialogBox',
  component: DialogBox,
  decorators: [withRouter, GlobalStyleDecorator],
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
          value: '#151515',
        },
      ],
    },
  },
  argTypes: {
    dialogType: { control: { type: 'radio' } },
  },
  args: {
    to: '/login',
    onConfirmAction: () => {
      prompt('Su Nombre?');
    },
  },
} as ComponentMeta<typeof DialogBox>;

const Template: ComponentStory<typeof DialogBox> = (args) => <DialogBox {...args} />;

export const InformationDialog = Template.bind({});

InformationDialog.parameters = {
  reactRouter: {
    routePath: '/home',
  },
};
InformationDialog.args = {
  isOpen: true,
  dialogType: 'information',
  title: 'Log Out?',
  message: 'Are you sure to close the current session?',
};

export const WarningDialog = Template.bind({});

WarningDialog.parameters = {
  reactRouter: {
    routePath: '/send',
  },
};
WarningDialog.args = {
  isOpen: true,
  dialogType: 'warning',
  title: 'Confirm Transfer?',
  message: 'Are you sure to close the current session?',
  extraMessage: 'This action cannot be reverted after confirmation!',
};
