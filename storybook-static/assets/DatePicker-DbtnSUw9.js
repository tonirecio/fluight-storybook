import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as d}from"./index-BqIVwv1J.js";import{M as r}from"./index-DE19USiH.js";import{D as i}from"./DatePicker.stories-D_9QVTY8.js";import"./index-D4H_InIO.js";import"./iframe-Fg0hhW7T.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-DO8eKbQv.js";import"./styled-components.browser.esm-ALczo-9h.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i}),`
`,e.jsx(t.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DatePicker"})," component is a React component designed for selecting dates. It provides a simple and customizable interface for date selection, with support for default values, callbacks, and formatted date handling."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(t.h3,{id:"datepickerprops",children:e.jsx(t.code,{children:"DatePickerProps"})}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Prop Name"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Required"}),e.jsx(t.th,{children:"Default Value"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"dateDefault"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"Date"})}),e.jsx(t.td,{children:"No"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"new Date()"})}),e.jsx(t.td,{children:"The default date to display in the date picker."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"dataTestId"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"No"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'date-picker'"})}),e.jsxs(t.td,{children:["The ",e.jsx(t.code,{children:"data-testid"})," attribute for the date picker, useful for testing."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"onDateSelected"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(date: Date) => void"})}),e.jsx(t.td,{children:"No"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"A callback function triggered when a new date is selected by the user."})]})]})]}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Default Date"}),": Displays a default date when the component is rendered."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Date Formatting"}),": Automatically formats the selected date into a YYYY-MM-DD string."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Callback Support"}),": Triggers the onDateSelected callback when a new date is selected."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Controlled Input"}),": Uses React's useState to manage the selected date."]}),`
`]}),`
`,e.jsx(t.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Input Field:"}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Displays the default date in YYYY-MM-DD format."}),`
`,e.jsx(t.li,{children:"Updates dynamically as the user selects a new date."}),`
`]}),`
`,e.jsxs(t.ol,{start:"2",children:[`
`,e.jsx(t.li,{children:"Date Formatting:"}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Uses the formatDate utility to ensure the date is always displayed in YYYY-MM-DD format."}),`
`]}),`
`,e.jsxs(t.ol,{start:"3",children:[`
`,e.jsx(t.li,{children:"Date Conversion:"}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Converts the input string into a Date object using the stringToDate utility."}),`
`]}),`
`,e.jsxs(t.ol,{start:"4",children:[`
`,e.jsx(t.li,{children:"Callback:"}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Triggers the onDateSelected callback whenever the user selects a new date."}),`
`]})]})}function f(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{f as default};
