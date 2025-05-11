import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as r}from"./index-DE19USiH.js";import{L as l}from"./LocationPicker.stories-tX0Cv9aH.js";import"./index-D4H_InIO.js";import"./iframe-Fg0hhW7T.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-DO8eKbQv.js";import"./styled-components.browser.esm-ALczo-9h.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"locationpicker",children:"LocationPicker"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"LocationPicker"})," component is a React component designed for selecting a location from a list of options. It supports filtering locations based on user input, displaying previous searches, and handling location selection. This component is built with TypeScript and styled-components."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"locationpickerprops",children:e.jsx(n.code,{children:"LocationPickerProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"previousSearches"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"location[]"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"An array of previously searched locations to display when no input is provided."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"selectedLocation"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"location | null"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"null"})}),e.jsx(n.td,{children:"The currently selected location, if any."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"placeholderValue"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The placeholder text to display in the input field."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dataTestId"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'location-picker'"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute for the input field, useful for testing."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onGetData"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(filter: string) => location[]"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"An optional callback function to fetch filtered location data based on user input."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onLocationSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(location: location) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"An optional callback function triggered when a location is selected."})]})]})]}),`
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
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Filtering"}),": Filters the list of locations based on user input."]}),`
`,e.jsx(n.li,{children:"Previous Searches: Displays a list of previously searched locations when no input is provided."}),`
`,e.jsx(n.li,{children:"Customizable Data Fetching: Allows the use of a custom onGetData callback to fetch filtered location data."}),`
`,e.jsx(n.li,{children:"Selection Handling: Triggers the onLocationSelected callback when a location is selected."}),`
`,e.jsx(n.li,{children:"Keyboard and Mouse Interaction: Supports both keyboard and mouse interactions for selecting locations."}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Input Field:"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays the placeholder text when no location is selected."}),`
`,e.jsx(n.li,{children:"Updates dynamically as the user types."}),`
`]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Dropdown:"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Shows filtered results based on user input."}),`
`,e.jsx(n.li,{children:"Displays previous searches when the input is empty."}),`
`]}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Icons:"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Displays a HouseIcon for "All Airports".'}),`
`,e.jsx(n.li,{children:"Displays a PlaneIcon for specific airports."}),`
`,e.jsx(n.li,{children:"Displays a LocationIcon when no location is selected."}),`
`]}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:"Callbacks:"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"onGetData: Fetches filtered location data."}),`
`,e.jsx(n.li,{children:"onLocationSelected: Triggered when a location is selected."}),`
`]})]})}function y(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{y as default};
