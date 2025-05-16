import{L}from"./index.esm-2RnB_YqG.js";const N={title:"Filters/LocationPicker",component:L,parameters:{layout:"centered"}},e={args:{previousSearches:[],selectedLocation:null,placeholderValue:"Origin",dataTestId:"origin-location-picker",onLocationSelected:O=>{window.alert("Selected location: "+JSON.stringify(O))}}},r={args:{...e.args,placeholderValue:"Destination",dataTestId:"destination-location-picker"}},o={args:{...e.args,previousSearches:[{code:"MAD",city:"Madrid",country:"Spain",airportName:"All Airports",description:"Madrid, Spain (All Airports)",type:"city",icon:"house"},{code:"BCN",city:"Barcelona",country:"Spain",airportName:"All Airports",description:"Barcelona, Spain (All Airports)",type:"city",icon:"house"}]}},t={args:{...e.args,previousSearches:[],selectedLocation:{code:"MAD",city:"Madrid",country:"Spain",airportName:"All Airports",description:"Madrid, Spain (All Airports)",type:"city",icon:"house"}}},n={args:{...e.args,onGetData:()=>[{code:"Test1",city:"City Test 1",country:"Spain",airportName:"All Airports",description:"Test 1, Spain (All Airports)",type:"city",icon:"house"},{code:"Test 2",city:"City Test 2",country:"Spain",airportName:"All Airports",description:"Test 2, Spain (All Airports)",type:"city",icon:"house"}]}};var i,a,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    previousSearches: [],
    selectedLocation: null,
    placeholderValue: "Origin",
    dataTestId: "origin-location-picker",
    onLocationSelected: location => {
      window.alert("Selected location: " + JSON.stringify(location));
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Origin.args,
    placeholderValue: "Destination",
    dataTestId: "destination-location-picker"
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,u,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Origin.args,
    previousSearches: [{
      code: "MAD",
      city: "Madrid",
      country: "Spain",
      airportName: "All Airports",
      description: "Madrid, Spain (All Airports)",
      type: "city",
      icon: "house"
    }, {
      code: "BCN",
      city: "Barcelona",
      country: "Spain",
      airportName: "All Airports",
      description: "Barcelona, Spain (All Airports)",
      type: "city",
      icon: "house"
    }]
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var A,S,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Origin.args,
    previousSearches: [],
    selectedLocation: {
      code: "MAD",
      city: "Madrid",
      country: "Spain",
      airportName: "All Airports",
      description: "Madrid, Spain (All Airports)",
      type: "city",
      icon: "house"
    }
  }
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var m,h,T;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Origin.args,
    onGetData: () => {
      return [{
        code: "Test1",
        city: "City Test 1",
        country: "Spain",
        airportName: "All Airports",
        description: "Test 1, Spain (All Airports)",
        type: "city",
        icon: "house"
      }, {
        code: "Test 2",
        city: "City Test 2",
        country: "Spain",
        airportName: "All Airports",
        description: "Test 2, Spain (All Airports)",
        type: "city",
        icon: "house"
      }];
    }
  }
}`,...(T=(h=n.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const M=["Origin","Destination","PreviousSearch","SelectedLocation","OnGetData"],v=Object.freeze(Object.defineProperty({__proto__:null,Destination:r,OnGetData:n,Origin:e,PreviousSearch:o,SelectedLocation:t,__namedExportsOrder:M,default:N},Symbol.toStringTag,{value:"Module"}));export{v as L};
