import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as t}from"./index-BqIVwv1J.js";import{M as d}from"./index-BGurhFi8.js";import{S as r}from"./SegmentsTabs.stories-CL5lYVOv.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(n.h1,{id:"segmentstabs",children:"SegmentsTabs"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SegmentsTabs"})," component is designed to display a series of tabs representing flight segments. It allows users to navigate between different flight segments, highlighting the selected tab and enabling or disabling tabs based on their position relative to the selected one."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"segmentstabsprops",children:e.jsx(n.code,{children:"SegmentsTabsProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"tabs"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"segmentTab[]"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"An array of flight segment data, each containing departure, arrival, and day information."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"selectedTab"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The index of the currently selected tab."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onTabSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(index: number) => void"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"A callback function triggered when a tab is selected."})]})]})]}),`
`,e.jsx(n.h2,{id:"typescript-types",children:"TypeScript Types"}),`
`,e.jsx(n.h3,{id:"segmenttab",children:e.jsx(n.code,{children:"segmentTab"})}),`
`,e.jsx(n.p,{children:"The segmentTab type represents the structure of a flight segment tab:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type location = {\r
interface segmentTab {\r
  departure: string; // Departure location description\r
  arrival: string; // Arrival location description\r
  day: string; // Day of the flight segment\r
};
`})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dynamic Tab Rendering"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Renders a tab for each flight segment in the ",e.jsx(n.code,{children:"tabs"})," array."]}),`
`,e.jsx(n.li,{children:"Displays the departure, arrival, and day information for each segment."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Selected Tab Highlighting"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Highlights the currently selected tab using the ",e.jsx(n.code,{children:"StyledSelectedTab"})," styled-component."]}),`
`,e.jsx(n.li,{children:"Ensures the selected tab is visually distinct and not clickable."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Enabled and Disabled Tabs"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tabs before the selected tab are enabled and clickable, allowing users to navigate back."}),`
`,e.jsxs(n.li,{children:["Tabs after the selected tab are disabled and styled using ",e.jsx(n.code,{children:"StyledDisabledTab"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Callback Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Triggers the ",e.jsx(n.code,{children:"onTabSelected"})," callback when an enabled tab is clicked, passing the index of the selected tab."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Flight Information Display"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays the total number of tabs and the currently selected tab index in the header."}),`
`,e.jsx(n.li,{children:"Includes a message indicating that prices include taxes."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"data-testid"})," attributes for easier testing with tools like ",e.jsx(n.code,{children:"@testing-library/react"}),"."]}),`
`,e.jsx(n.li,{children:"Provides unique test IDs for each tab, departure, arrival, and day information."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Rendering Tabs"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component maps over the ",e.jsx(n.code,{children:"tabs"})," array to render a tab for each flight segment."]}),`
`,e.jsxs(n.li,{children:["Each tab displays the departure, arrival, and day information using ",e.jsx(n.code,{children:"StyledBoldText"})," and ",e.jsx(n.code,{children:"StyledNormalText"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Selected Tab"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The tab corresponding to the ",e.jsx(n.code,{children:"selectedTab"})," index is highlighted using ",e.jsx(n.code,{children:"StyledSelectedTab"}),"."]}),`
`,e.jsx(n.li,{children:"The selected tab is not clickable and visually distinct from other tabs."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Enabled Tabs"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tabs before the ",e.jsx(n.code,{children:"selectedTab"})," index are rendered using ",e.jsx(n.code,{children:"StyledEnabledTab"}),"."]}),`
`,e.jsxs(n.li,{children:["Clicking on an enabled tab triggers the ",e.jsx(n.code,{children:"onTabSelected"})," callback with the index of the clicked tab."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Disabled Tabs"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Tabs after the ",e.jsx(n.code,{children:"selectedTab"})," index are rendered using ",e.jsx(n.code,{children:"StyledDisabledTab"}),"."]}),`
`,e.jsx(n.li,{children:"Disabled tabs are styled to indicate they are not clickable."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Header Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The header displays the current flight segment index (",e.jsx(n.code,{children:"selectedTab + 1"}),") and the total number of segments (",e.jsx(n.code,{children:"tabs.length"}),")."]}),`
`,e.jsx(n.li,{children:"Includes a message indicating that prices include taxes."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users can interact with the component using a mouse to click on enabled tabs."}),`
`,e.jsx(n.li,{children:"The selected tab and disabled tabs are not interactive."}),`
`]}),`
`]}),`
`]})]})}function m(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
