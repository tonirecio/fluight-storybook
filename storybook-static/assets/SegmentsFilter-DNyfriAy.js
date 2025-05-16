import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as l}from"./index-BGurhFi8.js";import{S as d}from"./SegmentsFilter.stories-BO7dNXp8.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(n.h1,{id:"segmentsfilter",children:"SegmentsFilter"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SegmentsFilter"})," component is designed to manage and display a list of flight segments. It allows users to dynamically add, update, and delete flight segments using the ",e.jsx(n.code,{children:"SegmentFilter"})," component."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"segmentsfilterprops",children:e.jsx(n.code,{children:"SegmentsFilterProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dataTestId"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'segments-filter'"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute for the main container, useful for testing."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSegmentsSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(segments: segmentEntry[]) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function triggered whenever the list of segments is updated."})]})]})]}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dynamic Segment Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Allows users to dynamically add, update, and delete flight segments."}),`
`,e.jsxs(n.li,{children:["Each segment is represented by a ",e.jsx(n.code,{children:"SegmentFilter"})," component."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Default Segment Initialization"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Initializes the first segment with default values using the ",e.jsx(n.code,{children:"defaultSegment"})," object."]}),`
`,e.jsx(n.li,{children:"New segments inherit the destination of the previous segment as their origin."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Triggers the ",e.jsx(n.code,{children:"onSegmentsSelected"})," callback whenever the list of segments is updated, passing the updated array of ",e.jsx(n.code,{children:"segmentEntry"})," objects."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Add Segment Button"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Includes a button to add new segments."}),`
`,e.jsxs(n.li,{children:["The button is styled using ",e.jsx(n.code,{children:"StyledAddFlightIcon"})," and displays a ",e.jsx(n.code,{children:"PlusIcon"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Delete Segment Functionality"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Allows users to delete segments using the delete button in the ",e.jsx(n.code,{children:"SegmentFilter"})," component."]}),`
`,e.jsx(n.li,{children:"The delete button is disabled for the first segment to ensure at least one segment remains."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Segment Updates"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"updateSegment"})," function allows individual segments to be updated dynamically when changes are made in the ",e.jsx(n.code,{children:"SegmentFilter"})," component."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users can interact with the component using both keyboard and mouse."}),`
`,e.jsx(n.li,{children:'The "Add Segment" button and delete buttons are clickable and accessible.'}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Seamless Integration"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Designed to integrate seamlessly with the ",e.jsx(n.code,{children:"SegmentFilter"})," component and other related components in the application."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Segment Initialization"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component initializes with a single segment using the ",e.jsx(n.code,{children:"defaultSegment"})," object."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"segments"})," state is an array of ",e.jsx(n.code,{children:"segmentEntry"})," objects, representing the list of flight segments."]}),`
`,e.jsx(n.li,{children:"Each segment includes default values for origin, destination, date, and time."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Adding Segments"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'The "Add Segment" button allows users to add new segments.'}),`
`,e.jsxs(n.li,{children:["When clicked, a new segment is added to the ",e.jsx(n.code,{children:"segments"})," state."]}),`
`,e.jsx(n.li,{children:"The new segment inherits the destination of the last segment as its origin."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"nextSegmentId"})," state is incremented to ensure unique IDs for each segment."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Updating Segments"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"updateSegment"})," function updates a specific segment in the ",e.jsx(n.code,{children:"segments"})," state when changes are made in the ",e.jsx(n.code,{children:"SegmentFilter"})," component."]}),`
`,e.jsxs(n.li,{children:["The updated segment is passed to the ",e.jsx(n.code,{children:"onSegmentSelected"})," callback, allowing the parent component to track changes."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Deleting Segments"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"handleDeleteSegment"})," function removes a segment from the ",e.jsx(n.code,{children:"segments"})," state when the delete button is clicked."]}),`
`,e.jsx(n.li,{children:"The delete button is disabled for the first segment to ensure at least one segment remains in the list."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Execution"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"onSegmentsSelected"})," callback is triggered whenever the ",e.jsx(n.code,{children:"segments"})," state is updated, passing the updated list of segments to the parent component."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dynamic Segment Rendering"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component maps over the ",e.jsx(n.code,{children:"segments"})," state to render a ",e.jsx(n.code,{children:"SegmentFilter"})," component for each segment."]}),`
`,e.jsxs(n.li,{children:["Each ",e.jsx(n.code,{children:"SegmentFilter"})," is passed props such as ",e.jsx(n.code,{children:"index"}),", ",e.jsx(n.code,{children:"isDeleteButtonEnabled"}),", and ",e.jsx(n.code,{children:"onSegmentSelected"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users can interact with the component using both keyboard and mouse."}),`
`,e.jsx(n.li,{children:'The "Add Segment" button and delete buttons are clickable and accessible.'}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Error Handling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If no segments are present, the component ensures that at least one default segment is initialized."}),`
`,e.jsx(n.li,{children:"The component gracefully handles missing or invalid segment data by displaying placeholders or empty fields for origin, destination, date, or time."}),`
`]}),`
`]}),`
`]})]})}function b(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{b as default};
