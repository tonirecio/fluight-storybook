import{T as m}from"./index.esm-DO8eKbQv.js";const d={title:"Filters/TimePicker",component:m,parameters:{docs:{description:{component:"This component allows you to pick any time you want"}},layout:"centered"}},e={args:{timeDefault:new Date,dataTestId:"time-component"}},t={args:{...e.args,onTimeSelected:s=>{window.alert("Time Selected: "+s.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}).replace(/:\d{2}$/,""))}}};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    timeDefault: new Date(),
    dataTestId: "time-component"
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var n,a,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const l=["Default","onTimeSelected"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:d,onTimeSelected:t},Symbol.toStringTag,{value:"Module"}));export{u as T};
