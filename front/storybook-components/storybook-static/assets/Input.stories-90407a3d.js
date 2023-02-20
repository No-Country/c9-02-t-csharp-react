var u=Object.defineProperty;var e=(o,l)=>u(o,"name",{value:l,configurable:!0});import{j as n}from"./jsx-runtime-5bdcf793.js";import{s}from"./styled-components.browser.esm-53a0d659.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-4cb24bae.js";const f=s.input`
  color: ${o=>o.fontColor};
  display: flex;
  background: ${o=>o.backgroundColor};
  outline: none;
  padding: 5px;
  border-style: 1px solid ${o=>o.border};
  border-radius: 5px;
  border-bottom: 2px solid;
  box-shadow: none;
  -webkit-box-shadow: inset 0 0 0 30px ${o=>o.backgroundColor};

  &::placeholder {
    color: ${o=>o.placeholderColor};
  }
  &:invalid {
    border-bottom: 2px solid #a90000 ${o=>o.borderBottom_Invalid};
    -webkit-text-fill-color: ${o=>o.fontColor};
  }
  &:placeholder-shown {
    border-bottom: 2px solid ${o=>o.borderBottom_Default};
    -webkit-text-fill-color: ${o=>o.placeholderColor};
    color: ${o=>o.placeholderColor};
  }

  &:focus,
  &:valid {
    caret-color: #c1c1c1;
    border-bottom: 2px solid ${o=>o.borderBottom_Valid};
  }
  &:valid {
    -webkit-text-fill-color: #ffffff;
  }
`,t=e(({placeholder:o="Your String",placeholderColor:l="#a8a8a8",backgroundColor:d="#333333",fontColor:i="#ffffff",border:b="#696969",borderBottom_Default:C="#00568f",borderBottom_Valid:g="#8300d4",borderBottom_Invalid:y="#a90000",...p})=>n(f,{backgroundColor:d,fontColor:i,placeholder:o,...p}),"Input"),a=t;try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"Your String"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"password"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ChangeEventHandler<HTMLInputElement> & ChangeEventHandler<Element>)"}},placeholderColor:{defaultValue:{value:"#a8a8a8"},description:"",name:"placeholderColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"#333333"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},fontColor:{defaultValue:{value:"#ffffff"},description:"",name:"fontColor",required:!1,type:{name:"string"}},border:{defaultValue:{value:"#696969"},description:"",name:"border",required:!1,type:{name:"string"}},borderBottom_Default:{defaultValue:{value:"#00568f"},description:"",name:"borderBottom_Default",required:!1,type:{name:"string"}},borderBottom_Valid:{defaultValue:{value:"#8300d4"},description:"",name:"borderBottom_Valid",required:!1,type:{name:"string"}},borderBottom_Invalid:{defaultValue:{value:"#a90000"},description:"",name:"borderBottom_Invalid",required:!1,type:{name:"string"}}}}}catch{}const r={control:"color",type:"string"},V={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import Input from './Input';\r
\r
const ColorController = { control: 'color', type: 'string' };\r
\r
export default {\r
  title: 'UI/Form/Input',\r
  component: Input,\r
  argTypes: {\r
    placeholderColor: ColorController,\r
    backgroundColor: ColorController,\r
    fontColor: ColorController,\r
    border: ColorController,\r
    borderBottom_Default: ColorController,\r
    borderBottom_Valid: ColorController,\r
    borderBottom_Invalid: ColorController,\r
    placeholder: { type: 'string' },\r
  },\r
} as ComponentMeta<typeof Input>;\r
\r
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;\r
\r
export const Default = Template.bind({});\r
Default.args = {\r
  placeholder: 'Your Name',\r
  placeholderColor: '#a8a8a8',\r
  backgroundColor: '#333333',\r
  fontColor: '#ffffff',\r
  border: '696969',\r
  borderBottom_Default: '#00568f',\r
  borderBottom_Valid: '#8300d4',\r
  borderBottom_Invalid: '#a90000',\r
};\r
`,locationsMap:{default:{startLoc:{col:47,line:21},endLoc:{col:76,line:21},startBody:{col:47,line:21},endBody:{col:76,line:21}}}}},title:"UI/Form/Input",component:a,argTypes:{placeholderColor:r,backgroundColor:r,fontColor:r,border:r,borderBottom_Default:r,borderBottom_Valid:r,borderBottom_Invalid:r,placeholder:{type:"string"}}},c=e(o=>n(a,{...o}),"Template"),m=c.bind({});m.args={placeholder:"Your Name",placeholderColor:"#a8a8a8",backgroundColor:"#333333",fontColor:"#ffffff",border:"696969",borderBottom_Default:"#00568f",borderBottom_Valid:"#8300d4",borderBottom_Invalid:"#a90000"};const k=["Default"];export{m as Default,k as __namedExportsOrder,V as default};
//# sourceMappingURL=Input.stories-90407a3d.js.map
