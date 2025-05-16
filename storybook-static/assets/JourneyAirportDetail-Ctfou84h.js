import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as d}from"./index-BGurhFi8.js";import{J as l}from"./JourneyAirportDetail.stories-W8as_nAF.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"journeyairportdetail",children:"JourneyAirportDetail"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"JourneyAirportDetail"})," component is designed to display detailed information about a flight's departure or arrival. It includes details such as the city, airport, terminal, date, and flight time."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"journeyairportdetailprops",children:e.jsx(n.code,{children:"JourneyAirportDetailProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"props"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"any"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"Additional props for debugging or customization."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"journeyBreakdownItemIndex"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"-1"})}),e.jsx(n.td,{children:"The index of the journey breakdown item, used for testing purposes."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"date"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Date"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The date of the flight."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"departureDone"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsxs(n.td,{children:["Indicates whether the flight is a departure (",e.jsx(n.code,{children:"false"}),") or arrival (",e.jsx(n.code,{children:"true"}),")."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"differenceArrival"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:'The day difference indicator (e.g., "+1" for next-day arrival).'})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"cityName"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The name of the city for the flight."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"airportName"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The name of the airport."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"airportCode"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The IATA code of the airport."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"terminal"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The terminal at the airport."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"flyingTime"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The total flight time."})]})]})]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date and Time Formatting"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Formats the flight date into a readable format (e.g., "Mon, 12 Dec").'}),`
`,e.jsxs(n.li,{children:["Adjusts the format based on the ",e.jsx(n.code,{children:"differenceArrival"})," and ",e.jsx(n.code,{children:"departureDone"})," props."]}),`
`,e.jsxs(n.li,{children:["Dynamically selects the font color for the date based on the ",e.jsx(n.code,{children:"differenceArrival"})," value (e.g., grey, orange, or red)."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"City and Hour Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays a message indicating the departure or arrival city and time."}),`
`,e.jsx(n.li,{children:"Handles cases where city or time information is unavailable with fallback messages."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Airport Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Displays the airport name and code in a formatted string (e.g., "John F. Kennedy International (JFK)").'}),`
`,e.jsx(n.li,{children:"Provides fallback messages if the airport name or code is missing."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Terminal Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Displays the terminal information for the flight (e.g., "Terminal 4").'}),`
`,e.jsx(n.li,{children:"Provides a fallback message if terminal information is unavailable."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Flight Time Display"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Displays the total flight time if available (e.g., "2h 30m flight").'}),`
`,e.jsx(n.li,{children:"Provides a fallback message if flight time is not available."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"data-testid"})," attributes for easier testing with tools like ",e.jsx(n.code,{children:"@testing-library/react"}),"."]}),`
`,e.jsx(n.li,{children:"Provides unique test IDs for date, city, airport, terminal, and flight time information."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date Formatting"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"getFormatedDate"})," function formats the flight date into a readable format:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Includes the day of the week, day, and month."}),`
`,e.jsxs(n.li,{children:["Adjusts the format based on the ",e.jsx(n.code,{children:"differenceArrival"})," and ",e.jsx(n.code,{children:"departureDone"})," props."]}),`
`,e.jsxs(n.li,{children:["Returns ",e.jsx(n.code,{children:"null"})," if the date is invalid."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"City and Hour Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"cityAndHourInfo"})," function generates a message indicating the departure or arrival city and time:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Example: "Depart from New York at 14:30" or "Arrive in London at 08:15."'}),`
`,e.jsx(n.li,{children:"Handles cases where city or time information is missing with fallback messages."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Airport Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"airportInfo"})," function generates a formatted string for the airport name and code:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Example: "John F. Kennedy International (JFK)."'}),`
`,e.jsx(n.li,{children:"Provides fallback messages if the airport name or code is unavailable."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Terminal Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"terminalInfo"})," function generates a message for the terminal:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Example: "Terminal 4."'}),`
`,e.jsx(n.li,{children:"Provides a fallback message if terminal information is unavailable."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Flight Time Display"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"getFlightTimeContent"})," function displays the total flight time:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Example: "2h 30m flight."'}),`
`,e.jsx(n.li,{children:"Provides a fallback message if flight time is not available."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute is applied to key elements for testing purposes:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Date and time: ",e.jsx(n.code,{children:'data-testid="journey-airport-detail-day-difference"'})]}),`
`,e.jsxs(n.li,{children:["City and hour: ",e.jsx(n.code,{children:'data-testid="journey-first-line"'})]}),`
`,e.jsxs(n.li,{children:["Airport: ",e.jsx(n.code,{children:'data-testid="journey-second-line"'})]}),`
`,e.jsxs(n.li,{children:["Terminal: ",e.jsx(n.code,{children:'data-testid="journey-third-line"'})]}),`
`,e.jsxs(n.li,{children:["Flight time: ",e.jsx(n.code,{children:'data-testid="journey-fourth-line"'})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{g as default};
