import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as d}from"./index-BGurhFi8.js";import{P as r}from"./PreferredItem.stories-uFmOq6eH.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(n.h1,{id:"preferreditem",children:"PreferredItem"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PreferredItem"})," component is designed to display a selected item with an option to delete it. It is commonly used in scenarios where users can select multiple items and remove them individually."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"preferreditemprops",children:e.jsx(n.code,{children:"PreferredItemProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"itemCode"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The unique code of the item to be displayed."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onItemDeleted"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(item: string) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function triggered when the item is deleted."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dataTestId"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"''"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute for the component, useful for testing."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"''"})}),e.jsx(n.td,{children:"An optional class name for custom styling."})]})]})]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Item Display"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Displays an item with a unique code (",e.jsx(n.code,{children:"itemCode"}),")."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"itemCode"})," is rendered inside a styled container (",e.jsx(n.code,{children:"StyledSelectedCarrier"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Item Deletion"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes a delete button styled with ",e.jsx(n.code,{children:"StyledRemoveButton"}),"."]}),`
`,e.jsxs(n.li,{children:["Triggers the ",e.jsx(n.code,{children:"onItemDeleted"})," callback when the delete button is clicked, passing the ",e.jsx(n.code,{children:"itemCode"})," as a parameter."]}),`
`,e.jsxs(n.li,{children:["The delete button is accompanied by a ",e.jsx(n.code,{children:"CloseIcon"})," for visual clarity."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes a ",e.jsx(n.code,{children:"data-testid"})," attribute for easier testing with tools like ",e.jsx(n.code,{children:"@testing-library/react"}),"."]}),`
`,e.jsxs(n.li,{children:["The delete button has a unique ",e.jsx(n.code,{children:"data-testid"})," attribute in the format ",e.jsx(n.code,{children:"removeButton-{itemCode}"})," for precise testing."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Lightweight and Reusable"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Designed to be a lightweight and reusable component for managing selected items in lists or dropdowns."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Click Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When the delete button is clicked, the ",e.jsx(n.code,{children:"onItemDeleted"})," callback is triggered (if provided)."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"itemCode"})," is passed as a parameter to the callback, allowing the parent component to handle the deletion logic."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"dataTestId"})," prop allows developers to assign a unique test ID to the component for testing purposes."]}),`
`,e.jsxs(n.li,{children:["The delete button includes a ",e.jsx(n.code,{children:"data-testid"})," attribute in the format ",e.jsx(n.code,{children:"removeButton-{itemCode}"})," for precise testing."]}),`
`]}),`
`]}),`
`]})]})}function f(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{f as default};
