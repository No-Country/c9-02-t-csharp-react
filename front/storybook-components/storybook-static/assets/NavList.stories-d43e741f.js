var a=Object.defineProperty;var r=(e,o)=>a(e,"name",{value:o,configurable:!0});import{j as l}from"./styled-components.browser.esm-9bc32780.js";import{w as i}from"./index.esm-2f7e6c34.js";import{N as n,a as c}from"./NavListElements-67e14c6b.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-4cb24bae.js";import"./iframe-8bd06380.js";import"./web.url.constructor-75ed5c2e.js";import"./es.number.is-integer-ab93bf85.js";import"./make-decorator-3cd8a5d0.js";const k={title:"UI/Navigation/Moon NavList",component:n,decorators:[i],args:{children:c},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { withRouter } from 'storybook-addon-react-router-v6';\r
import NavList from './NavList';\r
import { NavListElements } from './NavListElements';\r
\r
export default {\r
  title: 'UI/Navigation/Moon NavList',\r
  component: NavList,\r
  decorators: [withRouter],\r
  args: {\r
    children: NavListElements,\r
  },\r
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
} as ComponentMeta<typeof NavList>;\r
\r
const Template: ComponentStory<typeof NavList> = (args) => (\r
  <NavList {...args} />\r
);\r
\r
export const Default = Template.bind({});\r
Default.parameters = {\r
  reactRouter: {\r
    routePath: '/home',\r
  },\r
};\r
\r
export const About = Template.bind({});\r
About.parameters = {\r
  reactRouter: {\r
    routePath: '/profile',\r
  },\r
};\r
\r
export const Help = Template.bind({});\r
Help.parameters = {\r
  reactRouter: {\r
    routePath: '/help',\r
  },\r
};\r
\r
export const Balance = Template.bind({});\r
Balance.parameters = {\r
  reactRouter: {\r
    routePath: '/balance',\r
  },\r
};\r
\r
export const Activity = Template.bind({});\r
Activity.parameters = {\r
  reactRouter: {\r
    routePath: '/activity',\r
  },\r
};\r
\r
export const SendMoney = Template.bind({});\r
SendMoney.parameters = {\r
  reactRouter: {\r
    routePath: '/send',\r
  },\r
};\r
`,locationsMap:{default:{startLoc:{col:49,line:30},endLoc:{col:1,line:32},startBody:{col:49,line:30},endBody:{col:1,line:32}},about:{startLoc:{col:49,line:30},endLoc:{col:1,line:32},startBody:{col:49,line:30},endBody:{col:1,line:32}},help:{startLoc:{col:49,line:30},endLoc:{col:1,line:32},startBody:{col:49,line:30},endBody:{col:1,line:32}},balance:{startLoc:{col:49,line:30},endLoc:{col:1,line:32},startBody:{col:49,line:30},endBody:{col:1,line:32}},activity:{startLoc:{col:49,line:30},endLoc:{col:1,line:32},startBody:{col:49,line:30},endBody:{col:1,line:32}},"send-money":{startLoc:{col:49,line:30},endLoc:{col:1,line:32},startBody:{col:49,line:30},endBody:{col:1,line:32}}}},backgrounds:{default:"MoonBank Menu",values:[{name:"MoonBank Menu",value:"#262626"},{name:"MoonBank App",value:"#1E1E1E"}]}}},t=r(e=>l(n,{...e}),"Template"),s=t.bind({});s.parameters={reactRouter:{routePath:"/home"}};const p=t.bind({});p.parameters={reactRouter:{routePath:"/profile"}};const m=t.bind({});m.parameters={reactRouter:{routePath:"/help"}};const d=t.bind({});d.parameters={reactRouter:{routePath:"/balance"}};const u=t.bind({});u.parameters={reactRouter:{routePath:"/activity"}};const y=t.bind({});y.parameters={reactRouter:{routePath:"/send"}};const x=["Default","About","Help","Balance","Activity","SendMoney"];export{p as About,u as Activity,d as Balance,s as Default,m as Help,y as SendMoney,x as __namedExportsOrder,k as default};
//# sourceMappingURL=NavList.stories-d43e741f.js.map
