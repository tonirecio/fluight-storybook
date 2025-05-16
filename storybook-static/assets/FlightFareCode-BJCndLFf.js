import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as i}from"./index-BGurhFi8.js";import{F as l}from"./FlightFareCode.stories-Cf1_G54g.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function d(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"flightfarecode",children:"FlightFareCode"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FlightFareCode"})," component is designed to display fare name and fare code information for a flight. It validates the provided data and ensures that only valid fare codes are displayed. If the data is invalid or unavailable, it displays an alternative message."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"flightfarecodeprops",children:e.jsx(n.code,{children:"FlightFareCodeProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"journeyBreakdownItemIndex"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"-1"})}),e.jsx(n.td,{children:"The index of the journey breakdown item, used for testing purposes."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"fareName"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string | null | undefined"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:'The name of the fare (e.g., "Economy").'})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"fareCode"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string | null | undefined"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:'The code of the fare (e.g., "Y·123").'})]})]})]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fare Name and Code Display"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays the fare name and fare code in a styled container."}),`
`,e.jsxs(n.li,{children:["Formats the fare code with parentheses (e.g., ",e.jsx(n.code,{children:"(Y·123)"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Validation of Fare Data"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Validates the ",e.jsx(n.code,{children:"fareName"})," and ",e.jsx(n.code,{children:"fareCode"})," using a regular expression (",e.jsx(n.code,{children:"/^[A-Za-z]·[A-Z0-9]+$/"}),")."]}),`
`,e.jsx(n.li,{children:"Ensures that only valid fare codes are displayed."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fallback for Invalid Data"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Displays a fallback message ("Fare code not available") if the fare data is invalid or unavailable.'}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"data-testid"})," attributes for easier testing with tools like ",e.jsx(n.code,{children:"@testing-library/react"}),"."]}),`
`,e.jsx(n.li,{children:"Provides unique test IDs for fare name, fare code, and fallback messages."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Validation of Fare Data"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"validData"})," function checks whether the ",e.jsx(n.code,{children:"fareName"})," and ",e.jsx(n.code,{children:"fareCode"})," are valid:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensures that ",e.jsx(n.code,{children:"fareName"})," and ",e.jsx(n.code,{children:"fareCode"})," are not ",e.jsx(n.code,{children:"null"}),", ",e.jsx(n.code,{children:"undefined"}),", or the string ",e.jsx(n.code,{children:'"undefined"'}),"."]}),`
`,e.jsxs(n.li,{children:["Uses a regular expression to validate the format of the ",e.jsx(n.code,{children:"fareCode"}),"."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Rendering Fare Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the fare data is valid:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Displays the ",e.jsx(n.code,{children:"fareName"})," and ",e.jsx(n.code,{children:"fareCode"})," in a styled container."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"fareCode"})," is trimmed and wrapped in parentheses."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If the fare data is invalid:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Displays a fallback message: "Fare code not available."'}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function g(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{g as default};
