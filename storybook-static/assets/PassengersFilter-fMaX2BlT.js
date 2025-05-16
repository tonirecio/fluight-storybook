import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as d}from"./index-BGurhFi8.js";import{P as t}from"./PassengersFilter.stories-DcUZBMAA.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:t}),`
`,e.jsx(n.h1,{id:"passengersfilter",children:"PassengersFilter"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PassengersFilter"})," component is designed to manage and display passenger selection for a flight. It allows users to dynamically add, update, and remove passenger types and counts, while enforcing specific rules for valid passenger configurations."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"passengersfilterprops",children:e.jsx(n.code,{children:"PassengersFilterProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dataTestId"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'passengers-filter'"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute for the main container, useful for testing."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onPassengersSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(passengers: passengerData[]) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function triggered whenever the passenger data is updated."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typescript-types",children:"TypeScript Types"}),`
`,e.jsx(n.h3,{id:"passengerdata",children:e.jsx(n.code,{children:"passengerData"})}),`
`,e.jsx(n.p,{children:"The passengerData type represents the structure of a passenger entry:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface passengerData {\r
  id: number; // Unique identifier for the passenger entry\r
  number: number; // Number of passengers of this type\r
  type: string; // Type of passenger (e.g., 'ADT', 'CHD', 'CMP')\r
}
`})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dynamic Passenger Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Allows users to dynamically add, update, and remove passenger types and counts."}),`
`,e.jsxs(n.li,{children:["Supports up to 9 total passengers and a maximum of 3 passenger types (",e.jsx(n.code,{children:"ADT"}),", ",e.jsx(n.code,{children:"CHD"}),", ",e.jsx(n.code,{children:"CMP"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Passenger Type Selection"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Users can select passenger types (",e.jsx(n.code,{children:"ADT"})," for Adult, ",e.jsx(n.code,{children:"CHD"})," for Child, ",e.jsx(n.code,{children:"CMP"})," for Companion)."]}),`
`,e.jsxs(n.li,{children:["Enforces rules such as requiring at least one ",e.jsx(n.code,{children:"ADT"})," or ",e.jsx(n.code,{children:"CMP"})," when a ",e.jsx(n.code,{children:"CHD"})," is present."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Triggers the ",e.jsx(n.code,{children:"onPassengersSelected"})," callback whenever the passenger data is updated, passing the updated array of ",e.jsx(n.code,{children:"passengerData"})," objects."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Add and Remove Passenger Types"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes a button to add new passenger types, styled using ",e.jsx(n.code,{children:"StyledButtonPlus"})," and displaying a ",e.jsx(n.code,{children:"PlusIcon"}),"."]}),`
`,e.jsx(n.li,{children:"Allows users to remove passenger types, with validation to ensure valid configurations."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Validation Rules"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensures that the total number of passengers does not exceed 9."}),`
`,e.jsx(n.li,{children:"Prevents adding duplicate passenger types."}),`
`,e.jsxs(n.li,{children:["Displays an alert if a ",e.jsx(n.code,{children:"CHD"})," is selected without an accompanying ",e.jsx(n.code,{children:"ADT"})," or ",e.jsx(n.code,{children:"CMP"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Supports keyboard interactions for incrementing and decrementing passenger counts using arrow keys."}),`
`,e.jsx(n.li,{children:"Users can interact with the component using both keyboard and mouse."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Passenger Initialization"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component initializes with a single passenger type (",e.jsx(n.code,{children:"ADT"}),") and a count of 1."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"selectors"})," state tracks the count of passengers for each type."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"types"})," state tracks the passenger types (",e.jsx(n.code,{children:"ADT"}),", ",e.jsx(n.code,{children:"CHD"}),", ",e.jsx(n.code,{children:"CMP"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Adding Passenger Types"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'The "Add Passenger" button allows users to add new passenger types.'}),`
`,e.jsxs(n.li,{children:["New passenger types are added in the order of ",e.jsx(n.code,{children:"ADT"}),", ",e.jsx(n.code,{children:"CMP"}),", and ",e.jsx(n.code,{children:"CHD"}),"."]}),`
`,e.jsx(n.li,{children:"The button is disabled if the total number of passengers reaches 9 or if all 3 types are already selected."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Updating Passenger Counts"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users can increment or decrement the count of passengers for each type using the input field or arrow keys."}),`
`,e.jsx(n.li,{children:"The total number of passengers cannot exceed 9."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Removing Passenger Types"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users can remove a passenger type using the delete button."}),`
`,e.jsxs(n.li,{children:["Validation ensures that at least one ",e.jsx(n.code,{children:"ADT"})," or ",e.jsx(n.code,{children:"CMP"})," is present if a ",e.jsx(n.code,{children:"CHD"})," is selected."]}),`
`,e.jsxs(n.li,{children:["If removing a passenger type violates the rules, an alert is displayed using the ",e.jsx(n.code,{children:"showAlert"})," function."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Execution"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"onPassengersSelected"})," callback is triggered whenever the ",e.jsx(n.code,{children:"selectors"})," or ",e.jsx(n.code,{children:"types"})," state is updated, passing the updated passenger data to the parent component."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Validation and Alerts"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"showAlert"})," function displays a styled alert message if the user attempts an invalid configuration (e.g., removing all adults when a child is present)."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users can interact with the component using both keyboard and mouse."}),`
`,e.jsx(n.li,{children:"The input fields support arrow key interactions for incrementing and decrementing counts."}),`
`]}),`
`]}),`
`]})]})}function y(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{y as default};
