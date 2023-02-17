var o=Object.defineProperty;var i=(e,n)=>o(e,"name",{value:n,configurable:!0});import{s as t,a as r,j as a}from"./styled-components.browser.esm-9bc32780.js";const l=t.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 10px 12px;
  gap: 10px;
  background: #483475;
  width: 100%;
  height: 70px;
  border-radius: 0 8px 0 0;

  > .NavProfile__UserSprite,
  > .NavProfile__UserSprite > img {
    border-radius: 100%;
  }
  > .NavProfile__UserSprite {
    width: 50px;
    height: 50px;
    border: 1px solid #727272;
    background: #262626;
    > img {
      width: 100%;
      height: 100%;
      //background: #ffffff;
      background-size: contain;
    }
  }

  > .NavProfile__UserInfo {
    display: grid;
    grid-template-rows: repeat(2, 1fr) 1.3fr;
    width: calc(100% - 10px - 50px);
    justify-items: center;

    > .NavProfile__UserInfo_Welcome,
    > .NavProfile__UserInfo_Welcome_Name {
      align-self: center;
      font-size: 14px;
      font-family: 'Montserrat';
      color: #ffffff;
    }
    > .NavProfile__UserInfo_Welcome_Name {
      font-weight: bold;
      font-size: 15px;
    }

    > .NavProfile__UserInfo_Credits {
      align-self: center;
      font-size: 12px;
      font-family: 'Montserrat';
      color: #ffffff;
      > .NavProfile__UserInfo_Credits_Amount {
        font-weight: bold;
      }
    }
  }
`;function s(e){return r(l,{className:"NavProfile",children:[a("div",{className:"NavProfile__UserSprite",children:a("img",{src:e.userImgURL,alt:""})}),r("div",{className:"NavProfile__UserInfo",children:[a("span",{className:"NavProfile__UserInfo_Welcome",children:"Welcome Back,"}),r("span",{className:"NavProfile__UserInfo_Welcome_Name",children:[e.name," ",e.surname]}),r("span",{className:"NavProfile__UserInfo_Credits",children:["Your Credits:"," ",r("span",{className:"NavProfile__UserInfo_Credits_Amount",children:[e.credits,"px"]})]})]})]})}i(s,"NavHeader");try{s.displayName="NavHeader",s.__docgenInfo={description:"",displayName:"NavHeader",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},surname:{defaultValue:null,description:"",name:"surname",required:!1,type:{name:"string"}},credits:{defaultValue:null,description:"",name:"credits",required:!0,type:{name:"number"}},userImgURL:{defaultValue:null,description:"",name:"userImgURL",required:!0,type:{name:"string"}}}}}catch{}export{s as N};
//# sourceMappingURL=NavHeader-4500468c.js.map
