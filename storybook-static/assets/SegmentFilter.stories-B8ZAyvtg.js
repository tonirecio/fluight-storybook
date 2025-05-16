import{d as S}from"./index.esm-2RnB_YqG.js";const u={title:"Filters/SegmentFilter",component:S,parameters:{},layout:"centered"},p={id:1,origin:{code:"SCL",city:"Santiago",country:"Chile",airportName:"Arturo Merino Benítez",description:"Santiago, Chile - SCL",type:"airport",icon:"airport-icon.png"},destination:{code:"LIM",city:"Lima",country:"Peru",airportName:"Jorge Chávez",description:"Lima, Peru - LIM",type:"airport",icon:"airport-icon.png"},date:new Date("2025-07-01T00:00:00Z"),time:new Date("2025-07-01T13:45:00Z")},e={args:{index:0,segment:p,isDeleteButtonEnabled:!1}},t={args:{...e.args,isDeleteButtonEnabled:!1,onSegmentSelected:r=>{window.alert("Segment selected: "+JSON.stringify(r))}}},n={args:{...e.args,isDeleteButtonEnabled:!0,onDeleteSegment:r=>{window.alert("Segment delete request: "+JSON.stringify(r))}}};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    index: 0,
    segment: mockSegment,
    isDeleteButtonEnabled: false
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDeleteButtonEnabled: false,
    onSegmentSelected: segment => {
      window.alert("Segment selected: " + JSON.stringify(segment));
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,m,d;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDeleteButtonEnabled: true,
    onDeleteSegment: segment => {
      window.alert("Segment delete request: " + JSON.stringify(segment));
    }
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const f=["Default","onSegmentSelected","onDeleteSegment"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:f,default:u,onDeleteSegment:n,onSegmentSelected:t},Symbol.toStringTag,{value:"Module"}));export{y as S};
