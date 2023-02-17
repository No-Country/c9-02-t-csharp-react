var a=Object.defineProperty;var r=(n,o)=>a(n,"name",{value:o,configurable:!0});import{j as t}from"./styled-components.browser.esm-9bc32780.js";import{N as e}from"./NavHeader-4500468c.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-4cb24bae.js";const v={title:"UI/Navigation/Moon NavHeader",component:e,parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import NavHeader from './NavHeader';\r
\r
export default {\r
  title: 'UI/Navigation/Moon NavHeader',\r
  component: NavHeader,\r
  parameters: {\r
    backgrounds: {\r
      default: 'MoonBank Menu',\r
      values: [\r
        {\r
          name: 'MoonBank Menu',\r
          value: '#262626',\r
        },\r
        {\r
          name: 'MoonBank App',\r
          value: '#1E1E1E',\r
        },\r
      ],\r
    },\r
  },\r
} as ComponentMeta<typeof NavHeader>;\r
\r
const Template: ComponentStory<typeof NavHeader> = (args) => (\r
  <NavHeader {...args} />\r
);\r
\r
export const Default = Template.bind({});\r
Default.args = {\r
  name: 'Carlos',\r
  surname: 'Sorto',\r
  credits: 430,\r
  userImgURL:\r
    'https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg',\r
};\r
`,locationsMap:{default:{startLoc:{col:51,line:24},endLoc:{col:1,line:26},startBody:{col:51,line:24},endBody:{col:1,line:26}}}},backgrounds:{default:"MoonBank Menu",values:[{name:"MoonBank Menu",value:"#262626"},{name:"MoonBank App",value:"#1E1E1E"}]}}},s=r(n=>t(e,{...n}),"Template"),m=s.bind({});m.args={name:"Carlos",surname:"Sorto",credits:430,userImgURL:"https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg"};const f=["Default"];export{m as Default,f as __namedExportsOrder,v as default};
//# sourceMappingURL=NavHeader.stories-662fb626.js.map
