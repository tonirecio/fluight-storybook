import{D as l}from"./index.esm-2RnB_YqG.js";const D={title:"Filters/DatePicker",component:l,parameters:{layout:"centered"}},e={args:{dateDefault:new Date,dataTestId:"date-picker",onDateSelected:a=>{window.alert("Selected date: "+a)}}},t={args:{...e.args,onDateSelected:a=>{window.alert("Selected date: "+a)}}};var r,o,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    dateDefault: new Date(),
    dataTestId: "date-picker",
    onDateSelected: selectedDate => {
      window.alert("Selected date: " + selectedDate);
    }
  }
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var s,c,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onDateSelected: selectedDate => {
      window.alert("Selected date: " + selectedDate);
    }
  }
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const i=["Default","onDateSelected"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:D,onDateSelected:t},Symbol.toStringTag,{value:"Module"}));export{u as D};
