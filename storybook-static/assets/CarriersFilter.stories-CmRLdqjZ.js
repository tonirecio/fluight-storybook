import{C}from"./index.esm-2RnB_YqG.js";const F={title:"Filters/CarriersFilter",component:C,parameters:{layout:"centered"}},e={args:{}},r={args:{...e.args,onGetData:()=>[{code:"IB",name:"Iberia"},{code:"AA",name:"American Airlines"},{code:"BA",name:"British Airways"},{code:"AF",name:"Air France"},{code:"LH",name:"Lufthansa"}]}},a={args:{...e.args,onCarriersFilterSelected:n=>{window.alert("Selected carriers: "+JSON.stringify(n))}}},s={args:{...e.args,onCarriersFilterModifierSelected:n=>{window.alert("Selected carriers modifier: "+JSON.stringify(n))}}};var t,i,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onGetData: () => {
      return [{
        code: "IB",
        name: "Iberia"
      }, {
        code: "AA",
        name: "American Airlines"
      }, {
        code: "BA",
        name: "British Airways"
      }, {
        code: "AF",
        name: "Air France"
      }, {
        code: "LH",
        name: "Lufthansa"
      }];
    }
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onCarriersFilterSelected: selectedCarriers => {
      window.alert("Selected carriers: " + JSON.stringify(selectedCarriers));
    }
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,S,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onCarriersFilterModifierSelected: selectedCarriers => {
      window.alert("Selected carriers modifier: " + JSON.stringify(selectedCarriers));
    }
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const A=["Default","onGetData","onCarriersFilterSelected","onCarriersFilterModifierSelected"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:A,default:F,onCarriersFilterModifierSelected:s,onCarriersFilterSelected:a,onGetData:r},Symbol.toStringTag,{value:"Module"}));export{y as C};
