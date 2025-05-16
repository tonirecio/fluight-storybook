import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as d}from"./index-BGurhFi8.js";import{C as l}from"./CarrierLogo.stories-B1WdPOh8.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(r.h1,{id:"carrierlogo",children:"CarrierLogo"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"CarrierLogo"})," component is designed to display the logo of an airline carrier. It fetches the logo from a predefined URL based on the carrier's code and provides options to display the carrier's short name as a title."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(r.h3,{id:"carrierlogoprops",children:e.jsx(r.code,{children:"CarrierLogoProps"})}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop Name"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Required"}),e.jsx(r.th,{children:"Default Value"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"carrierCode"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string | undefined"})}),e.jsx(r.td,{children:"Yes"}),e.jsx(r.td,{children:"N/A"}),e.jsx(r.td,{children:'The unique code of the airline carrier (e.g., "AA" for American Airlines).'})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"carrierShortName"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"No"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"''"})}),e.jsx(r.td,{children:'The short name of the airline carrier (e.g., "American Airlines").'})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"showTitle"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:"No"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"false"})}),e.jsx(r.td,{children:"Determines whether the carrier's short name is displayed as a title below the logo."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"width"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{children:"No"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"200"})}),e.jsx(r.td,{children:"The width of the logo image in pixels."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"testId"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"No"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"'airline-logo'"})}),e.jsxs(r.td,{children:["The ",e.jsx(r.code,{children:"data-testid"})," attribute for the component, useful for testing."]})]})]})]}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Dynamic Logo Rendering"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Fetches and displays the airline carrier's logo from a predefined URL based on the ",e.jsx(r.code,{children:"carrierCode"}),"."]}),`
`,e.jsxs(r.li,{children:["Supports dynamic resizing of the logo using the ",e.jsx(r.code,{children:"width"})," prop."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Fallback for Missing Data"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:['Displays a fallback message ("Image not available") if the ',e.jsx(r.code,{children:"carrierCode"})," or ",e.jsx(r.code,{children:"carrierShortName"})," is missing or undefined."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Optional Title Display"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Allows the carrier's short name to be displayed as a title below the logo when the ",e.jsx(r.code,{children:"showTitle"})," prop is set to ",e.jsx(r.code,{children:"true"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Includes ",e.jsx(r.code,{children:"data-testid"})," attributes for easier testing with tools like ",e.jsx(r.code,{children:"@testing-library/react"}),"."]}),`
`,e.jsx(r.li,{children:"Provides unique test IDs for the logo, fallback message, and title."}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Lightweight and Reusable"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Designed to be a lightweight and reusable component for displaying airline logos in various contexts."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Rendering the Logo"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["If ",e.jsx(r.code,{children:"carrierCode"})," and ",e.jsx(r.code,{children:"carrierShortName"})," are valid, the component fetches the logo from the URL:",`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/{carrierCode}.svg
`})}),`
`]}),`
`,e.jsxs(r.li,{children:["The logo is displayed as an ",e.jsx(r.code,{children:"<img>"})," element with the specified ",e.jsx(r.code,{children:"width"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Fallback for Missing Data"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["If ",e.jsx(r.code,{children:"carrierCode"})," is ",e.jsx(r.code,{children:"undefined"})," or ",e.jsx(r.code,{children:"carrierShortName"})," is empty, the component renders a fallback message using ",e.jsx(r.code,{children:"StyledNoImage"}),' with the text "Image not available."']}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Title Display"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["If ",e.jsx(r.code,{children:"showTitle"})," is ",e.jsx(r.code,{children:"true"}),", the carrier's short name is displayed as a ",e.jsx(r.code,{children:"<h4>"})," element below the logo."]}),`
`,e.jsxs(r.li,{children:["The title is styled using ",e.jsx(r.code,{children:"StyledCarrierLogo"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Testing"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"data-testid"})," attribute is applied to key elements for testing."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Error Handling"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Gracefully handles missing or invalid data by displaying a fallback message when ",e.jsx(r.code,{children:"carrierCode"})," or ",e.jsx(r.code,{children:"carrierShortName"})," is not provided."]}),`
`]}),`
`]}),`
`]})]})}function f(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{f as default};
