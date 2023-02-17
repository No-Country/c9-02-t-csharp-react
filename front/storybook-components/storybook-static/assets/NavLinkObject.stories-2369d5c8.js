var i=Object.defineProperty;var n=(r,s)=>i(r,"name",{value:s,configurable:!0});import{j as c}from"./styled-components.browser.esm-9bc32780.js";import{N as e,w as l,I as o,a as t}from"./index.esm-2f7e6c34.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-4cb24bae.js";import"./iframe-8bd06380.js";import"./web.url.constructor-75ed5c2e.js";import"./es.number.is-integer-ab93bf85.js";import"./make-decorator-3cd8a5d0.js";const M={title:"UI/Navigation/Moon NavLink",component:e,decorators:[l],parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { withRouter } from 'storybook-addon-react-router-v6';\r
import NavLinkObject from './NavLinkObject';\r
import { IoHomeOutline, IoHome } from 'react-icons/io5';\r
\r
export default {\r
  title: 'UI/Navigation/Moon NavLink',\r
  component: NavLinkObject,\r
  decorators: [withRouter],\r
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
} as ComponentMeta<typeof NavLinkObject>;\r
\r
const Template: ComponentStory<typeof NavLinkObject> = (args) => (\r
  <NavLinkObject {...args} />\r
);\r
\r
export const CurrentPage = Template.bind({});\r
\r
CurrentPage.args = {\r
  to: '/home',\r
  label: 'My Home',\r
  statusIcon: { OnNonCurrentPage: IoHomeOutline, OnCurrentPage: IoHome },\r
};\r
CurrentPage.parameters = {\r
  reactRouter: {\r
    routePath: '/home',\r
    /*routeParams: { userId: '42' },\r
      searchParams: { tab: 'activityLog' },\r
      routeState: { fromPage: 'homePage' },//*/\r
  },\r
};\r
\r
export const NonCurrentPage = Template.bind({});\r
\r
NonCurrentPage.args = {\r
  to: '/home',\r
  label: 'My Home',\r
  statusIcon: { OnNonCurrentPage: IoHomeOutline, OnCurrentPage: IoHome },\r
};\r
NonCurrentPage.parameters = {\r
  reactRouter: {\r
    routePath: '/about',\r
    /*routeParams: { userId: '42' },\r
      searchParams: { tab: 'activityLog' },\r
      routeState: { fromPage: 'homePage' },//*/\r
  },\r
};\r
`,locationsMap:{"current-page":{startLoc:{col:55,line:27},endLoc:{col:1,line:29},startBody:{col:55,line:27},endBody:{col:1,line:29}},"non-current-page":{startLoc:{col:55,line:27},endLoc:{col:1,line:29},startBody:{col:55,line:27},endBody:{col:1,line:29}}}},backgrounds:{default:"MoonBank Menu",values:[{name:"MoonBank Menu",value:"#262626"},{name:"MoonBank App",value:"#1E1E1E"}]}}},a=n(r=>c(e,{...r}),"Template"),m=a.bind({});m.args={to:"/home",label:"My Home",statusIcon:{OnNonCurrentPage:o,OnCurrentPage:t}};m.parameters={reactRouter:{routePath:"/home"}};const u=a.bind({});u.args={to:"/home",label:"My Home",statusIcon:{OnNonCurrentPage:o,OnCurrentPage:t}};u.parameters={reactRouter:{routePath:"/about"}};const h=["CurrentPage","NonCurrentPage"];export{m as CurrentPage,u as NonCurrentPage,h as __namedExportsOrder,M as default};
//# sourceMappingURL=NavLinkObject.stories-2369d5c8.js.map
