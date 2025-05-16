import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as d}from"./index-BqIVwv1J.js";import{M as t}from"./index-BGurhFi8.js";import{S as c}from"./SegmentData.stories-B9EeZzjU.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";function s(i){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SegmentData"})," component is a React component designed for managing and displaying flight segment data. It integrates several subcomponents, such as ",e.jsx(n.code,{children:"LocationPicker"}),", ",e.jsx(n.code,{children:"DatePicker"}),", and ",e.jsx(n.code,{children:"TimePicker"}),", to allow users to select origin and destination locations, as well as the date and time of the flight."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"segmentdataprops",children:e.jsx(n.code,{children:"SegmentDataProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"originDefault"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"location | null"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"null"})}),e.jsxs(n.td,{children:["The default origin location to display in the origin ",e.jsx(n.code,{children:"LocationPicker"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"destinationDefault"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"location | null"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsxs(n.td,{children:["The default destination location to display in the destination ",e.jsx(n.code,{children:"LocationPicker"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dateTimeDefault"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Date | null | undefined"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsxs(n.td,{children:["The default date and time to display in the ",e.jsx(n.code,{children:"DatePicker"})," and ",e.jsx(n.code,{children:"TimePicker"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dataTestId"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'segment-data'"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute for the main container, useful for testing."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onGetOriginData"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(filter: string) => location[]"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function to fetch filtered origin location data based on user input."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onGetDestinationData"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(filter: string) => location[]"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function to fetch filtered destination location data based on user input."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onOriginLocationSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(location: location) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function triggered when an origin location is selected."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onDestinationLocationSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(location: location) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function triggered when a destination location is selected."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onDateSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(date: Date) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsxs(n.td,{children:["A callback function triggered when a date is selected in the ",e.jsx(n.code,{children:"DatePicker"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onTimeSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(date: Date) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsxs(n.td,{children:["A callback function triggered when a time is selected in the ",e.jsx(n.code,{children:"TimePicker"}),"."]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typescript-types",children:"TypeScript Types"}),`
`,e.jsx(n.h3,{id:"location",children:e.jsx(n.code,{children:"location"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"location"})," type represents a location object with the following structure:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type location = {\r
  code: string; // The airport code (e.g., "JFK").\r
  city: string; // The city name (e.g., "New York").\r
  country: string; // The country name (e.g., "USA").\r
  airportName: string; // The name of the airport (e.g., "John F. Kennedy International").\r
};
`})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Origin and Destination Selection"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Integrates two ",e.jsx(n.code,{children:"LocationPicker"})," components for selecting the origin and destination locations."]}),`
`,e.jsxs(n.li,{children:["Supports dynamic filtering of locations using the ",e.jsx(n.code,{children:"onGetOriginData"})," and ",e.jsx(n.code,{children:"onGetDestinationData"})," callbacks."]}),`
`,e.jsxs(n.li,{children:["Displays placeholders (",e.jsx(n.code,{children:'"Origin"'})," and ",e.jsx(n.code,{children:'"Destination"'}),") when no default values are provided."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date and Time Selection"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"DatePicker"})," and ",e.jsx(n.code,{children:"TimePicker"})," components for selecting the flight's date and time."]}),`
`,e.jsxs(n.li,{children:["Supports default values for both date and time using the ",e.jsx(n.code,{children:"dateTimeDefault"})," prop."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Triggers ",e.jsx(n.code,{children:"onOriginLocationSelected"})," and ",e.jsx(n.code,{children:"onDestinationLocationSelected"})," when the user selects an origin or destination location."]}),`
`,e.jsxs(n.li,{children:["Triggers ",e.jsx(n.code,{children:"onDateSelected"})," and ",e.jsx(n.code,{children:"onTimeSelected"})," when the user selects a date or time."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Customizable Testing IDs"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"data-testid"})," attributes for the main container and subcomponents, making it easier to test the component."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Responsive Layout"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Uses styled-components for a responsive and visually appealing layout, with separate sections for origin/destination and date/time."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dynamic Placeholder Values"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Allows customization of placeholder values for the origin and destination fields via the ",e.jsx(n.code,{children:"placeholderValue"})," object."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Error Handling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Gracefully handles missing or invalid default values for origin, destination, date, or time by displaying placeholders or empty fields."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Supports both keyboard and mouse interactions for selecting locations, dates, and times."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Seamless Integration"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Designed to integrate seamlessly with other components in the application, such as ",e.jsx(n.code,{children:"LocationPicker"}),", ",e.jsx(n.code,{children:"DatePicker"}),", and ",e.jsx(n.code,{children:"TimePicker"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Origin and Destination Pickers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SegmentData"})," component uses two ",e.jsx(n.code,{children:"LocationPicker"})," components to allow users to select the origin and destination locations."]}),`
`,e.jsxs(n.li,{children:["Displays placeholders (",e.jsx(n.code,{children:'"Origin"'})," and ",e.jsx(n.code,{children:'"Destination"'}),") when no default values are provided."]}),`
`,e.jsxs(n.li,{children:["Supports dynamic filtering of locations using the ",e.jsx(n.code,{children:"onGetOriginData"})," and ",e.jsx(n.code,{children:"onGetDestinationData"})," callbacks."]}),`
`,e.jsxs(n.li,{children:["When a location is selected, the corresponding callback (",e.jsx(n.code,{children:"onOriginLocationSelected"})," or ",e.jsx(n.code,{children:"onDestinationLocationSelected"}),") is triggered."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date and Time Pickers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"DatePicker"})," component is used to select the flight's date, and the ",e.jsx(n.code,{children:"TimePicker"})," component is used to select the flight's time."]}),`
`,e.jsxs(n.li,{children:["Both components display default values provided via the ",e.jsx(n.code,{children:"dateTimeDefault"})," prop."]}),`
`,e.jsxs(n.li,{children:["When a date or time is selected, the corresponding callback (",e.jsx(n.code,{children:"onDateSelected"})," or ",e.jsx(n.code,{children:"onTimeSelected"}),") is triggered."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dynamic Placeholder Values"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The placeholders for the origin and destination fields are customizable through the ",e.jsx(n.code,{children:"placeholderValue"})," object."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Error Handling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If no default values are provided for origin, destination, date, or time, the component gracefully handles these cases by displaying placeholders or empty fields."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users can interact with the component using both keyboard and mouse."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"LocationPicker"}),", ",e.jsx(n.code,{children:"DatePicker"}),", and ",e.jsx(n.code,{children:"TimePicker"})," components support native browser functionality for input and selection."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Execution"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component triggers the following callbacks when user actions occur:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onOriginLocationSelected"}),": Triggered when an origin location is selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onDestinationLocationSelected"}),": Triggered when a destination location is selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onDateSelected"}),": Triggered when a date is selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onTimeSelected"}),": Triggered when a time is selected."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function y(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{y as default};
