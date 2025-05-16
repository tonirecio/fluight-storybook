import{T as d}from"./index.esm-2RnB_YqG.js";const m={title:"Filters/TimePicker",component:d,parameters:{layout:"centered"}},e={args:{timeDefault:new Date,dataTestId:"time-component"}},t={args:{...e.args,onTimeSelected:c=>{window.alert("Time Selected: "+c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}).replace(/:\d{2}$/,""))}}};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    timeDefault: new Date(),
    dataTestId: "time-component"
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,n,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onTimeSelected: selectedTime => {
      window.alert("Time Selected: " + selectedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).replace(/:\\d{2}$/, ""));
    }
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const l=["Default","onTimeSelected"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:m,onTimeSelected:t},Symbol.toStringTag,{value:"Module"}));export{p as T};
