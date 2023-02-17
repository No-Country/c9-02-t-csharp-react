var l=Object.defineProperty;var e=(o,a)=>l(o,"name",{value:a,configurable:!0});import{j as r,s}from"./styled-components.browser.esm-9bc32780.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-4cb24bae.js";const t=e(({list:o=["home","about","contact"],backgroundColor:a="#ffff"})=>r(i,{style:{backgroundColor:a},children:r("ul",{children:o.map((n,c)=>r("li",{children:n},c))})}),"Navbar"),i=s.nav`
  background-color: red;
  color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;try{t.displayName="Navbar",t.__docgenInfo={description:"",displayName:"Navbar",props:{list:{defaultValue:{value:'["home", "about", "contact"]'},description:"",name:"list",required:!1,type:{name:"string[]"}},backgroundColor:{defaultValue:{value:"#ffff"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const f={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";\r
\r
import { Navbar } from './Navbar'\r
\r
export default {\r
    title: 'Navigation/navbar',\r
    component: Navbar,\r
    argTypes: {\r
        backgroundColor: { control: 'color' },\r
},\r
    \r
} as ComponentMeta<typeof Navbar>;\r
\r
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}/>;\r
\r
export const Nav = Template.bind({});\r
\r
Nav.args = {\r
    list : ['HomeStory', "AboutStory", "ContactStoy"]\r
  };\r
`,locationsMap:{nav:{startLoc:{col:48,line:14},endLoc:{col:77,line:14},startBody:{col:48,line:14},endBody:{col:77,line:14}}}}},title:"Navigation/navbar",component:t,argTypes:{backgroundColor:{control:"color"}}},p=e(o=>r(t,{...o}),"Template"),d=p.bind({});d.args={list:["HomeStory","AboutStory","ContactStoy"]};const g=["Nav"];export{d as Nav,g as __namedExportsOrder,f as default};
//# sourceMappingURL=Navbar.stories-dfdf7664.js.map
