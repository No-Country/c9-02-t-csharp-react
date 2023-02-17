var i=Object.defineProperty;var a=(e,n)=>i(e,"name",{value:n,configurable:!0});import{s,a as m,j as t}from"./styled-components.browser.esm-9bc32780.js";import{w as d}from"./index.esm-2f7e6c34.js";import{N as l,a as p}from"./NavListElements-67e14c6b.js";import{N as c}from"./NavHeader-4500468c.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-4cb24bae.js";import"./iframe-8bd06380.js";import"./web.url.constructor-75ed5c2e.js";import"./es.number.is-integer-ab93bf85.js";import"./make-decorator-3cd8a5d0.js";const u=s.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  border-radius: 0 8px 8px 0;
  @media screen and (min-width: 0px) and (max-width: 700px) {
    width: 75%;
  }
  @media screen and (min-width: 700px) {
    width: 320px;
  }
  height: calc(100vh - ${e=>e.headerHeight});
  background: #262626;
`;function r(e){const{children:n}=e;return m(u,{className:"MoonBank__NavBar",headerHeight:e.headerHeight,children:[t(c,{name:e.name,surname:e.surname,credits:e.credits,userImgURL:e.userImgURL}),t(l,{children:n})]})}a(r,"NavBar");try{r.displayName="NavBar",r.__docgenInfo={description:"",displayName:"NavBar",props:{headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},surname:{defaultValue:null,description:"",name:"surname",required:!1,type:{name:"string"}},credits:{defaultValue:null,description:"",name:"credits",required:!0,type:{name:"number"}},userImgURL:{defaultValue:null,description:"",name:"userImgURL",required:!0,type:{name:"string"}}}}}catch{}const R={title:"UI/Navigation/MoonBank Navbar",component:r,decorators:[d],args:{headerHeight:"55px",children:p,name:"Carlos",surname:"Sorto",credits:430,userImgURL:"https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg"},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { withRouter } from 'storybook-addon-react-router-v6';\r
import { NavListElements } from './Components/NavList/NavListElements';\r
import NavBar from './NavBar';\r
\r
export default {\r
  title: 'UI/Navigation/MoonBank Navbar',\r
  component: NavBar,\r
  decorators: [withRouter],\r
  args: {\r
    headerHeight: '55px',\r
    children: NavListElements,\r
    name: 'Carlos',\r
    surname: 'Sorto',\r
    credits: 430,\r
    userImgURL:\r
      'https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg',\r
  },\r
  parameters: {\r
    backgrounds: {\r
      default: 'MoonBank App',\r
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
} as ComponentMeta<typeof NavBar>;\r
\r
const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;\r
\r
export const Home = Template.bind({});\r
Home.parameters = {\r
  reactRouter: {\r
    routePath: '/home',\r
  },\r
};\r
\r
export const Profile = Template.bind({});\r
Profile.parameters = {\r
  reactRouter: {\r
    routePath: '/profile',\r
  },\r
};\r
`,locationsMap:{home:{startLoc:{col:48,line:36},endLoc:{col:78,line:36},startBody:{col:48,line:36},endBody:{col:78,line:36}},profile:{startLoc:{col:48,line:36},endLoc:{col:78,line:36},startBody:{col:48,line:36},endBody:{col:78,line:36}}}},backgrounds:{default:"MoonBank App",values:[{name:"MoonBank Menu",value:"#262626"},{name:"MoonBank App",value:"#1E1E1E"}]}}},o=a(e=>t(r,{...e}),"Template"),h=o.bind({});h.parameters={reactRouter:{routePath:"/home"}};const g=o.bind({});g.parameters={reactRouter:{routePath:"/profile"}};const H=["Home","Profile"];export{h as Home,g as Profile,H as __namedExportsOrder,R as default};
//# sourceMappingURL=NavBar.stories-0acc3474.js.map
