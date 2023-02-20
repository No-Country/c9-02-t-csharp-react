import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

const ColorController = { control: 'color', type: 'string' };

export default {
  title: 'UI/Form/Input',
  component: Input,
  argTypes: {
    placeholderColor: ColorController,
    backgroundColor: ColorController,
    fontColor: ColorController,
    border: ColorController,
    borderBottom_Default: ColorController,
    borderBottom_Valid: ColorController,
    borderBottom_Invalid: ColorController,
    placeholder: { type: 'string' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholderColor: '#a8a8a8',
  backgroundColor: '#333333',
  fontColor: '#ffffff',
  border: '#696969',
  borderBottom_Default: '#0085dd',
  borderBottom_Valid: 'rgb(158, 3, 255)',
  borderBottom_Invalid: '#a90000',
  placeholder: 'Your Name',
};
