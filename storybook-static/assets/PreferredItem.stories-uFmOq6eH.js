import{c}from"./index.esm-2RnB_YqG.js";const l={title:"Filters/PreferredItem",component:c,parameters:{layout:"centered"}},e={args:{itemCode:"IB"}},r={args:{...e.args,onItemDeleted:d=>{window.alert("Item remove event: "+d)}}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    itemCode: "IB"
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var s,n,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onItemDeleted: item => {
      window.alert("Item remove event: " + item);
    }
  }
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const i=["Default","onItemDeleted"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:l,onItemDeleted:r},Symbol.toStringTag,{value:"Module"}));export{u as P};
