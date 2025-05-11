import{a as u}from"./index.esm-DO8eKbQv.js";import{a as r}from"./index-B-lxVbXh.js";const p={title:"Filters/SegmentFilter",component:u,parameters:{docs:{description:{component:"This component shows you de default behaviour of the component with the delete 'x' button. Can't use it because allways there must be one segment."}}},layout:"centered"},D={id:1,origin:{code:"SCL",city:"Santiago",country:"Chile",airportName:"Arturo Merino Benítez",description:"Santiago, Chile - SCL",type:"airport",icon:"airport-icon.png"},destination:{code:"LIM",city:"Lima",country:"Peru",airportName:"Jorge Chávez",description:"Lima, Peru - LIM",type:"airport",icon:"airport-icon.png"},date:new Date("2025-07-01T00:00:00Z"),time:new Date("2025-07-01T13:45:00Z")},e={args:{index:0,segment:D,isDeleteButtonEnabled:!1,onSegmentSelected:r("onSegmentSelected"),onDeleteSegment:r("onDeleteSegment")}},t={args:{...e.args,isDeleteButtonEnabled:!1,onSegmentSelected:o=>{window.alert("Segment selected: "+JSON.stringify(o))}}},n={args:{...e.args,isDeleteButtonEnabled:!0,onDeleteSegment:o=>{window.alert("Segment delete request: "+JSON.stringify(o))}}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    index: 0,
    segment: mockSegment,
    isDeleteButtonEnabled: false,
    onSegmentSelected: action("onSegmentSelected"),
    onDeleteSegment: action("onDeleteSegment")
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDeleteButtonEnabled: false,
    onSegmentSelected: segment => {
      window.alert("Segment selected: " + JSON.stringify(segment));
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,d,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDeleteButtonEnabled: true,
    onDeleteSegment: segment => {
      window.alert("Segment delete request: " + JSON.stringify(segment));
    }
  }
}`,...(S=(d=n.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};const f=["Default","onSegmentSelected","onDeleteSegment"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:f,default:p,onDeleteSegment:n,onSegmentSelected:t},Symbol.toStringTag,{value:"Module"}));export{w as S};
