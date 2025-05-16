import{S as g}from"./index.esm-2RnB_YqG.js";import{a as o}from"./index-B-lxVbXh.js";const u={title:"Filters/SegmentData",component:g,parameters:{layout:"centered"}},t={args:{originDefault:{},destinationDefault:{},dateTimeDefault:new Date("2025-06-15T10:30:00Z")}},n={args:{...t.args,onOriginLocationSelected:e=>{window.alert("Origin location selected: "+JSON.stringify(e))},onDestinationLocationSelected:e=>{window.alert("Destination location selected: "+JSON.stringify(e))},onDateSelected:o("onDateSelected"),onTimeSelected:o("onTimeSelected")}},a={args:{...t.args,onDateSelected:e=>{window.alert("Date selected: "+e)},onTimeSelected:e=>{window.alert("Time selected: "+e)}}};var i,r,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    originDefault: {},
    destinationDefault: {},
    dateTimeDefault: new Date("2025-06-15T10:30:00Z")
  }
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var s,l,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onOriginLocationSelected: location => {
      window.alert("Origin location selected: " + JSON.stringify(location));
    },
    onDestinationLocationSelected: location => {
      window.alert("Destination location selected: " + JSON.stringify(location));
    },
    onDateSelected: action("onDateSelected"),
    onTimeSelected: action("onTimeSelected")
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,S,D;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onDateSelected: date => {
      window.alert("Date selected: " + date);
    },
    onTimeSelected: time => {
      window.alert("Time selected: " + time);
    }
  }
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const p=["Default","onLocationSelected","onDateTimeSelected"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:p,default:u,onDateTimeSelected:a,onLocationSelected:n},Symbol.toStringTag,{value:"Module"}));export{T as S};
