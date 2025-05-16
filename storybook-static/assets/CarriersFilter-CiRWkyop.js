import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as l}from"./index-BGurhFi8.js";import{C as d}from"./CarriersFilter.stories-CmRLdqjZ.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(r.h1,{id:"carriersfilter",children:"CarriersFilter"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"CarriersFilter"}),' component is designed to manage and display a list of selected carriers (airlines). It allows users to search for carriers, select up to 5 carriers, and apply filters such as "Preferred," "Exclude," "Only," or "All."']}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(r.h3,{id:"carriersfilterprops",children:e.jsx(r.code,{children:"CarriersFilterProps"})}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop Name"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Required"}),e.jsx(r.th,{children:"Default Value"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"dataTestId"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"No"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"'carriers-filter-picker'"})}),e.jsxs(r.td,{children:["The ",e.jsx(r.code,{children:"data-testid"})," attribute for the main container, useful for testing."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"onGetData"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"(filter: string) => carrier[]"})}),e.jsx(r.td,{children:"No"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"undefined"})}),e.jsx(r.td,{children:"A callback function to fetch filtered carrier data based on user input."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"onCarriersFilterSelected"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"(carriers: string[]) => void"})}),e.jsx(r.td,{children:"No"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"undefined"})}),e.jsx(r.td,{children:"A callback function triggered whenever the list of selected carriers is updated."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"onCarriersFilterModifierSelected"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"(carriersModifier: string) => void"})}),e.jsx(r.td,{children:"No"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"undefined"})}),e.jsx(r.td,{children:"A callback function triggered whenever the carrier filter type is changed."})]})]})]}),`
`,e.jsx(r.h2,{id:"typescript-types",children:"TypeScript Types"}),`
`,e.jsx(r.h3,{id:"carrier",children:e.jsx(r.code,{children:"carrier"})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"carrier"})," type represents a airline information object with the following structure:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`export default interface carrier {\r
    code: string;\r
    name: string;\r
}
`})}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Carrier Selection"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Allows users to select up to 5 carriers from a dropdown list."}),`
`,e.jsxs(r.li,{children:["Displays selected carriers in a styled container using the ",e.jsx(r.code,{children:"PreferredItem"})," component."]}),`
`,e.jsx(r.li,{children:"Prevents duplicate carrier selection."}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Search Functionality"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Includes a search input field to filter carriers by code or name."}),`
`,e.jsxs(r.li,{children:["Supports dynamic filtering using the ",e.jsx(r.code,{children:"onGetData"})," callback or local data (",e.jsx(r.code,{children:"carriersData"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Dropdown for Carrier Options"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Displays a dropdown with filtered carrier options based on the search input."}),`
`,e.jsx(r.li,{children:"Automatically hides the dropdown when a carrier is selected or when the input loses focus."}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Carrier Filter Types"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:'Provides a dropdown to select carrier filter types: "Preferred," "Exclude," "Only," or "All."'}),`
`,e.jsxs(r.li,{children:["Triggers the ",e.jsx(r.code,{children:"onCarriersFilterModifierSelected"})," callback when the filter type is changed."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Remove Selected Carriers"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Includes a delete button for each selected carrier, allowing users to remove individual carriers."}),`
`,e.jsx(r.li,{children:'Provides a "Clear All" button to remove all selected carriers at once.'}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Validation Rules"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Enforces a maximum of 5 selected carriers."}),`
`,e.jsx(r.li,{children:"Ensures that the dropdown options dynamically update based on the search input."}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Includes ",e.jsx(r.code,{children:"data-testid"})," attributes for easier testing with tools like ",e.jsx(r.code,{children:"@testing-library/react"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Rendering"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The component renders a styled container (",e.jsx(r.code,{children:"StyledCarriersFilter"}),") with sections for selected carriers, a search input, and carrier filter types."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Carrier Selection"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Users can select carriers from the dropdown by clicking on an option."}),`
`,e.jsxs(r.li,{children:["Selected carriers are displayed in the ",e.jsx(r.code,{children:"StyledSelectedCarrierContainer"})," using the ",e.jsx(r.code,{children:"PreferredItem"})," component."]}),`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"onCarriersFilterSelected"})," callback is triggered whenever the list of selected carriers is updated."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Search Functionality"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The search input field filters carriers based on the user's input."}),`
`,e.jsxs(r.li,{children:["If the ",e.jsx(r.code,{children:"onGetData"})," callback is provided, it is used to fetch filtered carrier data. Otherwise, local data (",e.jsx(r.code,{children:"carriersData"}),") is used."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Dropdown Visibility"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The dropdown is displayed when the search input is focused or when the user types in the search field."}),`
`,e.jsx(r.li,{children:"The dropdown is hidden when a carrier is selected or when the input loses focus."}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Carrier Filter Types"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:'Users can select a carrier filter type from the dropdown ("Preferred," "Exclude," "Only," or "All").'}),`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"onCarriersFilterModifierSelected"})," callback is triggered whenever the filter type is changed."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Removing Carriers"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Users can remove individual carriers by clicking the delete button next to each carrier."}),`
`,e.jsx(r.li,{children:'The "Clear All" button removes all selected carriers.'}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Users can interact with the component using both keyboard and mouse."}),`
`,e.jsx(r.li,{children:"The search input supports typing and navigation through the dropdown options."}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Callback Execution"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"onCarriersFilterSelected"})," callback is triggered whenever the selected carriers are updated."]}),`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"onCarriersFilterModifierSelected"})," callback is triggered whenever the carrier filter type is changed."]}),`
`]}),`
`]}),`
`]})]})}function m(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{m as default};
