import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as d}from"./index-BGurhFi8.js";import{F as l}from"./FlightLayoverBanner.stories-DEvzVFzG.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"flightlayoverbanner",children:"FlightLayoverBanner"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FlightLayoverBanner"})," component is designed to display layover information for a flight. It calculates the layover duration based on arrival and departure times and provides a formatted message that includes the layover city and duration."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"flightlayoverbannerprops",children:e.jsx(n.code,{children:"FlightLayoverBannerProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"arrivalTime"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Date | undefined"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The arrival time of the flight segment before the layover."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"departureTime"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Date | undefined"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The departure time of the flight segment after the layover."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"layoverCity"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string | undefined"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The city where the layover occurs."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"testId"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"''"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute for testing purposes."]})]})]})]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Layover Duration Calculation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Calculates the layover duration in hours and minutes based on the provided ",e.jsx(n.code,{children:"arrivalTime"})," and ",e.jsx(n.code,{children:"departureTime"}),"."]}),`
`,e.jsxs(n.li,{children:["Handles overnight layovers by adjusting the ",e.jsx(n.code,{children:"departureTime"})," when it is earlier than the ",e.jsx(n.code,{children:"arrivalTime"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Formatted Layover Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays a formatted message that includes the layover duration and city."}),`
`,e.jsx(n.li,{children:"Handles cases where layover information is incomplete or unavailable."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Validation of Dates"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensures that the provided ",e.jsx(n.code,{children:"arrivalTime"})," and ",e.jsx(n.code,{children:"departureTime"})," are valid ",e.jsx(n.code,{children:"Date"})," objects before performing calculations."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icon Integration"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Displays a clock icon (",e.jsx(n.code,{children:"ClockIcon"}),") alongside the layover information for visual context."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"data-testid"})," attributes for easier testing with tools like ",e.jsx(n.code,{children:"@testing-library/react"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Layover Duration Calculation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"calculateLayoverTime"})," function calculates the layover duration:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"arrivalTime"})," is earlier than ",e.jsx(n.code,{children:"departureTime"}),", the duration is calculated directly."]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"arrivalTime"})," is later than ",e.jsx(n.code,{children:"departureTime"}),", the ",e.jsx(n.code,{children:"departureTime"})," is adjusted by adding 24 hours to account for overnight layovers."]}),`
`,e.jsxs(n.li,{children:["Returns ",e.jsx(n.code,{children:"0"})," if either ",e.jsx(n.code,{children:"arrivalTime"})," or ",e.jsx(n.code,{children:"departureTime"})," is invalid."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Validation of Dates"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"isValidDate"})," function checks whether the provided ",e.jsx(n.code,{children:"arrivalTime"})," and ",e.jsx(n.code,{children:"departureTime"})," are valid ",e.jsx(n.code,{children:"Date"})," objects."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Formatted Layover Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"displayLayoverTime"}),' function formats the layover duration as a string (e.g., "2h 30m").']}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"displayLayoverInformation"})," function combines the layover duration and city into a complete message:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Example: "2h 30m layover in New York."'}),`
`,e.jsx(n.li,{children:"Handles cases where either the layover duration or city is unavailable."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Rendering"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component renders the layover information inside a styled container (",e.jsx(n.code,{children:"FlightLayoverBannerStyled"}),")."]}),`
`,e.jsxs(n.li,{children:["Includes a clock icon (",e.jsx(n.code,{children:"ClockIcon"}),") for visual context."]}),`
`]}),`
`]}),`
`]})]})}function y(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{y as default};
