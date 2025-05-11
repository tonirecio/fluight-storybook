import{D as l}from"./index.esm-DO8eKbQv.js";const i={title:"Filters/DatePicker",component:l,parameters:{docs:{description:{component:"This component allows you to select a date using a native date input."}},layout:"centered"}},e={args:{dateDefault:new Date,dataTestId:"date-picker",onDateSelected:a=>{window.alert("Selected date: "+a)}}},t={args:{...e.args,onDateSelected:a=>{window.alert("Selected date: "+a)}}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    dateDefault: new Date(),
    dataTestId: "date-picker",
    onDateSelected: selectedDate => {
      window.alert("Selected date: " + selectedDate);
    }
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onDateSelected: selectedDate => {
      window.alert("Selected date: " + selectedDate);
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const D=["Default","onDateSelected"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:D,default:i,onDateSelected:t},Symbol.toStringTag,{value:"Module"}));export{u as D};
