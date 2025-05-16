import{P as g}from"./index.esm-2RnB_YqG.js";const d={title:"Filters/PassengersFilter",component:g,parameters:{layout:"centered"}},e={args:{}},s={args:{...e.args,onPassengersSelected:l=>{window.alert("Passengers selected: "+JSON.stringify(l))}}};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {}
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var n,o,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onPassengersSelected: passengers => {
      window.alert("Passengers selected: " + JSON.stringify(passengers));
    }
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const i=["Default","onPassengersSelected"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:d,onPassengersSelected:s},Symbol.toStringTag,{value:"Module"}));export{m as P};
