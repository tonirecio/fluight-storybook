import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as d}from"./index-DE19USiH.js";import{S as l}from"./SegmentFilter.stories-BGcmXQUH.js";import"./index-D4H_InIO.js";import"./iframe-Fg0hhW7T.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-DO8eKbQv.js";import"./styled-components.browser.esm-ALczo-9h.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[e.jsx(d,{of:l}),";"]}),`
`,e.jsx(n.h1,{id:"segmentfilter",children:"SegmentFilter"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SegmentFilter"})," component is designed to manage and display flight segment data. It integrates the ",e.jsx(n.code,{children:"SegmentData"})," component to allow users to select origin and destination locations, as well as the date and time of the flight. Additionally, it provides functionality to delete a segment and dynamically update segment labels."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"segmentfilterprops",children:e.jsx(n.code,{children:"SegmentFilterProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"index"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The index of the segment in the list of segments."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"segment"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"segmentEntry"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The flight segment data, including origin, destination, date, and time."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"isDeleteButtonEnabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})}),e.jsx(n.td,{children:"Determines whether the delete button is enabled or disabled."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dataTestId"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'segment-filter'"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute for the main container, useful for testing."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onGetOriginData"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(filter: string) => location[]"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function to fetch filtered origin location data based on user input."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onGetDestinationData"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(filter: string) => location[]"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function to fetch filtered destination location data based on user input."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSegmentSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(segment: segmentEntry) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function triggered when the segment data is updated (e.g., origin, destination, date, or time)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onDeleteSegment"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(id: number) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function triggered when the delete button is clicked, passing the segment ID."})]})]})]}),`
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
`,e.jsx(n.h3,{id:"segmententry",children:e.jsx(n.code,{children:"segmentEntry"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"segmentEntry"})," type represents a flight segment object with the following structure:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface segmentEntry {\r
  id: number; // Unique identifier for the segment\r
  origin: location | null; // Origin location of the flight\r
  destination: location | null; // Destination location of the flight\r
  date: Date | null; // Date of the flight\r
  time: Date | null; // Time of the flight\r
}
`})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dynamic Segment Labels"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Displays the origin and destination city names in the format ",e.jsx(n.code,{children:"Origin City - Destination City"}),"."]}),`
`,e.jsx(n.li,{children:"Updates dynamically when the user selects a new origin or destination."}),`
`,e.jsxs(n.li,{children:["Defaults to ",e.jsx(n.code,{children:'"From"'})," and ",e.jsx(n.code,{children:'"To"'})," if no origin or destination is provided."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Integration with ",e.jsx(n.code,{children:"SegmentData"})]}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses the ",e.jsx(n.code,{children:"SegmentData"})," component to manage origin, destination, date, and time selection."]}),`
`,e.jsxs(n.li,{children:["Supports callbacks for each selection (",e.jsx(n.code,{children:"onOriginLocationSelected"}),", ",e.jsx(n.code,{children:"onDestinationLocationSelected"}),", ",e.jsx(n.code,{children:"onDateSelected"}),", ",e.jsx(n.code,{children:"onTimeSelected"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Delete Button"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Includes a delete button to remove the segment."}),`
`,e.jsxs(n.li,{children:["The button can be enabled or disabled using the ",e.jsx(n.code,{children:"isDeleteButtonEnabled"})," prop."]}),`
`,e.jsxs(n.li,{children:["Triggers the ",e.jsx(n.code,{children:"onDeleteSegment"})," callback when clicked, passing the segment ID."]}),`
`,e.jsxs(n.li,{children:["Displays a gray-colored delete icon (",e.jsx(n.code,{children:"#808080"}),") when the button is disabled."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Triggers ",e.jsx(n.code,{children:"onSegmentSelected"})," whenever the user updates the segment data (origin, destination, date, or time)."]}),`
`,e.jsx(n.li,{children:"Allows the parent component to track changes to the segment."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Customizable Testing IDs"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"data-testid"})," attributes for the main container, delete button, and segment labels, making it easier to test the component."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Responsive Layout"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses styled-components for a responsive and visually appealing layout:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"StyledSegmentFilter"}),": Wraps the entire component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"StyledTextAndDelete"}),": Contains the segment labels and delete button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"StyledFromToTitle"}),": Displays the segment labels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"StyledDeleteIcon"}),": Styles the delete button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"StyledDataFilter"}),": Contains the ",e.jsx(n.code,{children:"SegmentData"})," component."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Error Handling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Gracefully handles missing or invalid segment data by displaying placeholders or empty fields for origin, destination, date, or time."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Supports both keyboard and mouse interactions for selecting locations, dates, and times."}),`
`,e.jsx(n.li,{children:"The delete button is clickable and accessible for removing segments."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Seamless Integration"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Designed to integrate seamlessly with the ",e.jsx(n.code,{children:"SegmentData"})," component and other related components in the application."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dynamic Segment Labels"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SegmentFilter"})," component initializes the ",e.jsx(n.code,{children:"segmentLabels"})," state with the origin and destination codes and cities from the ",e.jsx(n.code,{children:"segment"})," prop."]}),`
`,e.jsxs(n.li,{children:["If no origin or destination is provided, the labels default to ",e.jsx(n.code,{children:'"From"'})," and ",e.jsx(n.code,{children:'"To"'}),"."]}),`
`,e.jsxs(n.li,{children:["The labels update dynamically when the user selects a new origin or destination through the ",e.jsx(n.code,{children:"SegmentData"})," component."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Integration with ",e.jsx(n.code,{children:"SegmentData"})]}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SegmentData"})," component is used to manage the selection of origin, destination, date, and time."]}),`
`,e.jsxs(n.li,{children:["When a selection is made, the corresponding callback (",e.jsx(n.code,{children:"onSegmentSelected"}),") is triggered, and the ",e.jsx(n.code,{children:"segmentLabels"})," state is updated."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SegmentData"})," component also supports dynamic filtering of locations using the ",e.jsx(n.code,{children:"onGetOriginData"})," and ",e.jsx(n.code,{children:"onGetDestinationData"})," callbacks."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Delete Button"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The delete button is displayed if ",e.jsx(n.code,{children:"isDeleteButtonEnabled"})," is ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:["When clicked, the ",e.jsx(n.code,{children:"onDeleteSegment"})," callback is triggered, passing the segment ID."]}),`
`,e.jsxs(n.li,{children:["If the button is disabled, it is displayed in a gray color (",e.jsx(n.code,{children:"#808080"}),") and does not trigger any action."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Execution"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component triggers the following callbacks when user actions occur:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onSegmentSelected"}),": Triggered whenever the user updates the segment data (origin, destination, date, or time)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onDeleteSegment"}),": Triggered when the delete button is clicked, passing the segment ID."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Error Handling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If no default values are provided for the segment, the component gracefully handles these cases by displaying placeholders or empty fields for origin, destination, date, or time."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users can interact with the component using both keyboard and mouse."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"SegmentData"})," component supports native browser functionality for input and selection."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Responsive Layout"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component is designed to be responsive, ensuring proper alignment and spacing between the segment labels and the ",e.jsx(n.code,{children:"SegmentData"})," section."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"StyledSeparator"})," ensures visual clarity between different sections of the component."]}),`
`]}),`
`]}),`
`]})]})}function y(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{y as default};
