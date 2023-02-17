var s=Object.defineProperty;var o=(e,t)=>s(e,"name",{value:t,configurable:!0});import{s as c,j as a}from"./styled-components.browser.esm-9bc32780.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-4cb24bae.js";const d=c.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${e=>e.primary&&`
  color: white;
  background-color: #1ea7fd;
  `}

  ${e=>e.secondary&&`
  color: #333;
  background-color: red;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `}

  ${e=>e.size==="small"&&`
    font-size: 12px;
    padding: 10px 16px;
    background-color: blue;
  `}

  ${e=>e.size==="medium"&&`
  font-size: 14px;
  padding: 11px 20px;
  background-color: green;
  `}

  ${e=>e.size==="large"&&`
  font-size: 16px;
  padding: 12px 24px;
  background-color: red;
  `}
`,r=o(({label:e="myButton",primary:t=!1,size:l="small",backgroundColor:g="#ffff",...i})=>a(d,{label:"Button label",type:"button",size:l,...i,children:e}),"Button");try{r.displayName="Button",r.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:{value:"myButton"},description:"",name:"label",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"#ffff"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const z={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";\r
\r
import { Button } from "./Button";\r
\r
export default {\r
  title: "UI/Button",\r
  component: Button,\r
  argTypes: {\r
    backgroundColor: { control: "color" },\r
  },\r
} as ComponentMeta<typeof Button>;\r
\r
\r
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;\r
\r
export const Primary = Template.bind({});\r
\r
Primary.args = {\r
  primary: true,\r
  label: "Button",\r
};\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
  label: "Button",\r
};\r
\r
export const Small = Template.bind({});\r
Small.args = {\r
  size: 'small',\r
  label: "SMALLButton",\r
};\r
\r
export const Medium = Template.bind({});\r
Medium.args = {\r
  size: 'medium',\r
  label: "MIDButton",\r
};\r
\r
export const Large = Template.bind({});\r
Large.args = {\r
  size: 'large',\r
  label: "LARGEButton",\r
};\r
\r
`,locationsMap:{primary:{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}},secondary:{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}},small:{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}},medium:{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}},large:{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}}}}},title:"UI/Button",component:r,argTypes:{backgroundColor:{control:"color"}}},n=o(e=>a(r,{...e}),"Template"),u=n.bind({});u.args={primary:!0,label:"Button"};const p=n.bind({});p.args={label:"Button"};const m=n.bind({});m.args={size:"small",label:"SMALLButton"};const y=n.bind({});y.args={size:"medium",label:"MIDButton"};const b=n.bind({});b.args={size:"large",label:"LARGEButton"};const S=["Primary","Secondary","Small","Medium","Large"];export{b as Large,y as Medium,u as Primary,p as Secondary,m as Small,S as __namedExportsOrder,z as default};
//# sourceMappingURL=Button.stories-d02aca01.js.map
