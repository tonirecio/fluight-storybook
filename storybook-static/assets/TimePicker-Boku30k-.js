import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as t}from"./index-BqIVwv1J.js";import{M as d}from"./index-BGurhFi8.js";import{T as r}from"./TimePicker.stories-Ce_YUA2S.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(n.h1,{id:"timepicker",children:"TimePicker"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"TimePicker"})," component is a React component designed for selecting times. It provides a simple and customizable interface for time selection, with support for default values, callbacks, and formatted time handling. This component is built with TypeScript and styled-components."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"timepickerprops",children:e.jsx(n.code,{children:"TimePickerProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"timeDefault"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Date"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"new Date()"})}),e.jsx(n.td,{children:"The default time to display in the time picker."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"dataTestId"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'time-picker'"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute for the time picker, useful for testing."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onTimeSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(time: Date) => void"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"A callback function triggered when a new time is selected by the user."})]})]})]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Customizable Styling"}),": The ",e.jsx(n.code,{children:"TimePicker"})," component uses ",e.jsx(n.code,{children:"StyledTimeContainer"}),", a styled-component that adapts to the application's theme, including colors, paddings, and fonts."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Default Time"}),": Displays a default time when the component is rendered, which can be customized using the ",e.jsx(n.code,{children:"timeDefault"})," prop."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Time Formatting"}),": Automatically formats the selected time into an ",e.jsx(n.code,{children:"HH:mm"})," string for consistent display."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Support"}),": Triggers the ",e.jsx(n.code,{children:"onTimeSelected"})," callback when a new time is selected, allowing integration with other components or logic."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Responsive Design"}),": The input field is styled to be responsive, with a width of 100% and adaptable padding and font sizes."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Native HTML5 Support"}),": Leverages the ",e.jsx(n.code,{children:'<input type="time">'})," element for native time selection, ensuring compatibility across modern browsers."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Theme Integration"}),": Fully integrates with the application's theme, using properties like ",e.jsx(n.code,{children:"colors.controlsBorder"}),", ",e.jsx(n.code,{children:"paddings.medium"}),", and ",e.jsx(n.code,{children:"fonts.bodyText"})," from the ",e.jsx(n.code,{children:"DefaultTheme"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),": Supports both keyboard and mouse interactions for selecting and adjusting the time."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Input Field"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"StyledTimeContainer"})," is an ",e.jsx(n.code,{children:"<input>"})," element styled using styled-components."]}),`
`,e.jsxs(n.li,{children:["It displays the default time in ",e.jsx(n.code,{children:"HH:mm"})," format when the component is rendered."]}),`
`,e.jsx(n.li,{children:"The input field updates dynamically as the user selects or types a new time."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Time Formatting"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"formatTime"})," utility ensures that the time is always displayed in a consistent ",e.jsx(n.code,{children:"HH:mm"})," format."]}),`
`,e.jsx(n.li,{children:"When the user modifies the time, the input value is formatted and updated accordingly."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Time Conversion"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"stringToTime"})," utility converts the ",e.jsx(n.code,{children:"HH:mm"})," string entered by the user into a ",e.jsx(n.code,{children:"Date"})," object."]}),`
`,e.jsx(n.li,{children:"This ensures that the time is stored and processed in a standardized format."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Execution"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When the user selects or modifies the time, the ",e.jsx(n.code,{children:"onTimeSelected"})," callback is triggered (if provided)."]}),`
`,e.jsxs(n.li,{children:["The callback receives the updated ",e.jsx(n.code,{children:"Date"})," object representing the selected time."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Styling and Responsiveness"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"StyledTimeContainer"})," adapts to the application's theme using properties from the ",e.jsx(n.code,{children:"DefaultTheme"}),"."]}),`
`,e.jsxs(n.li,{children:["It includes:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A customizable border color (",e.jsx(n.code,{children:"colors.controlsBorder"}),")."]}),`
`,e.jsxs(n.li,{children:["Padding (",e.jsx(n.code,{children:"paddings.medium"}),") for spacing inside the input field."]}),`
`,e.jsxs(n.li,{children:["Font styles (",e.jsx(n.code,{children:"fonts.bodyText"}),") and sizes (",e.jsx(n.code,{children:"fonts.sizes.bodyText.size"}),") for text consistency."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"The input field is fully responsive, with a width of 100% and a height of 35px."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users can interact with the component using both keyboard and mouse."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:'<input type="time">'})," element supports native browser functionality for time selection."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Error Handling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the user enters an invalid time format, the ",e.jsx(n.code,{children:"stringToTime"})," utility ensures that the input is sanitized and converted into a valid ",e.jsx(n.code,{children:"Date"})," object."]}),`
`,e.jsxs(n.li,{children:["The component gracefully handles missing or invalid theme properties by falling back to default values (e.g., ",e.jsx(n.code,{children:"#CBCBCB"})," for borders, ",e.jsx(n.code,{children:"10px"})," for padding, and ",e.jsx(n.code,{children:"Arial"})," for fonts)."]}),`
`]}),`
`]}),`
`]})]})}function g(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{g as default};
