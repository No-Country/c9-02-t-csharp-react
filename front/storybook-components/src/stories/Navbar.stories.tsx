import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar } from './Navbar'

export default {
    title: 'Navigation/navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
},
    
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}/>;

export const Nav = Template.bind({});

Nav.args = {
    list : ['HomeStory', "AboutStory", "ContactStoy"]
  };
