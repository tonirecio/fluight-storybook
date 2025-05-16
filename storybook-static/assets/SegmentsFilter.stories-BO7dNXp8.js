import{e as l}from"./index.esm-2RnB_YqG.js";import"./index-B-lxVbXh.js";const g={title:"Filters/SegmentsFilter",component:l,parameters:{},layout:"centered"},e={args:{}},t={args:{...e.args,onSegmentsSelected:m=>{window.alert("Segment selected: "+JSON.stringify(m))}}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {}
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var o,a,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onSegmentsSelected: segment => {
      window.alert("Segment selected: " + JSON.stringify(segment));
    }
  }
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const i=["Default","onSegmentsSelected"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:g,onSegmentsSelected:t},Symbol.toStringTag,{value:"Module"}));export{p as S};
