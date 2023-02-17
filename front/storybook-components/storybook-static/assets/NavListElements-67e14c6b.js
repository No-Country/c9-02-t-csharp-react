var d=Object.defineProperty;var n=(e,a)=>d(e,"name",{value:a,configurable:!0});import{s as l,j as t}from"./styled-components.browser.esm-9bc32780.js";import{N as p,I,a as h,b as m,c as u,d as y,e as f,f as v,g as N,h as g,i as C,j as L,k as x,l as O,m as _,n as k,o as H}from"./index.esm-2f7e6c34.js";const w=l.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  gap: 2px;
  height: min-content;
  list-style: none;
  overflow-y: auto;
`;function s(e){return t(w,{children:e.children})}n(s,"NavList");try{s.displayName="NavList",s.__docgenInfo={description:"",displayName:"NavList",props:{}}}catch{}const r=l.div`
  ${e=>e.orientation==="horizontal"?`height: 3px;
       width: 85%;`:`height: 85%;
       width: 3px;`}
  background: #414141;
`,o=n((e,a)=>({OnCurrentPage:e,OnNonCurrentPage:a}),"Icons"),i=n((e,a,c)=>t(p,{to:e,label:a,statusIcon:c}),"LinkGenerator"),j=[i("/home","Home",o(h,I)),i("/profile","Profile",o(u,m)),i("/help","Help",o(f,y)),t(r,{orientation:"horizontal"}),i("/balance","My Balance",o(N,v)),i("/activity","Activity",o(C,g)),i("/send","Send Money",o(x,L)),i("/link","Payment Link",o(_,O)),t(r,{orientation:"horizontal"}),i("/rewards","Rewards",o(H,k)),t(r,{orientation:"horizontal"}),t(r,{orientation:"horizontal"})];export{s as N,j as a};
//# sourceMappingURL=NavListElements-67e14c6b.js.map
